var subarraysDivByK = function (A, K) {
  let map = new Map()
  let sum = 0
  for (let n of A) {
    sum += n
    const key = (sum % K + K) % K
    map.set(key, map.has(key) ? map.get(key) + 1 : 1)
  }
  let result = map.has(0) ? map.get(0) : 0
  for (let [, val] of map) {
    if (val > 1) result += val * (val - 1) / 2
  }

  return result
}