import _ from 'lodash'

function isValidOrder(order) {
  if (!_.isObject(order)) return false
  const {
    makerAddress,
    makerAmount,
    makerToken,
    takerAddress,
    takerAmount,
    takerToken,
    expiration,
    nonce,
    r,
    s,
    v,
  } = order
  return (
    makerAddress &&
    makerAmount &&
    makerToken &&
    takerAddress &&
    takerAmount &&
    takerToken &&
    expiration &&
    nonce &&
    r &&
    s &&
    v
  )
}

function getOrderId(order) {
  if (!_.isObject(order)) return false
  const {
    makerAddress,
    makerAmount,
    makerToken,
    takerAddress,
    takerAmount,
    takerToken,
    expiration,
    nonce,
    r,
    s,
    v,
  } = order
  return `${makerAddress}${makerAmount}${makerToken}${takerAddress}${takerAmount}${takerToken}${expiration}${nonce}${r}${s}${v}`
}

export { isValidOrder, getOrderId }
