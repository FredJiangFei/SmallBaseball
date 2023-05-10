import { useEffect, useState } from 'react';
import todoService from '../services/todoService';
import { useFormik } from 'formik';
import { Box, Button, TextField, Container } from '@mui/material';

function Todo() {
  const [todos, setTodos] = useState([]);
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: (values: any) => handleCreate(values),
  });

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const res: any = await todoService.getAll();
    setTodos(res.value);
  };

  const handleCreate = async (data: any) => {
    await todoService.create(data);
    getTodos();
  };

  const handleDelete = async (id: any) => {
    await todoService.deleteTodo(id);
    getTodos();
  };

  return (
    <Container component="main" maxWidth="xs">
      <h1>Todos</h1>
      {todos &&
        todos.map((todo: any) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <Button onClick={() => handleDelete(todo.id)}>X</Button>
          </div>
        ))}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="title"
          label="Title"
          value={values.title}
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Create
        </Button>
      </Box>
    </Container>
  );
}

export default Todo;
