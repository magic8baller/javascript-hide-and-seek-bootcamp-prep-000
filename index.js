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
   let current = document.querySelectorAll('#grand-node div');
   while (current) {
      current = current[current.length - 1];
      return current;
   }
}
