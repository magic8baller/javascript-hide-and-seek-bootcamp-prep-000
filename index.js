function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const climbRanks = document.querySelectorAll('.ranked-list');
  //const outerList = climbRanks[i];
  //const innerList = climbRanks[i + 1];

  for (let i = 0; i < climbRanks.length; i++) {
      let children = climbRanks[i].children;
      for (let j = 0; j < climbRanks.length; j++) {
        children = parseInt(children[j].innerHTML) + n;
      }
  }
}

function deepestChild() {
  let currentElem = document.getElementById('grand-node').querySelectorAll('div');
    while(currentElem) {
      let nextElem;
      if (currentElem.length === 0) {
        return currentElem;
      }
      if ()
    }

}
