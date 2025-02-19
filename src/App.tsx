import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";

function App() {
  return (
    <>
      <Container>
        <Box>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habbit Tracker
          </Typography>

          <AddHabitForm />

          <HabitList />
        </Box>
      </Container>
    </>
  );
}

export default App;
