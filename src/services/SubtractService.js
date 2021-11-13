class SubtractService {
	async execute(a, b) {
		const sum = parseInt(a) - parseInt(b);

		return {
			statusCode: 200,
			body: {
				message: `The subtraction of ${a} and ${b} is ${sum}`,
			},
		};
	}
}

module.exports = {SubtractService};
