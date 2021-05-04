const CommonsPage = require('./support/commons-page');

class ShopCartPage {
	get shopCartUrl () { return 'https://cdn.aplazame.com/widgets/demo/'; }
	get shopCartPrice () { return $('.total-wrapper .price'); }
	get dataAplazameButton () { return $('button[data-aplazame-button]'); }

	async accessToShopCart () {
		return CommonsPage.accessTo(this.shopCartUrl);
	}

	async getShopCartAmount () {
		return (await this.shopCartPrice).getText();
	}

	async payWithAplazame () {
		await (await this.dataAplazameButton).click();
	}
}

module.exports = new ShopCartPage();
