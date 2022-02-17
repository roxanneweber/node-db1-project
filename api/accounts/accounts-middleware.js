const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
	console.log('checkAccountPayload middleware');
	next();

};

exports.checkAccountNameUnique = (req, res, next) => {
	console.log('checkAccountNameUnique middleware');
	next();
};

exports.checkAccountId = async (req, res, next) => {
	try {
		const account = await Accounts.getById(req.params.id)
		if (!account) {
			next({ status: 404, message: 'the account was not found'})
		} else {
			req.account = account
			next()
		}
	} catch {
		next(err);
	}
	
};
