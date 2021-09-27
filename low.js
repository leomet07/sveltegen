const fs = require("fs");
const path = require("path");
const { spawn, execSync, exec } = require("child_process");

module.exports = {
	precheck: async function (name) {
		if (fs.existsSync(name)) {
			this.delete_dir(name);
		}
	},
	delete_git: async function (git_path) {
		this.delete_dir(path.join(git_path, ".git/"));
	},
	delete_dir: async function (to_delete) {
		console.log("Deleting dir....", to_delete);
		fs.rmdirSync(to_delete, { recursive: true, force: true });
	},
	get_template: async function (name) {
		const template_gh = "https://github.com/leomet07/svelte-template.git";
		child = execSync("git clone " + template_gh + " " + name);
	},
	npm_install: async function (name) {
		child = execSync("cd " + name + " && npm i");
	},
};
