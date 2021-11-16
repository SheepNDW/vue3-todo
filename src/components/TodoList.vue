<template>
  <div class="todo-list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todoItem="todo"
      @change-state="todo.completed = $event.target.checked"
    ></TodoListItem>
  </div>
</template>

<script>
import TodoListItem from "./listItem/TodoListItem.vue";

export default {
  name: "TodoList",
  components: { TodoListItem },
  props: ["todos"],
};
</script>

<style scoped>
/* list欄 */
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
