// Exercise #1: For Each Function

// บริษัทแห่งหนึ่งจะเพิ่มเงินเดือนให้กับพนักงานทุกคน 5000 บาทจากฐานเงินเดือนเดิมที่มีอยู่แล้ว
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];


// ให้สร้าง Function ที่ชื่อว่า forEach ที่ทำหน้าที่ในการบันทึกเงินเดือนของพนักงาน
// หลังจากปรับเพิ่มเงินเดือนแล้ว
// Function นี้จะทำการบันทึกเงินเดือนของพนักงานเข้าไปใน Array newEmployeeSalaries
// Execute ตัว forEach Function เพื่อบันทึกเงินเดือนของพนักงาน
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i]) //เป็นการExecute function callbcak ก็คือ add5000
    }
  }
  
// จะต้องมี function callback อีกอันเพื่อเอาไว้เรียก
function add5000(previousSalary){  //previousalary ก็คือ array[i] 
    newEmployeeSalaries.push(previousSalary + 5000);
}

forEach(employeeSalaries, add5000)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

