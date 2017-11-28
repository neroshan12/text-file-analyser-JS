const fs = require('fs');

(function(exports) {
  var readBook = function(book) {
    return fs.readFileSync(book, 'utf8');
  };

  exports.readBook = readBook;
})(this);
