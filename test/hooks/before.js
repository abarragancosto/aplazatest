const DEFAULT_TIMEOUT = 10000;

module.exports = async function (capabilities, specs) {

	await browser.addCommand('waitToInteractable', async function (timeout = DEFAULT_TIMEOUT) {
		await this.waitForEnabled({ timeout: timeout });
		await this.waitForDisplayed({ timeout: timeout });
		await this.waitForClickable({ timeout: timeout });
	}, true);

	await browser.overwriteCommand('click', async function (origClickFunction, timeout = DEFAULT_TIMEOUT) {
		await this.waitToInteractable({ timeout: timeout });
		await this.scrollIntoView();
		return origClickFunction();
	}, true);

	await browser.overwriteCommand('setValue', async function (origSetValueFunction, valueToSet, timeout = DEFAULT_TIMEOUT) {
		await this.waitToInteractable({ timeout: timeout });
		await this.scrollIntoView();
		return origSetValueFunction(valueToSet);
	}, true);

	await browser.overwriteCommand('switchToFrame', async function (origSwitchToFrameFunction, frame, timeout = DEFAULT_TIMEOUT) {
		await frame.waitForExist({ timeout: timeout });
		return origSwitchToFrameFunction(frame);
	});

};
