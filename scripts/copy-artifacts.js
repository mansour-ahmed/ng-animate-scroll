const fs = require("fs");
const path = require("path");
const artifacts = ["README.md", "LICENSE"];

artifacts.forEach(file => {
  let fromPath = path.resolve(__dirname, "..", "projects/ng-animate-scroll/", file);
  let destPath = path.resolve(__dirname, "..", "dist/ng-animate-scroll/", file);
  fs.readFile(fromPath, "utf-8", (err, data) => {
    if (err) {
      console.log("An error occured:", err);
      return;
    }
    fs.writeFile(destPath, data, err => {
      if (err) {
        console.log("An error occured:", err);
        return;
      }
      console.log(`Copied ${file}:`);
    });
  });
});
