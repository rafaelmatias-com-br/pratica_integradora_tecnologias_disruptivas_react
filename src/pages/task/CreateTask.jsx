import  { useState, useEffect } from "react";
import {
  MenuItem,
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

const CreateTask = ({ handleClose, tasks, setTasks }) => {
  const [idTask, setIdTask] = useState();
  const [formValues, setFormValues] = useState({
    titleTask: "",
    descriptionTask: "",
    startTask: "",
    endTask: "",
    recurseTask: "",
    statusTask: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(tasks.length === 0) {
      setIdTask(1)
    } else {
      const nextId = Math.max(...tasks.map((tarefa) => tarefa.idTask)) + 1;
      setIdTask(nextId);
    }
  }, []);

  const handleChange = (event) => {
    const { id, value, name } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name || id]: value,
    }));
  };

  const validateFields = () => {
    let tempErrors = {};
    for (let key in formValues) {
      if (!formValues[key]) {
        tempErrors[key] = true;
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSave = () => {
    console.log(idTask)
    if (validateFields()) {
      setTasks([...tasks, { idTask, ...formValues }]);
      handleClose();
    }
  };

  const {
    titleTask,
    descriptionTask,
    startTask,
    endTask,
    recurseTask,
    statusTask,
  } = formValues;

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="tasks" subheader="Cadastro de tasks" />
        <CardContent
          sx={{
            width: "95%",
            maxWidth: "100%",
          }}
        >
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="titleTask"
                aria-describedby="tarefa_titulo_helper_text"
                value={titleTask}
                onChange={handleChange}
                error={errors.titleTask}
              />
              <FormHelperText id="tarefa_titulo_helper_text">
                Título da Tarefa.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="descriptionTask"
                aria-describedby="tarefa_descricao_helper_text"
                value={descriptionTask}
                onChange={handleChange}
                error={errors.descriptionTask}
              />
              <FormHelperText id="tarefa_descricao_helper_text">
                Descrição da Tarefa.
              </FormHelperText>
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
                  onChange={handleChange}
                  error={errors.startTask}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: 400,
                    paddingLeft: "13px",
                  }}
                />
                <FormHelperText id="tarefa_inicio_helper_text">
                  Início da Tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="endTask"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={endTask}
                  onChange={handleChange}
                  error={errors.endTask}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: 400,
                    paddingLeft: "13px",
                  }}
                />
                <FormHelperText id="tarefa_fim_helper_text">
                  Fim da Tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="recurseTask">Recurso</InputLabel>
                <Select
                  id="recurseTask"
                  name="recurseTask"
                  value={recurseTask}
                  label="Recurso"
                  onChange={handleChange}
                  size="small"
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: 400,
                  }}
                  error={errors.recurseTask}
                >
                  <MenuItem value={"Recurso 1"}>Recurso 1</MenuItem>
                  <MenuItem value={"Recurso 2"}>Recurso 2</MenuItem>
                  <MenuItem value={"Recurso 3"}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Status</InputLabel>
                <Select
                  id="statusTask"
                  value={statusTask}
                  name="statusTask"
                  label="Status"
                  onChange={handleChange}
                  size="small"
                  error={errors.statusTask}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: 400,
                  }}
                >
                  <MenuItem value={"Aguardando"}>Aguardando</MenuItem>
                  <MenuItem value={"Em Andamento"}>Em Andamento</MenuItem>
                  <MenuItem value={"Concluída"}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleSave}>
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button size="small" variant="outlined" onClick={handleClose}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  p: 4,
};

export default CreateTask;
