<template>
  <main>
    <div class="container">
      <h1>Vue3 - Todo App</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo" />

      <TodoFilter :selected="filter" @change-filter="filter = $event" />

      <TodoList :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import useTodos from "./hooks/useTodos";
import useFilteredTodos from "./hooks/useFilteredTodos";

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    const { todos, addTodo } = useTodos();

    const { filter, filteredTodos } = useFilteredTodos(todos);

    return { todos, addTodo, filter, filteredTodos };
  },
};
</script>

<style>
/* 整個頁面 */
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* title */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
