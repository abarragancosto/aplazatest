const { Then } = require('@cucumber/cucumber');
const ResultPage = require('../page-objects/result-page');

Then(/^Compruebo que el resultado es (.*)$/, async (result) => {
	switch (result) {
		case 'OK':
			await ResultPage.checkResultIsSuccess();
			break;
		case 'KO':
			await ResultPage.checkResultIsNotSuccess();
			break;
		case 'Pending':
			await ResultPage.checkResultIsPending();
			break;
		default:
			console.log(`State ${result} could not be found`);
	}
});
