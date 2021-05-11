export const checkForFizzBuzz = (num: number): string | undefined => {
  if (num % 15 === 0) {
    return 'fizzbuzz'
  } else if (num % 5 === 0) {
    return 'buzz'
  } else if (num % 3 === 0) {
    return 'fizz'
  } else {
    return undefined
  }
}

export function main(min: number, max: number): void {
  for (let i = min; min < max; i++) {
    const result = checkForFizzBuzz(i)
    console.log(result)
  }
}

