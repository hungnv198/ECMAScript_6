//----------------------Optional chaining (?)---------------------------
// sử dụng khi không thể hiện sự chắc chắn key đó có tồn tại hay không
/*
- Toán tử (?.) truy cập một thuộc tính đối tượng hoặc gọi một hàm, nếu như đối tượng truy cập hoặc
hàm được gọi có giá trị undefined/null, biểu thức trả về xác định là undefined chứ không đưa ra lỗi.
*/
/*
const adventurer = {
    name: "Hùng", 
    cat : {
        name: "Hero"
    }
};
// const dogname = adventurer.dog.name;
// console.log(dogname);// trả về thông báo lỗi
const fishname = adventurer.fish?.name;
console.log(fishname);//undefined
*/
//Syntax:
//1. obj.val?.property
//2. obj.val?.[expression]
//3. obj.func?.(argument)