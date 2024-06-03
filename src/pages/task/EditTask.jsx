import { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  MenuItem,
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button
} from '@mui/material';

const EditTask = ({ handleCloseEdit, idTaskSelected, task, setTask }) => {
  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [startTask, setStartTask] = useState('');
  const [endTask, setEndTask] = useState('');
  const [recurseTask, setRecurseTask] = useState('');
  const [statusTask, setStatusTask] = useState('');

  useEffect(() => {
    setTitleTask(task.titleTask);
    setDescriptionTask(task.descriptionTask);
    setStartTask(task.startTask);
    setEndTask(task.endTask);
    setRecurseTask(task.recurseTask);
    setStatusTask(task.statusTask);
  }, [task]);

  const handleChangeRecurse = (event) => {
    setRecurseTask(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatusTask(event.target.value);
  };

  const handleEdit = () => {
    setTask((tasks) =>
      tasks.map((t) =>
        t.idTask === idTaskSelected
          ? {
              ...t,
              titleTask,
              descriptionTask,
              startTask,
              endTask,
              recurseTask,
              statusTask
            }
          : t
      )
    );

    handleCloseEdit();
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Tarefas"
          subheader="Edição de Tarefas"
        />
        <CardContent sx={{ width: '95%', maxWidth: '100%' }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="titleTask"
                aria-describedby="tarefa_titulo_helper_text"
                value={titleTask}
                onChange={(e) => setTitleTask(e.target.value)}
              />
              <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="descriptionTask"
                aria-describedby="tarefa_descricao_helper_text"
                value={descriptionTask}
                onChange={(e) => setDescriptionTask(e.target.value)}
              />
              <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="startTask"
                  type="date"
                  aria-describedby="tarefa_inicio_helper_text"
                  value={startTask}
                  onChange={(e) => setStartTask(e.target.value)}
                  sx={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                    paddingLeft: '13px'
                  }}
                />
                <FormHelperText id="tarefa_inicio_helper_text">Início da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="endTask"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={endTask}
                  onChange={(e) => setEndTask(e.target.value)}
                  sx={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                    paddingLeft: '13px'
                  }}
                />
                <FormHelperText id="tarefa_fim_helper_text">Fim da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="recurseTask">Recurso</InputLabel>
                <Select
                  id="recurseTask"
                  value={recurseTask}
                  label="Recurso"
                  onChange={handleChangeRecurse}
                  size="small"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400
                  }}
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="statusTask">Status</InputLabel>
                <Select
                  id="statusTask"
                  value={statusTask}
                  label="Status"
                  onChange={handleChangeStatus}
                  size="small"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400
                  }}
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleEdit}>Salvar</Button>
              </Grid>
              <Grid item xs={1}>
                <Button size="small" variant="outlined" onClick={handleCloseEdit}>Cancelar</Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default EditTask;
