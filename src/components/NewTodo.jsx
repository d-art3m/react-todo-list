import { Box, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todo-slice';
import AddTaskIcon from '@mui/icons-material/AddTask';

function NewTodo() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = event.target.title.value;
    if (val) {
      dispatch(addTodo(val));
    }
    event.target.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <OutlinedInput
        placeholder="To-do..."
        autoFocus={true}
        fullWidth={true}
        name="title"
        inputProps={{ maxLength: 80 }}
        sx={{ my: 2 }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" type="submit">
              <AddTaskIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default NewTodo;
