const insertionSort = (array) => {
  
    const sortedArray = [...array]
    
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[0] > sortedArray[i]) {
        sortedArray.unshift(sortedArray.splice(i, 1)[0])
      } else {
        
        const temp = sortedArray[i]
        let k
        
        for (k = i - 1; k > -1 && sortedArray[k] > temp; k--) {
          sortedArray[k+1] = sortedArray[k]
        }
        
        sortedArray[k+1] = temp
        
      }
    }
    
    return sortedArray
  }
  