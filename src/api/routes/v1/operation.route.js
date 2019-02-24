const express = require("express");
const OperationController = require("../../controllers/operations");

const router = express.Router();

router
	.route("/operations")
	.post(OperationController.saveOperation);

router
	.route("/opHistory")
	.post(OperationController.getHistory);


module.exports = router;
