import { ref, onMounted } from 'vue'

export default function useTodos() {
  const todos = ref([]);

  // 添加todo
  function addTodo(todo) {
    todos.value.push(todo);
  }

  // 獲取遠程todo
  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const rawTodos = await response.json()
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed,
    }));
  }

  onMounted(() => {
    fetchTodos();
  });

  return {
    todos,
    addTodo,
  };
}