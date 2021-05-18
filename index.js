const low = require("./low");
(async function () {
	console.log("Generate a svelte project!");
	let name = process.argv[2];
	if (!name) {
		console.log("No gen name provided.");
		return;
	}
	await low.precheck(name);
	await low.get_template(name);
	await low.delete_git(name);
})();
