import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useHabbitStore from "../store/store";

export default function AddHabitForm() {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const { addHabit } = useHabbitStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name, frequency);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter habit name"
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            value={frequency}
            label="Frequency"
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
}
