// function superbowlWin(record){
// const findyear = record.find(yearWon)
// return findyear;
// }

// function yearWon(record){
//    if(record.result === "W"){
//    return record.year;
//    } else {
//     return undefined;
//    }
// }

// function superbowlWin(record){
//   const dub = record.find(dub.result === "W")
//     if(dub.result === "W"){
//       return dub.year
//     }else {
//       return 'no win'
//     }
// }

function superbowlWin(record){
  const result = record.find(record => record.result === "W")
  return result ? result.year : undefined
}