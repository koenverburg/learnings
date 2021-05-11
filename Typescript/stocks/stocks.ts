// runtime of O(N^2)
export function buyAndSellStock(prices: number[]): number {
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            //if (prices[j] > prices[i]) {
                const calculateProfit = prices[j] - prices[i]

                if (calculateProfit > maxProfit) {
                    maxProfit = calculateProfit
                }
            //}
        }
    }
    return maxProfit
}

// runtime of O(N)
export function buyAndSellStock2(prices: number[]): number {
  let min = 0
  let max = prices.length - 1
  let maxProfit = 0

  while(min < max) {
    const calculateProfit = prices[max] - prices[min]

    if (calculateProfit > maxProfit) {
        maxProfit = calculateProfit
    }

    max--

    if (max === 1) {
      max = prices.length -1
      min++
    }
  }

  return maxProfit
}

