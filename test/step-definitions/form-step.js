const { Given, When } = require('@cucumber/cucumber');
const Form = require('../page-objects/form-page');

When(/^Introduzco el dni con número "([^"]*)" y fecha de nacimiento "([^"]*)"$/, async (dni, birthday) => {
	await Form.setDni(dni);
	await Form.setBirthday(birthday);
});

When(/^Introduzco el dni con número "([^"]*)"$/, async (dni) => {
	await Form.setDni(dni);
	await Form.awaitFormIsClosed();
});

Given(/^Acepto las condiciones de uso$/, async () => {
	await Form.useConditions();
});

Given(/^Continuo la operativa$/, async () => {
	await Form.continue();
});

Given(/^Cumplimento los datos de la tarjeta con$/, async (table) => {
	const { cuenta, caducidad, cvv } = table.rowsHash();
	await Form.setCardNumber(cuenta);
	await Form.setCardExpiry(caducidad);
	await Form.setCardCvv(cvv);
});

When(/^Introduzco la clave del sms$/, async () => {
	await Form.setSandboxOTP();
});

When(/^Elijo la opción de verificar la identidad más adelante$/, async () => {
	await Form.selectDoLater();
});
Given(/^Compruebo que aparecen todas mis tarjetas$/, async () => {
	await Form.waitForRecordedCardsIsOpen();
});
