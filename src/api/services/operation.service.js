const Operation = require("../models/operation");

exports.SaveOperation = (reqData) => {
		return Operation.create(reqData);
};

exports.historyByCriteria = async (criteria) => {
	console.log(criteria ,"hjh")
	let list = await Operation.find(criteria)
		.lean();

	return {
	    list
	};
}
