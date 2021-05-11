// 6, 3, 1, 2, 5, 4 = 4
// buy a stock on the first day,
// and then calculate the day on which the most profit would be made

import { buyAndSellStock, buyAndSellStock2 } from '../stocks'
import { dataSet20, dataSet40, dataSetFinal  } from './__mocks__/dataset'

describe('stock - O(N^2)', () => {
  test('given 6, 3, 1, 2, 5, 4, the most profit would made on day 4', () => {
    expect(buyAndSellStock([6, 3, 1, 2, 5, 4])).toEqual(4)
  })

  test('given 8, 5, 3, 1 the most profit would made on day 4', () => {
    expect(buyAndSellStock([8, 5, 3, 1])).toEqual(0)
  })
})


describe('stock - O(N)', () => {
  test('given 6, 3, 1, 2, 5, 4, the most profit would made on day 4', () => {
    expect(buyAndSellStock2([6, 3, 1, 2, 5, 4])).toEqual(4)
  }, 4000)

  test('given 8, 5, 3, 1 the most profit would made on day 4', () => {
    expect(buyAndSellStock2([8, 5, 3, 1])).toEqual(0)
  }, 4000)

  test('data set 20', () => {
    expect(buyAndSellStock2(dataSet20)).toEqual(5451)
  }, 4000)

  test('data set 40', () => {
    expect(buyAndSellStock2(dataSet40)).toEqual(6841)
  }, 4000)

  test('data set final', () => {
    expect(buyAndSellStock2(dataSetFinal)).toEqual(6010)
  }, 4000)
})
