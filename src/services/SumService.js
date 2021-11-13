class SumService {
	async execute(a, b) {
		const sum = parseInt(a) + parseInt(b);

		return {
			statusCode: 200,
			body: {
				message: `The sum of ${a} and ${b} is ${sum}`,
			},
		};

	}
}

module.exports = {SumService};
