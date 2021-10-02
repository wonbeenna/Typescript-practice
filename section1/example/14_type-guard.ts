interface Developer2 {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer2 | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

var tony2 = introduce();
console.log(tony.name); // err

// skill 도 가져오고 싶다면
if ((tony2 as Developer2).skill) {
  console.log((tony2 as Developer2).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age);
}

// 타입 가드 정의

function isDeveloper(target: Developer2 | Person): target is Developer2 {
  return (target as Developer2).skill !== undefined;
}

if (isDeveloper(tony2)) {
  tony2.skill;
} else {
  tony2.age;
}
