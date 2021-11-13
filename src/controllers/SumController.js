const {SumService} = require('../services/SumService');

class SumController {
	async handle(event) {
		const {a, b} = event;

		const sumService = new SumService();

		const response = await sumService.execute(a, b);

		return response;
	}
}

module.exports = {SumController};
