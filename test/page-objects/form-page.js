const CommonsElements = require('./support/commons-page');
const timeout = require('./support/timouts');
class FormPage {

	get inputDni () { return $('[name="document_id"]'); }
	get inputBirthday () { return $('[name="birthday"]'); }

	get cardNumberIframe () { return $('.-cc-number iframe'); }
	get cardExpiryIframe () { return $('.-cc-expiry iframe'); }
	get cardCvvIframe () { return $('.-cc-cvv iframe'); }
	get inputCardNumber () { return $('.CardNumberField-input-wrapper input'); }
	get inputCardExpiry () { return $('.InputContainer input'); }
	get inputCardCvv () { return $('.InputContainer input'); }

	get aplazameConditions () { return $('[data-checked="::aplazame_conditions_accepted"]'); }

	get sandBoxOTP () { return $('[data-reactid=".0.4.1"]'); }
	get otpInput () { return $('#OtpSecureInput'); }

	get sendLater () { return $('[data-if="send_later_allowed"]'); }

	get formsIsClosed () { return $('[name="forms"] .collapser-summary._is-opened'); }
	get agreementsOpened () { return $('[name="agreements_passed"] .collapser-summary._is-closed'); }

	async setDni (dni) {
		await (await this.inputDni).setValue(dni);
	}

	async awaitFormIsClosed () {
		await (await this.formsIsClosed).waitForExist({ timeout: timeout.L });
	}

	async setBirthday (birthday) {
		return (await this.inputBirthday).setValue(birthday);
	}

	async setCardNumber (cardNumber) {
		await browser.switchToFrame(await this.cardNumberIframe);
		await (await this.inputCardNumber).setValue(cardNumber);
		await browser.switchToParentFrame();
	}

	async setCardExpiry (cardExpiry) {
		await browser.switchToFrame(await this.cardExpiryIframe);
		await (await this.inputCardExpiry).setValue(cardExpiry);
		await browser.switchToParentFrame();
	}

	async setCardCvv (cardCvv) {
		await browser.switchToFrame(await this.cardCvvIframe);
		await (await this.inputCardCvv).setValue(cardCvv);
		await browser.switchToParentFrame();
	}

	async useConditions () {
		return (await this.aplazameConditions).click();
	}

	async waitForRecordedCardsIsOpen () {
		await (await this.agreementsOpened).waitForExist({ timeout: timeout.L });
		await (await this.agreementsOpened).waitForEnabled({ timeout: timeout.L });
	}

	async continue () {
		await (await CommonsElements.btnContinueCta).waitUntil(async function () {
			const classAttribute = await this.getAttribute('class');
			return !classAttribute.includes('disabled');
		}, {
			timeout: timeout.M,
			timeoutMsg: 'expected continue was enabled'
		});
		return (await CommonsElements.btnContinueCta).click();
	}

	async setSandboxOTP () {
		await (await this.sandBoxOTP).waitToInteractable();
		const otpCode = await (await this.sandBoxOTP).getText();
		await (await this.otpInput).setValue(otpCode);
	}

	async selectDoLater () {
		await (await this.sendLater).click();
	}

}

module.exports = new FormPage();
