//-------------------module trong JavaScript-----------------------------------
// Các module JS cho phép chia mã thành các tệp riêng biệt
// Điều này dễ dàng hơn việc duy trì một code-base
// Các module được nhập từ file bên ngoài sử dụng từ khóa : import
//module cũng được xác định trong thẻ script bằng 'type = "module"'
//ví dụ:
//import messages from "./messages.js"
//Module có các function hoặc các giá trị có thể được lưu trữ trong bất kì file ngoài nào
//Có 2 kiểu exports: Named Exports và Default Exports

//-----------------Named Exports----------------

//Tạo một file: person.js và điền những giá trị muốn xuất ra.
//Có thể tạo các giá trị export bằng 2 cách:
// + Từng giá trị riêng lẻ
// + Tất cả vào một block
//Tạo thêm một file khác: message.js và sử dụng để xuất giá trị mặc định.
//Chỉ có thể xuất một default export trong 1 file
//Ví dụ: import named export from person.js
// import {name, age} from './person.js';
// console.log(name, age);
//Ví dụ : import default export from message.js
// import message from './message.js';
// console.log(message());
//Các module chỉ hoạt động với các giao thức HTTP
//Một trang web được mở qua giao thức file:// không thể sử dụng nhập/xuất dữ liệu

