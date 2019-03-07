const fs = require("fs");
const path = require("path");

const packageJson = require("./package.json");
const jestConfig = require("./jest.json");

if (!packageJson.jest) {
  process.exit();
}

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName));
const writeFile = (fileName, data) =>
  fs.writeFileSync(path.join(__dirname, fileName), data);

console.log("🔄 Setting up...");

packageJson.scripts.tsc = "tsc";
packageJson.jest = Object.assign(packageJson.jest, jestConfig);

writeFile("package.json", JSON.stringify(packageJson, null, 2));
const projectFilesToDelete = [".flowconfig", "App.js", "__tests__/App.js"];
const templateFilesToDelete = [
  "setup.js",
  "README.md",
  "LICENSE",
  "jest.json",
  "CODE_OF_CONDUCT.md",
  "CONTRIBUTING.md",
  "ISSUE_TEMPLATE.md"
];

projectFilesToDelete.forEach(deleteFile);
templateFilesToDelete.forEach(deleteFile);

console.log(`✅ Setup completed!`);
