// 6, 3, 1, 2, 5, 4 = 4
// buy a stock on the first day,
// and then calculate the day on which the most profit would be made

import { buyAndSellStock } from '../stocks'

describe('stock - O(N^2)', () => {
  test('given 6, 3, 1, 2, 5, 4, the most profit would made on day 4', () => {
    expect(buyAndSellStock([6, 3, 1, 2, 5, 4])).toEqual(4)
  })

  test('given 8, 5, 3, 1 the most profit would made on day 4', () => {
    expect(buyAndSellStock([8, 5, 3, 1])).toEqual(0)
  })
})
