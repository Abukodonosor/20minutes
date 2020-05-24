var fs = require("fs");
const path = require("path");

module.exports = {
  getData: function (fileName) {
    try {
      var obj = fs.readFileSync(path.join(__dirname, "../data/" + fileName));
      const result = JSON.parse(obj);
      return result;
    } catch (err) {
      console.error(err, `Failed to load JSON ${fileName}`);
      return;
    }
  },
  setData: function (data, fileName) {
    try {
      var obj = fs.writeFileSync(
        path.join(__dirname, "../data/" + fileName),
        JSON.stringify(data)
      );
      return !!obj;
    } catch (err) {
      console.error(err, `Failed to save JSON ${fileName}`);
      return;
    }
  },
};
