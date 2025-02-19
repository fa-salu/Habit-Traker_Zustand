import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useHabbitStore from "../store/store";
import { CheckCircle, Delete } from "@mui/icons-material";

export default function HabitList() {
  const { habits, removeHabit, toggleHabit } = useHabbitStore();
  const today = new Date().toISOString().split("T")[0];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={3} sx={{ p: 3, mb: 2 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontWeight="bold">
                {habit.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant={
                    habit.completedDates.includes(today)
                      ? "contained"
                      : "outlined"
                  }
                  color={
                    habit.completedDates.includes(today) ? "success" : "primary"
                  }
                  startIcon={<CheckCircle />}
                  onClick={() => toggleHabit(habit.id, today)}
                  sx={{ minWidth: 140 }}
                >
                  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Completed"}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => removeHabit(habit.id)}
                  sx={{ minWidth: 120 }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}
