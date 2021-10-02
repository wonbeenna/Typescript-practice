interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

// ----------------------------

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// ----------------------------

// 두가지의 타입을 모두 수용하는 타입을 지정해야함
function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
});

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }

// const obj2: Dropdown<string> = { value: "abc", selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   // 추가로 타입에 대한 힌트를 줄수 있음
//   // text.length <<< 어떤타입이 들어올지 모르기 때문에 에러가 발생한다.
//   // length 를 찍으려면, 좀더 자세하게 타입 부여해야함
//   console.log(text.length);
//   return text;
// }
// logTextLength<string>(["hi", "abc"]);

// 이미 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength(["hi", "abc"]);

// keyof 사용
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItems>(
  itemOption: T
): T {
  return itemOption;
}
// getShoppingItemOption(10); // err
getShoppingItemOption("name"); // key값만 들어갈 수 있다.
getShoppingItemOption("hi"); // err
