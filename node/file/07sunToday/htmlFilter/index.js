function htmlEscape (htmlStr) {
  return htmlStr.replace(/[><"&]/g, (match) => {
    switch (match) {
      case ">":
        return "&gt;";
      case "<":
        return "&lt;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;"
    }
  })
}
function htmlUnEscape (htmlStr) {
  return htmlStr.replace(/&gt;|&lt;|&quot;|&amp;/g, match => {
    switch (match) {
      case "&gt;":
        return ">";
      case "&lt;":
        return "<";
      case "&quot;":
        return '"';
      case "&amp;":
        return "&";
    }
  })
}
module.exports = {
  htmlEscape,
  htmlUnEscape,
}