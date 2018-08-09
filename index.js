function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const climbRanks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < climbRanks.length; i++) {
      climbRanks[i].innerHTML = parseInt(climbRanks[i].innerHTML) + n;
  }
}

function deepestChild() {
  const ele = document.querySelector('#grand-node div');
  while (ele) {
    let mostDeep = ele.childNodes[ele.childNodes.length - 1];
    if (mostDeep === ele.lastElementChild) {
      return dee;
    }
  }
  return null;
}
