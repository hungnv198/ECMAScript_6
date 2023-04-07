//---------Từ khóa let và const------------
//1. let
/*
- Thay thế var trong khai báo biến.
- Biến được khai báo với let phải được định nghĩa trước mới có thể sử dụng.
- Biến được khai báo với let có phạm vi trong block
//variable with let : không thể khai báo lại
//Khai báo biến dùng let bên trong block sẽ không được truy cập ở bên ngoài khối
//khai báo biến với let, có thể được phép khai báo lại trong 1 block khác
*/
//2. Const
/*
- một biến khai báo với const không thể được gán lại.
- một biến khai báo với const phải được gán giá trị. 
//3. Arrow Functions
- không cần phải viết từ khóa "function", từ khóa "return" và dấu ngoặc nhọn
- Ví dụ:
+++
var sum = function(x, y){
    return x + y;
}
---> Viết bằng ES6: var sum = (x, y) => x + y;
- Arrow function không có đối tượng "this". Việc này không phù hợp để định nghĩa một phương thức của đối tượng
- Arrow function phải được định nghĩa trước khi sử dụng
- sử dụng const là an toàn hơn sử dụng var, bởi vì expression function là một giá trị không đổi
- Việc bỏ các từ khóa và dấu ngoặc chỉ khi hàm có 1 câu lệnh.
- Khi muốn return lại 1 object thì cần phải bao quanh 1 ngoặc đơn
- Arrow function không tạo được function constructor.
//4. Classes
- Sử dụng từ khóa "class" để tạo ra một class
- luôn luôn thêm một phương thức tên là constructor().
Syntax: class ClassName {
    constructor(){}
}
- Ví dụ:
class car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
-- Một JS class không phải là một object
- Sử dụng một Class: để tạo ra các đối tượng
*/
// class car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }
// //tạo các đối tương từ class
// const myCar1 = new car("Ford", 2019);
// const myCar2 = new car("Roll Royce", 2016);

// console.log(myCar1, myCar2);
//- Class methods: được khởi tạo với cú pháp giống như một phương thức đối tượng
/*
Syntax:

class ClassName {
    constructor(){...}
    method_1() {...}
    method_2() {...}
    method_3() {...}
}

*/
//ví dụ: tạo một class methods có thể xác định được tuổi của ô tô
// class car {
//     //Tạo một constructor
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     //Tạo một class methods
//     age (){
//         //Tạo biến nhận giá trị thời gian
//         const age = new Date();
//         return age.getFullYear() - this.year;
//     }
// }
// //tạo một đối tượng xe:
// const myCar3 = new car("Toyota", 2010);
// console.log(`My car: ${myCar3.name} has ${myCar3.age()} year old`);
//ví dụ: truyền tham số vào trong class methods
// class car {
//     //Tạo một constructor
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     //Tạo một class methods
//     age (x){
//         //Tạo biến nhận giá trị thời gian
//         return x - this.year;
//     }
// }
// //tạo một đối tượng xe:
// const date = new Date();
// const year = date.getFullYear();
// const myCar3 = new car("Toyota", 2002);
// console.log(`My car: ${myCar3.name} has ${myCar3.age(year)} year old`);
//-------5. Default Parameters Value --------------------------------
// dùng để định nghĩa giá trị mặc định cho một tham số
// function myFunction(x = 10, y = 10){
//     return x + y;
// }
// var result_1 = myFunction();// khi không truyền tham số, hàm sẽ trả về giá trị mặc định đã được khai báo
// var result_2 = myFunction(3,6);

// console.log(result_1);
// console.log(result_2);
//-------6. Enhanded object literal-----
/*
- định nghĩa key/value cho object.
*/
// var obj = {
//     key: "key",
//     value: "value"
// }
// console.log(obj);//{key: 'key', value: 'value'}

//khi dùng ES6
// var key = "name";
// var value = "value";
// var obj2 = {
//     key,
//     value
// }// khi giá trị và value của 1 object giống nhau
// console.log(obj2);