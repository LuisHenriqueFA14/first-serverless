const {SumController} = require("./src/controllers/SumController");
const {SubtractController} = require("./src/controllers/SubtractController");

'use strict';

module.exports.sum = new SumController().handle;
module.exports.subtract = new SubtractController().handle;
