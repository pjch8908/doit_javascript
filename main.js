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
