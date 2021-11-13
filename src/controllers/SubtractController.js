const {SubtractService} = require('../services/SubtractService');

class SubtractController {
	async handle(event) {
		const {a, b} = event;

		const subtractService = new SubtractService();

		const response = await subtractService.execute(a, b);

		return response;
	}
}

module.exports = {SubtractController};
