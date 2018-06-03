var sayHello = function(){
    console.log("hello Node.js !!")
}
//sayHello(); // goi trực tiếp bên ngoài ko được do tính đóng gói module của nodejs
module.exports = sayHello;