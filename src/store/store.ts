import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabbitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
}

const useHabbitStore = create<HabbitState>()(
  persist(
    devtools((set) => {
      return {
        habits: [],
        addHabit: (name, frequency) =>
          set((state) => {
            return {
              habits: [
                ...state.habits,
                {
                  id: Date.now().toString(),
                  name,
                  frequency,
                  completedDates: [],
                  createdAt: new Date().toISOString(),
                },
              ],
            };
          }),
        removeHabit: (id) =>
          set((state) => ({
            habits: state.habits.filter((habit) => habit.id !== id),
          })),
        toggleHabit: (id, date) =>
          set((state) => ({
            habits: state.habits.map((habit) =>
              habit.id === id
                ? {
                    ...habit,
                    completedDates: habit.completedDates.includes(date)
                      ? habit.completedDates.filter((d) => d !== date)
                      : [...habit.completedDates, date],
                  }
                : habit
            ),
          })),
      };
    }),
    {
      name: "habit-locals",
    }
  )
);

export default useHabbitStore;
