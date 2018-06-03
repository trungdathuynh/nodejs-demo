var firstName = "Linh";
(function(lastName) {
    var firstName = "Khang";
    console.log(firstName);
    console.log(lastName);
}("Rua")); // thuc thi ngay ham khi duoc khoi ta

console.log(firstName);

// chuong trinh in ra 
// Khang
// Rua
// Linh