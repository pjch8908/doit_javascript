/*const heading = document.querySelector("#heading");

heading.onclick = function () {
  heading.style.color = "red";
};

alert("안녕하세요");

confirm("정말 배경 이미지를 바꾸겠습니까?");

const name1 = prompt("이름을 입력하세요.");
console.log(name1);

// document.write(`${name}님 안녕하세요`);
*/

/* 나이 계산기
const currentYear = 2021;
let birthYear;
let age;


birthYear = prompt("태어난 연도를 입력하세요.(yyyy)", "");
age = currentYear - birthYear + 1;
document.write(`${currentYear}년 현재 `);
document.write(`${birthYear}년에 태어난 사람의 나이는 ${age}세 입니다`);
*/

/*실수 에서 버그 수정 / Math.round 사용후 12번째에서 반올림
https://zorba91.tistory.com/266


let a = 0.1;
let b = 0.2;
let usingRound = Math.round((a + b) * 1e12) / 1e12;
console.log(usingRound);
*/

/* 3의 배수 확인하기 1

let userNumber = prompt("숫자를 입력하세요");

if (userNumber % 3 === 0) {
  alert("3의 배수입니다.");
} else {
  alert("3의 배수가 아닙니다.");
}
*/

/* 3의 배수 확인하기 2

let userNumber = prompt("숫자를 입력하세요.");

if (userNumber !== null) {
  if (userNumber % 3 === 0) {
    alert("3의 배수입니다.");
  } else {
    alert("3의 배수가 아닙니다.");
  }
} else {
  alert("입력이 취소되었습니다");
}
*/

/* 조건 연산자로 조건 체크하기

// (조건) ? true일 때 실행할 명령 : false 일때 실행할 명령

let userNumber = prompt("숫자를 입력하세요.");

if (userNumber !== null) {
  userNumber % 3 === 0
    ? alert("3의 배수입니다.")
    : alert("3의 배수가 아닙니다.");
} else {
  alert("입력이 취소 되었습니다.");
}
*/

/*
// || or 연산자를 사용해 조건 체크하기

let numberOne = prompt("50미만의 숫자를 입력하세요.");
let numberTwo = prompt("50미만의 숫자를 입력하세요.");

if (numberOne < 10 || numberTwo < 10) {
  alert("숫자 2개 중에 최소한 하나는 10 미만입니다.");
} else {
  alert("숫자 2개 중에서 10미만 숫자가 없습니다.");
}

*/

/* 1부터 5까지 더하기
let i;
let sum = 0;

for (i = 1; i < 6; i++) {
  sum += i;
}
console.log(sum);

*/

/*
let i;
let sum = 0;

for (i = 1; i < 1001; i++) {
  sum += i;
}
console.log(sum);
*/

/* 구구단
let i, j;

for (i = 1; i <= 9; i++) {
  document.write("<div>");
  document.write(`<h3>${i}단 </h3>`);
  for (j = 1; j <= 9; j++) {
    document.write(`${i} X ${j} = ${i * j} <br>`);
  }
  document.write("</div>");
}

*/

/* while 문으로 팩토리얼 만들기
let n = prompt("숫자를 입력하세요.");
let msg = "";

if (n !== null) {
  let nFact = 1;
  let i = 1;

  while (i <= n) {
    nFact *= i;
    i++;
  }
  msg = `${n}! = ${nFact}`;
} else {
  msg = "값을 입력하지 않았습니다.";
}
document.write(msg);

*/

/* 좌석 배치도 만들기
let memNum = prompt("입장객은 몇 명인가요?");
let colNum = prompt("한줄에 몇명씩 앉습니까?");

if (memNum % colNum === 0) {
  rowNum = parseInt(memNum / colNum);
} else {
  rowNum = parseInt(memNum / colNum) + 1;
}

let i, j;

document.write("<table>");
for (i = 0; i < rowNum; i++) {
  document.write("<tr>");
  for (j = 1; j <= colNum; j++) {
    seatNo = i * colNum + j;
    if (seatNo > memNum) break;
    document.write(`<td>좌석 ${seatNo}</td>`);
  }
  document.write("</tr>");
}
document.write("</tabe>");
*/
