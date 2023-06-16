import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { selectVisibleTodos } from '../store/todo-slice';
import { List, Box, Typography } from '@mui/material';

function TodoList() {
  const activeFilter = useSelector((state) => state.filter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  return !todos.length ? (
    <Typography variant="h5" align="center" mt={5}>
      List is empty
    </Typography>
  ) : (
    <Box display="flex" justifyContent="center">
      <List
        sx={{
          minWidth: '50%',
          bgcolor: 'background.paper',
          justifyContent: 'center',
        }}
      >
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </List>
    </Box>
  );
}

export default TodoList;
