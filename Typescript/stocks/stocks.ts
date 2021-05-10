// runtime is O(n^2)
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

// run time of O(n)
export function buyAndSellStock2(prices: number[]): number {
  return 0
}