const moment = require("./dateFilter/index");
const htmlEscape = require("./htmlFilter/index")

module.exports = {
  ...moment,
  ...htmlEscape,
}