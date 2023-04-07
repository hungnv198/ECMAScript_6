//Destructuring----------------------------------------
//Giúp giải nén giá trị từ mảng, hoặc là thuộc tính của đối tượng, vào trong các biến riêng biệt
//ví dụ đối với array:
// const  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const [x, y] = arr;
// console.log(x);
// console.log(y);
// //ví dụ đối với object:
// const object = {a: 1, b: 2, c: 3, d: 4, e: 5};
// const {a, e} = object;
// console.log(a);
// console.log(e);
//rest property
//Có thể kết thúc một destructuring bằng rest, kết quả sẽ lưu trữ tất cả các thuộc tính còn lại của mảng 
//hoặc object vào trong một mảng mới hoặc object mới.
// const [a_1,...values] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a_1);//1
// console.log(values);//[2, 3, 4, 5, 6, 7]
// //object mới
// const { a_2, ...values_2} = {a_2: "Hùng", age:18, address: "Hưng Yên"}
// console.log(a_2);//Hùng
// console.log(values_2);//{age: 18, address: 'Hưng Yên'}
//Khi dùng với object cần phải đặt theo đúng tên key
//Để đổi tên cần dùng dấu hai chấm sau key được contructuring
// const { name : a_2, ...values_2} = {name: "Hùng", age:18, address: "Hưng Yên"}
// console.log(a_2);//Hùng
// console.log(values_2);//{age: 18, address: 'Hưng Yên'}
//------------------------------------------------------------------------------------------------
//--------------------------Array Destructuring------------------------
/*
Basic: ELEMENT equals
const number = ['one', 'two', 'three'];
//destructuring 
const [a, b, c] = number;
console.log(a, b, c);//one two three
*/
/*
des more elements than source
const number = ['one', 'two', 'three'];
//destructuring 
const [a, b, c, d, e, f] = number;
console.log(a, b, c, d, e, f);//one two three undefined undefined undefined
*/
/*
Swapping numbers
var a = 1;
var b = 2;
[a, b] = [b, a];
console.log(a, b);//2 1
//-----
const arr = [1, 2, 3];
[arr[2], arr[0]] = [arr[0], arr[2]]
console.log(arr);//[3, 2, 1]
*/
/*-------------Phân tích một mảng trả về từ một hàm----------------
function f(){
    return [1, 3];
}
//destructuring
const [a, b] = f();
console.log(a, b);// 1 3
*/
/*-------------Bỏ qua một số giá trị trả về------------------
function f(){
    return [1, 2, 3, 4, 5];
}
//destructuring
const [a, , ,b] = f();
console.log(a, b);// 1 4
*/
/*------------Sử dụng thành phần rest property --------------------
const [a, b, ...{pop, push}] = [1, 2];
console.log(a, b);//1 2
console.log({pop, push});//function pop, function push
*/


//--------------------Object destructuring --------------------
//Basic assignment
// const user = {
//     id: 42,
//     isname: 'John'
// };
// // const {a, b} = user;
// // console.log(a);// không trùng key: trả về giá trị undefined
// // console.log(b);// không trùng key: trả về giá trị undefined
// const {id, isname} = user;
// console.log(id);// 42
// console.log(isname);// John
// //Gán tên mới cho đối tượng được lấy ra từ 1 object
// const {id: number} = user;
// console.log(number);//42