function Person() {
    this.message = "Hello noedjs !!!!";
    this.sayHello = function() {
        console.log(this.message);
    }
}

module.exports = Person;