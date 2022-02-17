exports.checkAccountPayload = (req, res, next) => {
	console.log('checkAccountPayload middleware');
	next();
	// Note: you can either write "manual" validation logic
	// or use the Yup library (not currently installed)
};

exports.checkAccountNameUnique = (req, res, next) => {
	console.log('checkAccountNameUnique middleware');
	next();
};

exports.checkAccountId = (req, res, next) => {
	console.log('checkAccountId middleware');
	next();
};
