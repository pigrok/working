// 01. 상수와 변수
// 상수 : const (constant : 변함 없는 수) => 재할당 x
// 변수 : let => 재할당 가능
// const a = 1;
// let b = 3;

// a = 3; => Error : Assignment to constant  variable
// b = 1; => b=1 로 재할당됨

// console.log("a", a);
// console.log("b", b);

// var를 사용x 이유 !!
// if (1 == 1) {
//   //항상 이 안으로 들어와요
//   var a = 3;
//   console.log("a", a);
// }
// console.log("밖 a", a);

// 둘다 block level scope 를 가짐

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 02. object 선언, 단축 속성, 객체 복사
// javascript에서 말하는 object
// key - value pair

// const testobj1 = {
//   name: "seongrok",
//   age: 29,
//   company: "x",
//   // 우측의 value는 어떤 것도 올 수 있음 => like 함수
//   doSomething: () => {},
// };
// console.log(testobj1);

// 만약 const 변수를 상단에서 먼저 선언 하고 또 다른 변수를 선언하여
// 그 안에서 먼저 선언했던 변수를 선언할 때는 생략이 가능함.
// const name = "seongrok";
// const age = 29;
// const testobj2 = {
//   name,
//   age,
// };
// console.log(testobj2);

// 예제
// const obj1 = {
//   value1: 10,
// };

// console.log("obj1", obj1); // value : 10

// const obj2 = obj1;

// console.log("obj2", obj2); // value : 10

// 만약 우리가 복사한 obj2를 바꾼다면 어떻게 될까?
// 예상 : obj2가 바뀌면 됨
// 실제 : obj1도 함께 바뀜

// 첫번째 방법
// const obj2 = obj1; // 얕은 복사
// obj2.value1 += 1;

// console.log("obj1", obj1); // value : 11
// console.log("obj2", obj2); // value : 11

// // 두번째 방법
// // obj1으로부터 stringify에서 새로 받아서 다시 parse로 묶어주면 새로운 주소값으로 생성됨.
// const obj3 = JSON.parse(JSON.stringify(obj1));
// obj1.value1 += 1;

// console.log("obj1", obj1); // value : 12
// console.log("obj2", obj2); // value : 12
// console.log("obj3", obj3); // value : 11

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 03. Template Literals
// `  백틱
// 변수를 지정할 수 있음 => ${ }
// 멀티 라인을 쓸 때 유용함.
// const testValue = 3;

// console.log(`문자열 ${testValue} 입니다.`); // 문자열 3 입니다.

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 04. 배열/객체 비구조화 = 구조분해할당
// Destructuring

// const person = {
//   name: "르탄",
//   age: "21",
// };

// const { name, age } = person;

// console.log("name", name);
// console.log("age", age);

// 배열
// const testArr = [1, 2, 3, 4, 5];
// const [one, two, three, four, five, six] = testArr;

// console.log("one", one); // 1
// console.log("two", two); // 2
// console.log("three", three); // 3
// console.log("four", four); // 4
// console.log("five", five); // 5
// console.log("six", six); // undefined

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 05. 전개 연산자

// let [name, ...rest] = ["wonjang", 21, "Gyeongi"];

// console.log("name", name); // name wonjang
// console.log("rest", rest); // rest [ 21, 'Gyeongi' ]

// let names = ["Steve", "John"];

// // 안의 배열을 꺠고 나오기 위해 전개연산자(...)을 사용
// let student1 = ["Tom", names, names];
// let student2 = ["Tom", ...names, ...names];

// console.log("students1", student1); // [ 'Tom', [ 'Steve', 'John' ], [ 'Steve', 'John' ] ]
// console.log("students2", student2); // ["Tom", "Steve", "John", "Steve", "John"];

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 06. 화살표 함수
// function mysum1(x, y) {
//   return x + y;
// }

// const mysum2 = (x, y) => {
//   return x + y;
// };
// // const mysum2 = (x, y) => x + y;
// // 한 줄인 경우 return 문을 생략 가능함.

// console.log(mysum1(1, 2)); // 3
// console.log(mysum2(1, 2)); // 3

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// RunTime 런타임
// 프로그래밍 언어가 구동(running)되는 환경(environment)
// 브라우저(ex : Chrome, Microsoft Edge, Firefox)
// node환경

// 아래 파일을 node 환경에서 실행하면 오류가 발생해요!

// function printAlert() {
//   alert("이 함수는 브라우저 환경에서만 실행됩니다.");
// }

// printAlert();
