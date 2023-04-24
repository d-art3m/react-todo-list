import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/filter-slice';
import { ALL, ACTIVE, COMPLETED } from '../store/filter-slice';
import { Box, Button } from '@mui/material';

function Filters() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  return (
    <Box display="flex" justifyContent="center">
      <Button
        sx={{ color: activeFilter === ALL ? 'primary.main' : 'secondary.contrastText' }}
        onClick={() => dispatch(setFilter(ALL))}
      >
        all
      </Button>
      <Button
        sx={{ color: activeFilter === ACTIVE ? 'primary.main' : 'secondary.contrastText' }}
        onClick={() => dispatch(setFilter(ACTIVE))}
      >
        active
      </Button>
      <Button
        sx={{ color: activeFilter === COMPLETED ? 'primary.main' : 'secondary.contrastText' }}
        onClick={() => dispatch(setFilter(COMPLETED))}
      >
        completed
      </Button>
    </Box>
  );
}

export default Filters;
