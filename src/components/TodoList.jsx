import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todo-slice';
import { selectVisibleTodos } from '../store/todo-slice';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const dispatch = useDispatch();
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
          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => dispatch(toggleTodo(todo.id))}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    overflow: "hidden",
                    textDecorationLine: todo.completed ? 'line-through' : 'none',
                  }}
                  id={todo.id}
                  primary={todo.title}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default TodoList;
