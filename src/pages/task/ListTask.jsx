import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Modal,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Header from "../../components/Header";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";
import EmptyTasks from "../../components/EmptyTasks";

const initialRows = [
  createData(
    1,
    "Tarefa 1",
    "Descrição da Tarefa 1",
    "2022-01-01",
    "2022-01-02",
    "Concluída",
    "Recurso 1"
  ),
  createData(
    2,
    "Tarefa 2",
    "Descrição da Tarefa 2",
    "2022-01-03",
    "2022-01-04",
    "Em Andamento",
    "Recurso 2"
  ),
  createData(
    3,
    "Tarefa 3",
    "Descrição da Tarefa 3",
    "2022-01-04",
    "2022-01-05",
    "Em Andamento",
    "Recurso 3"
  ),
  createData(
    4,
    "Tarefa 4",
    "Descrição da Tarefa 4",
    "2022-01-05",
    "2022-01-06",
    "Em Andamento",
    "Recurso 4"
  ),
  createData(
    5,
    "Tarefa 5",
    "Descrição da Tarefa 5",
    "2022-01-06",
    "2022-01-07",
    "Em Andamento",
    "Recurso 5"
  ),
  createData(
    6,
    "Tarefa 6",
    "Descrição da Tarefa 6",
    "2022-01-07",
    "2022-01-08",
    "Aguardando",
    "Recurso 6"
  ),
];

function createData(
  idTask,
  titleTask,
  descriptionTask,
  startTask,
  endTask,
  statusTask,
  recurseTask
) {
  return {
    idTask,
    titleTask,
    descriptionTask,
    startTask,
    endTask,
    statusTask,
    recurseTask,
  };
}

function ListTask() {
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskSelected, setTaskSelected] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setTasks(initialRows);
  }, []);

  const handleEdit = (id) => {
    const task = tasks.find((t) => t.idTask === id);
    setTaskSelected(task);
    setOpenEditTask(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.idTask !== id));
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {[
          { text: "Início", action: () => null },
          { text: "Criar tarefa", action: () => setOpenCreateTask(true) },
        ].map(({ text, action }) => (
          <ListItem key={text}>
            <ListItemText primary={text} onClick={action} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Header openDrawer={() => setDrawerOpen(true)} />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {list}
      </Drawer>
      <Card>
        <CardHeader title="Tarefas" subheader="Listagem de Tarefas" />
        {tasks?.length > 0 ? (
          <CardContent>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Título</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Data de Início</TableCell>
                    <TableCell align="right">Data de Finalização</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Recurso</TableCell>
                    <TableCell align="center">Editar</TableCell>
                    <TableCell align="center">Deletar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasks.map((row) => (
                    <TableRow key={row.idTask}>
                      <TableCell>{row.idTask}</TableCell>
                      <TableCell>{row.titleTask}</TableCell>
                      <TableCell align="right">{row.descriptionTask}</TableCell>
                      <TableCell align="right">{row.startTask}</TableCell>
                      <TableCell align="right">{row.endTask}</TableCell>
                      <TableCell align="right">{row.statusTask}</TableCell>
                      <TableCell align="right">{row.recurseTask}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => handleEdit(row.idTask)}
                        >
                          <EditIcon />
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDelete(row.idTask)}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        ) : (
          <EmptyTasks />
        )}
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={() => setOpenCreateTask(true)}
            style={{ backgroundColor: "#8644e1" }}
          >
            Criar Tarefa
          </Button>
        </CardActions>
      </Card>
      <Modal open={openCreateTask} onClose={() => setOpenCreateTask(false)}>
        <div>
          <CreateTask
            handleClose={() => setOpenCreateTask(false)}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </Modal>
      <Modal open={openEditTask} onClose={() => setOpenEditTask(false)}>
        <div>
          <EditTask
            handleClose={() => setOpenEditTask(false)}
            taskSelected={taskSelected}
            setTasks={setTasks}
          />
        </div>
      </Modal>
    </>
  );
}

export default ListTask;
