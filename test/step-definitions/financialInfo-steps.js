const { Given } = require('@cucumber/cucumber');
const FinancialInfo = require('../page-objects/financialInfo-page');

Given(/^Autorizo a ceder mis datos personales$/, async () => {
	await FinancialInfo.acceptGDPR();
});

Given(/^Continuo sin asegurar el pago$/, async () => {
	await FinancialInfo.ctaContinue();
	await FinancialInfo.awaitInsuranceContainerExists();
	await FinancialInfo.ctaContinue();
});
