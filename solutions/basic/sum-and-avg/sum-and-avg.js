export function getSumOfTheElements (arr) {
  return arr.reduce((
    previousPrice, currentPrice) => previousPrice + currentPrice)
}

export function getAvarageOfTheElements (arr) {
  return arr.reduce((
    previousPrice, currentPrice) => previousPrice + currentPrice) / arr.length
}
