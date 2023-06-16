import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeTodo, toggleTodo, editTodo } from '../store/todo-slice';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoItem(props) {
  const { id, title, completed } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    dispatch(editTodo({ id, title: newTitle }));
    setOpen(false);
  };

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <>
            <IconButton edge="end" onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => dispatch(removeTodo(id))}>
              <DeleteIcon />
            </IconButton>
          </>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          onClick={() => dispatch(toggleTodo(id))}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={completed}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              overflow: 'hidden',
              textDecorationLine: completed ? 'line-through' : 'none',
            }}
            id={id}
            primary={title}
          />
        </ListItemButton>
      </ListItem>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            fullWidth
            variant="outlined"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleEdit}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TodoItem;
