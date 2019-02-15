// most simple version of bubble sort
const bubbleSort = (array) => {
    const sortedArray = [...array]
    const length = sortedArray.length

    for (let i = 0; i < length - 1; i++) {

        for (let k = 0; k < length - i; k++) {
            if (sortedArray[k] > sortedArray[k + 1]) {
                const temp = sortedArray[k]
                sortedArray[k] = sortedArray[k + 1]
                sortedArray[k + 1] = temp
            }
        }

    }

    return sortedArray
}