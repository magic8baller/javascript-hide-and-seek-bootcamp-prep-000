function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const climbRanks = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < climbRanks.length; i++) {
      let children = climbRanks[i].children;
      for (let j = 0; j < climbRanks.length; j++) {
        children = parseInt(children[j].innerHTML) + n;
      }
  }
}
