import HourglassEmpty from "@mui/icons-material/HourglassEmpty";

function EmptyTasks() {
  return (
    <div
      style={{
        flex: 1,
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HourglassEmpty style={{ width: 50, height: 50 }} />
      <h1>Nenhuma tarefa cadastrada</h1>
    </div>
  );
}

export default EmptyTasks;
