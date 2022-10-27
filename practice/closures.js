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
