import { main, checkForFizzBuzz } from '../fizzbuzz'

/**
 * Objective
 * If the number is divisible by 15, you print FizzBuzz
 * If the number is divisible by 5, you print Buzz
 * If the number is divisible by 3, you print Fizz
 */

describe('fizzbuzz', () => {
  test('checkforfizzbuzz', () => {
    expect(checkForFizzBuzz(15)).toBe('fizzbuzz')
    expect(checkForFizzBuzz(5)).toBe('buzz')
    expect(checkForFizzBuzz(9)).toBe('fizz')

    expect(checkForFizzBuzz(8)).toBe(undefined)
    expect(checkForFizzBuzz(4)).toBe(undefined)
    expect(checkForFizzBuzz(2)).toBe(undefined)
  })
})
