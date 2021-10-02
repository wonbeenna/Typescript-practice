// 타입 단언

let ab;
ab = 20;
ab = "a";
let b = ab as string;

// DOM API 조작 관련해 많이 사용됨.
<div id="app">hi</div>; // HTML 예시

var div = document.querySelector("div");
if (div) {
  div.innerHTML;
}

var div = document.querySelector("div") as HTMLDivElement;
div.innerHTML;
