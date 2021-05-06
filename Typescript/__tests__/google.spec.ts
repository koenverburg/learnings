import { main } from '../google'

/**
 * Objective
 * look into the give array of number and see if a pare (two)
 * will create the number of 8
 */

describe('google interview example - sum 8', () => {
  test('sum 8 - 1', () => [
    const result = main([1, 2, 3, 9], 8) 
    expect(result).equal(false)
  ])
})
