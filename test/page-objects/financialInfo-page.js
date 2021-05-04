const CommonsElements = require('./support/commons-page');

class FinancialInfoPage {

	get GDPRCheckBox () { return $('[name="gdpr_conditions"] input'); }
	get checkoutIframe () { return $('#aplazame-checkout-iframe'); }
	get insuranceContainer () { return $('.insurance__container'); }

	async acceptGDPR () {
		await browser.switchToFrame(await this.checkoutIframe);
		return (await this.GDPRCheckBox).click();
	}

	async ctaContinue () {
		return (await CommonsElements.btnContinueCta).click();
	}

	async awaitInsuranceContainerExists () {
		await (await this.insuranceContainer).waitToInteractable();
	}

}

module.exports = new FinancialInfoPage();
