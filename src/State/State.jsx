function State(capacity = null, time = null, date = null, city = null, maxCost = null, cart = {}) {
    this.capacity = capacity
    this.time = time
    this.date = date
    this.city = city
    this.maxCost = maxCost
    this.cart = cart
}

State.prototype.addToCart = function (itemName, cost) { this.cart[itemName] = cost }
State.prototype.removeFromCart = function (itemName) { delete this.cart[itemName] }

export default State