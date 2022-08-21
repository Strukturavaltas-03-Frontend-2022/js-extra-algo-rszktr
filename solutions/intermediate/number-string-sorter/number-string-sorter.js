function numberAndStringSorter (arr) {
  const newArray = []
  const stringArray = arr.filter(item => typeof item === 'string')
  const numberArray = arr.filter(item => typeof item === 'number')

  for (let i = 0; i < numberArray.length; i++) {
    newArray.push(numberArray[i])
    newArray.push(stringArray[i])
  } return newArray
}

export default numberAndStringSorter
