function init() {
    var name = "Mozilla"; // name - локальная переменная, созданная в init
    function displayName() { // displayName() - внутренняя функция, замыкание
        alert (name); // displayName() использует переменную, объявленную в родительской функции
    }
    displayName();
}
init();


function init() {
var name = 'Mozilla'
function displayName() {
alert(name)
}
}




function makeFunc() {
var name = 'Mozilla'

function displayName() {
alert(name)
}
  
  return displayName
}

var myFunc = makeFunc()
myFunc()


function makeAdder(x) {
return function(y) {
    return x + y
}
}

var add5 = makeAdder(5)
var add10 = makeAdder(10)

console.log(add5(2))  //7
console.log(add10(2)) // 12





function makeSizer(size) {
return function() {
document.body.style.fontSize = size + 'px'
}
}


var size12 = makeSizer(12)
var size14 = makeSizer(14)
var size16 = makeSizer(16)

document.getElementBuId('size-12').onclick = size12

