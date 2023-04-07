//--------------------Spread Operator--------------------
// Toán tử spread(...): cho phép sao chép nhanh tất cả hoặc một phần của một mảng hoặc một object vào trong một mảng
//hoặc một object khác.
//ví dụ:
/*const numberOne = [1, 2, 3];
const numberTwo = [4, 5 ,6];
const numberThree = [...numberOne, ...numberTwo];
console.log(numberThree);//[1, 2, 3, 4, 5, 6]
*/
//Toán tử spread thường được sử dụng để kết hợp các destructuring
//Gán phần tử đầu tiên và thứ 2 từ mảng number vào các biến và đặt phần còn lại vào một mảng rest
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
const [one, two, ...three] = arr;
console.log(one, two);//1 2
console.log(three);//[3, 4, 5, 6, 7]
*/
//có thể dùng spread đối với 2 object
// const user = {
//     id: 1,
//     name: 'hùng', 
//     age: 20
// }
// const course = {
//     course_id : 1,
//     course_name: "Javascript"
// }
// const infor = {...user, ...course};
// console.log(infor);//{id: 1, name: 'hùng', age: 20, course_id: 1, course_name: 'Javascript'}