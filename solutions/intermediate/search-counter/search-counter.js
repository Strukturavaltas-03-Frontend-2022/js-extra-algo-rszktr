function searchAndCount (arr, searchValue) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      counter += 1
    }
  } return counter
}

export default searchAndCount
