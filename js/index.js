let ROOT_URL = "http://api.wordnik.com:80/v4/words.json/search/"
let query = "?caseSensitive=false&minCorpusCount=1&maxCorpusCount=25&minDictionaryCount=1&maxDictionaryCount=-1&minLength=6&maxLength=-1&skip=1&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

function setup() {
  noCanvas();
  let button = select('#submit');
  let input = select('#word');

  button.mousePressed(makeAcrostic);

  function pickWord(element, letter) {
    let URL = `${ROOT_URL}${letter}${query}`
    loadJSON(URL, gotData);

    function gotData(data) {
      let options = data.searchResults;
      let selection = random(options);
      element.html(selection.word);
    }
  }

  function makeAcrostic() {
    removeElements();
    let word = input.value();
    word.split('').map(letter => {
      let div = createDiv(letter);
      pickWord(div, letter)
    })
  }
}
