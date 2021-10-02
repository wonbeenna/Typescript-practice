// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: "hi", age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 함수의 전체 타입에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number;
}
let sum3: SumFunction;
// sum3 = function (a: number, b: number): number {
//   return a + b;
// };
sum3 = (a: number, b: number): number => {
  return a + b;
};

// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  // [인덱스는 넘버]:인덱스의 값은 스트링
  [index: number]: string;
}
let arr: StringArray;
arr[0] = "hi";
arr[1] = "a";

// 딕셔너리 패턴 (정규표현식)
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj = {
  sth: /abc/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age?: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer extends Person {
  language: string;
}
const joo: Developer = { name: "joo", age: 20, language: "ts" };
const been: Developer = {
  name: "been",
  language: "ts",
};
