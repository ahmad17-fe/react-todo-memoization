import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import Todo from "../components/Todo";
import { useThemeContext } from "../context/app-theme";
import { TodoProvider, useTodoContext } from "../context/app-todo";

export default function Home() {
  const [stateTheme] = useThemeContext();

  return (
    <>
      <div
        className={`w-3/12 mx-auto my-11 rounded-md py-5 px-5  ${
          stateTheme.theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        <Header />
        <TodoProvider>
          <WrapperTodo />
        </TodoProvider>
      </div>
    </>
  );
}

const WrapperTodo = () => {
  const [stateTodo] = useTodoContext();

  return (
    <>
      <div className="space-y-4 mt-8 mb-12">
        {stateTodo.todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
      <AddTodo />
    </>
  );
};
