const fetch = require("axios");

/**
 * handleText parses text and defines which command is run
 * @param {string} body
 * @returns {string}
 */

function handleText(body) {
  return new Promise((res, rej) => {
    res(body);
  })
    .then(googlesIt)
    .then(res => stringifyResults(res));
}

function stringifyResults(res) {
  const query = res[0];
  const topics = res[1].join("? ");
  return `When you say "${query}", do you mean .. ${topics}`;
}

function googlesIt(body) {
  const term = `http://suggestqueries.google.com/complete/search?q=${body}&client=firefox`;

  return fetch(term)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.error(err));
}

module.exports = {
  text: handleText
};
