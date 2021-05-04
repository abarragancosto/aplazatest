const { Given } = require('@cucumber/cucumber');
const ShopCartPage = require('../page-objects/shopcart-page');

Given(/^Accedo a la pantalla del carrito de compra$/, async () => {
	await ShopCartPage.accessToShopCart();
});

Given(/^Decido pagar con Aplazame$/, async () => {
	await ShopCartPage.payWithAplazame();
});
Given(/^Compruebo que el carrito de compra tiene un total de "([^"]*)"$/, async (totalCartAmountExpected) => {
	expect(await ShopCartPage.getShopCartAmount()).toEqual(totalCartAmountExpected);
});
