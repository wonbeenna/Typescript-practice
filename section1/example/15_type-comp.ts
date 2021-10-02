// 인터페이스
interface Developer3 {
  name: string;
  skill: string;
}

interface Person3 {
  name: string;
  // skill: string;
}

var developer3: Developer3;
var person3: Person3;
// developer3 = person3; // X
person3 = developer3; // O

// 함수
var add = function (a: number) {
  // ...
};
var sum = function (a: number, b: number) {
  // ...
};
// 구조적으로 add < sum , 인자의 개수가 다르다.

sum = add; // O
add = sum; // X

// // 유니온 타입
// var c: Developer | Person;
// var d: Person | string;
// c = d;
// d = c;

// 제네릭

interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2; // O

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2; // X
notempty2 = notempty1; // X
