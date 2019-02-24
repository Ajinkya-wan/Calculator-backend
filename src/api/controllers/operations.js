const httpStatus = require("http-status");
const customResponse = require("../utils/response");
const operationService = require("../services/operation.service");

const month = 1;
const year = 2019;
const fromDate = new Date(year, month, 1);
const toDate = new Date(fromDate.getFullYear(), fromDate.getMonth() + 1, 0);
console.log(fromDate , toDate)
exports.saveOperation = async (req, res) => {
	try {
		let reqData = Object.assign({}, req.body);
		result = await operationService.SaveOperation(reqData);
		if (result) {
			console.log(result, "testtttt")
			return customResponse.setResponse(
				res,
				true,
				httpStatus.CREATED,
				[]
			);
		} else {
			return customResponse.setResponse(
				res,
				false,
				httpStatus.EXPECTATION_FAILED,
				[]
			);
		}
	} catch (error) {
		if (error.code == 11000) {
			return customResponse.setResponse(
				res,
				false,
				httpStatus.EXPECTATION_FAILED,
				[]
			);

		}
	}
};


exports.getHistory = async (req, res) => {
	try {
        let reqData = Object.assign({}, req.body);
		let critera ={"createdAt": {'$gte': reqData.fromDate, '$lte': reqData.toDate}}
		let history = await operationService.historyByCriteria(critera);
		if (history) {
			return customResponse.setResponse(
				res,
				true,
				httpStatus.OK,
				history
			);
		} else {
			return customResponse.setResponse(
				res,
				false,
				httpStatus.EXPECTATION_FAILED,
				[]
			);
		}
	} catch (error) {
		return customResponse.setResponse(
			res,
			false,
			httpStatus.INTERNAL_SERVER_ERROR,
			error
		);
	}
};

