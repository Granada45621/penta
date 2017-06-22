function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.Set = function(x, y) {
    this.x = x;
    this.y = y;
    return this;
};
Vector.prototype.Add = function(x, y) {
    this.x += x;
    this.y += y;
    return this;
};
Vector.prototype.Sub = function(x, y) {
    this.x -= x;
    this.y -= y;
    return this;
};
Vector.prototype.Div = function(x, y) {
    this.x /= x;
    this.y /= y;
    return this;
};
Vector.prototype.Mul = function(x, y) {
    this.x *= x;
    this.y *= y;
    return this;
};
