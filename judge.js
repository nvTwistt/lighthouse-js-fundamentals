const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
const judgeVegetable = function (vegetables, metric) {
  var max = 0;
  var winner = "";
  for (var submissions of vegetables){
    var getCriteria = submissions[metric];
    var getSubmitter = submissions.submitter;
    if (getCriteria >= max){
      max = getCriteria;
      winner = getSubmitter;
    }
  }
  return winner;
}
judgeVegetable(vegetables, metric)