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
  //The task is not defined so well, so i just use mocked data
  //solution to update mocked data is to override it
  //we could avoid it with use of mysql, redis, mongo or some other storage mechanism
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
