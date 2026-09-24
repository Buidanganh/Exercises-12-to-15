import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import ToggleVisibility from "./components/ToggleVisibility";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";
import DragDropList from "./components/DragDropList";

function App() {
  return (
    <div>
      <h1>Exercise 12: React Hook (useState)</h1>

      <Counter />

      <hr />

      <ControlledInput />

      <hr />

      <ToggleVisibility />

      <hr />

      <TodoList />

      <hr />

      <ColorSwitcher />

      <hr />

      <SearchFilter />

      <hr />

      <DragDropList />
    </div>
  );
}

export default App;