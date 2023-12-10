// Exercise #2: At Least Five Function

// โรงเรียนแห่งหนึ่งมีเป้าหมายที่จะสอบวัดระดับวิชาวิทยาศาสตร์คอมพิวเตอร์
// กับนักเรียนชั้นมัธยมศึกษาปีที่ 2 โดยแต่ละห้องมีคะแนนเป็นดังนี้

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// ให้สร้าง Function ที่ชื่อว่า atLeastFive
// Function นี้จะตรวจสอบคะแนนทั้งหมดของนักเรียนแต่ละห้องที่เป็น Array 
// ว่ามีนักเรียนอย่างน้อย 5 คน ที่ได้คะแนนมากกว่า 70 คะแนนหรือไม่
// Function นี้เป็น Function ที่ Return ค่าเป็น Boolean
// ถ้า Return true คือหมายความว่า Array อันนี้มี Element อย่างน้อยๆ 5 ตัวที่ตรงตามเงื่อนไขที่กำหนด
// ถ้า Return false คือหมายความว่า Array อันนี้มี Element น้อยกว่า 5 ตัวที่ตรงตามเงื่อนไขที่กำหนด

function atLeastFive(array, callback) {
    let scorePass = [];
    for(i = 0; i < array.length; i++){
        if(array[i] >= 70) {
            scorePass.push(array[i]);
        } 
        if(scorePass.length >= 5){
            callback(true)
        } else {
            callback(false)
        } 
  }
}
  
// ให้ทำการ Execute Function atLeastFive เพื่อตรวจสอบว่าแต่ละห้องผ่านเกณฑ์ที่ว่า
// ต้องมีนักเรียนอย่างน้อย 5 คนที่ได้คะแนนเกิน 70 คะแนนหรือไม่ แล้วนำ Value ที่ได้มา Assign ใน Variable ดังนี้

let scoreRoom1Result;
let scoreRoom2Result; 
let scoreRoom3Result;

atLeastFive(studentScoresRoom1, function (score) {
    scoreRoom1Result = score;
  });
  
  atLeastFive(studentScoresRoom2, function (score) {
    scoreRoom2Result = score;
  });
  
  atLeastFive(studentScoresRoom3, function (score) {
    scoreRoom3Result = score;
  });

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
