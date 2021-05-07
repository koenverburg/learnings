import { main } from '../google'

/**
 * Objective
 * look into the give array of number and see if a pare (two)
 * will create the number of 8
 */

describe('google interview example - sum 8', () => {
  test('sum 8 - true', () => {
    const result = main([1, 2, 3, 7], 8) 
    expect(result).toEqual([1, 7])
  })

  test('sum 8 - true', () => {
    const result = main([1, 4, 4, 9], 8) 
    expect(result).toEqual([4, 4])
  })

  test('sum 8 - false', () => {
    const result = main([1, 3, 6, 9], 8) 
    expect(result).toEqual([])
  })
})
