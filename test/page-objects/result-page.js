const timeout = require('./support/timouts');

class ResultPage {

	get resultSuccess () { return $('[data-result=success]'); }
	get resultKo () { return $('[data-result=ko]'); }
	get resultPending () { return $('[data-result=pending]'); }

	async checkResultIsSuccess () {
		return (await this.resultSuccess).waitForDisplayed({ timeout: timeout.XL });
	}

	async checkResultIsNotSuccess () {
		return (await this.resultKo).waitForDisplayed({ timeout: timeout.XL });
	}

	async checkResultIsPending () {
		return (await this.resultPending).waitForDisplayed({ timeout: timeout.XL });
	}
}

module.exports = new ResultPage();
