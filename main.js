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

const currentYear = 2021;
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력하세요.(yyyy)", "");
age = currentYear - birthYear + 1;
document.write(`${currentYear}년 현재 `);
document.write(`${birthYear}년에 태어난 사람의 나이는 ${age}세 입니다`);
