const products = require("../data/produts.json");

function findAll() {
	return new Promise((resolve, reject) => {
		resolve(products);
	});
}

module.exports = {
	findAll,
};
