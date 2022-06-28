# 如何模拟实现一个bind
bind()函数创建一个新的函数，在bind()被调用时，新函数的this被指定为bind的第一个参数，其他参数将作为新函数的参数使用。

bind做了哪些事？
> 对于普通函数改变this指向
> 对于构造函数要获取其原型上的属性和方法

## bind 应用

创建绑定函数
``` js
var x = 10
var model = {
  x: 100,
  getX: function () {
    console.log(this.x)
    return this.x
  }
}
model.getX()// 100

var getX = model.getX
getX() // 10 此时this执行window

var newGetX = getX.bind(model)
newGetX() // 100

```
函数的快捷使用
``` js
var unboundSlice = Array.prototype.slice
var slice = Function.prototype.apply.bind(unboundSlice)
function aa(1,2,3) {
  console.log(arguments)
  slice(arguments)
}

```
### bind 实现
``` js
Function.prototype.bind = function(conext, ...args) {
  var self = this
  var fNOP = function () {}
  // 高阶函数返回一个函数
  var fbound = function() {
    // 执行的时候改变this的指向
    self.apply(this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments)))
  }

  fNOP.prototype = this.prototype
  fbounf.prototype = new fNOP()

  return fbound
}
```

