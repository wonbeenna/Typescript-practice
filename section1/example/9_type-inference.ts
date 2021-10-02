// 타입 추론 1
var a = "a";

function logA(a = "a") {
  var b = 10;
  return b + a; // 문자열과 숫자를 더한 값이 나오게 됨. "10a"
}

function getB(b = 10) {
  return b;
}

// 타입 추론 2
interface Dropdown<T> {
  value: T;
  title: string;
}

var items: Dropdown<string> = {
  value: "abc",
  title: "a",
};

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

var detailItems: DetailedDropdown<string> = {
  value: "hi",
  title: "a",
  description: "b",
  tag: "c",
};

// best common type
let arr = [0, 1, "null", true];
