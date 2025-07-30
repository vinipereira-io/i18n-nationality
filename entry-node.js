var library = require("./index");

var locales = [
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/fr.json"),
  require("./langs/no.json"),
  require("./langs/it.json"),
  require("./langs/fi.json"),
  require("./langs/nl.json"),
  require("./langs/es.json"),
  require("./langs/pt.json"),
  require("./langs/pt-br.json"),
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
