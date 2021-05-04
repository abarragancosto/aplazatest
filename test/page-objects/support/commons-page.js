class CommonsPage {

	get btnContinueCta () { return $('[name=cta] button'); }

	async accessTo (url) {
		return browser.url(url);
	}
}

module.exports = new CommonsPage();
