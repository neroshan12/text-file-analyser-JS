const App = require('../app.js');
var readBook = App.readBook;

describe('Book', function() {
  it('allows a .txt file to be read', function() {
    expect(
      readBook(
        '/Users/nero/Documents/MakersProjects/text-file-analyser-JS/test.txt'
      )
    ).toEqual('Text file can be read.');
  });
});
