// function logMessage(value: any) {
//  console.log(value)
// }
// function logMessage(value: string | number) {
//   if (typeof value === "number") {
//     value.toLocaleString();
//   }

//   if (typeof value === "string") {
//     value.toString();
//   }

//   throw new TypeError("value mst be string or number");
// }
// logMessage("hello");
// logMessage(10);
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
// }

// // # Union 타입 문법 - `any` 보다는 명시적임
// function logMessage(value: string | number) {
//   console.log(value);
// }

// function logMessage(value: string | number) {
//   if (typeof value === 'string') {
//     value.toLocaleUpperCase();
//   }
//   if (typeof value === 'number') {
//     value.toLocaleString();
//   }
//   throw new TypeError('value must be string or number')
// }

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 공통된 속성에만 접근할 수 있다.
function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}
askSomeone({ name: "디벨로퍼", skill: "웹개발" });
askSomeone({ name: "디벨로퍼", age: 20 });

function askSomeone2(someone: Developer & Person) {
  // 합친것
  someone.name;
  someone.age;
  someone.skill;
}
askSomeone2({ name: "디벨로퍼", skill: "웹개발", age: 34 });
askSomeone2({ name: "디벨로퍼", age: 20 });
// var seho2: string | number | boolean;
// var capt2: string & number & boolean; // never (인터섹션 타입)
