const sun = require("sunfirstday");

const date = sun.moment(new Date());
console.log(date);

const htmlStr = "<div><span>sun htmlEscape &emsp;</span></div>";
const escapeAfter = sun.htmlEscape(htmlStr);
console.log(escapeAfter);

const escapeBefore = sun.htmlUnEscape(escapeAfter);
console.log(escapeBefore);