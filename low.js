const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

module.exports = {
	precheck: async function (name) {
		if (fs.existsSync(name)) {
			console.log("Deleting the current project under dir: ", name);
			this.delete_dir(name);
		}
	},
	delete_git: async function (git_path) {
		this.delete_dir(path.join(git_path, ".git/"));
	},
	delete_dir: async function (to_delete) {
		fs.promises.rmdir(to_delete, { recursive: true });
	},
	get_template: async function (name) {
		const spawned = spawn("git", [
			"clone",
			"https://github.com/leomet07/svelte-template.git",
			name,
		]);

		return new Promise((resolve) => {
			spawned.stdout.on("data", (data) => {
				console.log(data.toString());
			});

			spawned.stderr.on("data", (data) => {
				console.error(data.toString());
			});

			spawned.on("close", () => {
				resolve();
			});
		});
	},
};
