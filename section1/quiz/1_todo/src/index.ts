// // 타입 별칭
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// 할일의 목록 => 배열
let todoItems: Todo[];

// any = 모든 타입을 통틀어서 정의 됨, (치트키같은것)
// 될수있으면 구체적으로 변수와 타입을 정의해야함,
// void => 반환값이 없는 것들

// api
function fetchTodoItems(): Todo[] {
  // 배열인데 내용물은 object다.
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  // todo에 done은 ???
  // todo: object 이고 object안에 done이 있는지 ts는 모른다.
  // todo에 대한 각 타입을 구체적으로 정의할 수 있다.
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  // 필터 함수를 반환하는 경우
  return todoItems.filter((item) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: "아이템 4",
    done: false,
  };
  addTodo(item1);
  addTodo({
    id: 5,
    title: "아이템 5",
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
