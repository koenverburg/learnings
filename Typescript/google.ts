export function main(data: Array<number>, targetSum: number): number[] {
  let min = 0
  let max = data.length - 1

  while(min < max) {
    const sum = data[min] + data[max]
    if (sum === targetSum) {
      return [data[min], data[max]]
    }
    min++
    max--
  }


  return []
}

