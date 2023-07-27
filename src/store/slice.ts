import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: 1,
      archived: false,
      name: "Dentist appointment on the 27/07/2023",
      created: "July 20, 2023",
      category: "Task",
      content: "It`s a content for task 1",
      dates: "27/07/2023",
    },
    {
      id: 24,
      archived: true,
      name: "Buy milk",
      created: "July 24, 2023",
      category: "Task",
      content: "Important!!!",
      dates: "",
    },
    {
      id: 2,
      archived: false,
      name: "Idea 1",
      created: "July 25, 2023",
      category: "Idea",
      content: "It`s a content for idea 1",
      dates: "",
    },
    {
      id: 10,
      archived: false,
      name: "Idea 27/07/2023 - 30/07/2023",
      created: "July 27, 2023",
      category: "Idea",
      content: "It`s a content for idea",
      dates: "27/07/2023, 30/07/2023",
    },
    {
      id: 11,
      archived: false,
      name: "Write a message",
      created: "July 27, 2023",
      category: "Random Thought",
      content: "Write a message to Ann and offer to go to the cafe",
      dates: "",
    },
    {
      id: 1166,
      archived: false,
      name: "Go walking",
      created: "July 27, 2023",
      category: "Idea",
      content: "Don`t forget earphones",
      dates: "",
    },
    {
      id: 2087,
      archived: true,
      name: "Start to learn french",
      created: "July 27, 2023",
      category: "Random Thought",
      content: "Find tutor or just start with Duolingo",
      dates: "",
    },
  ],
  openForm: false,
};

const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    toggleForm: (state) => {
      state.openForm = !state.openForm;
    },
    // activeNotes: (state): Number => {
    //   return state.notes.filter((item) => !item.archived).length;
    // },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const {
  deleteNote,
  toggleForm,
  // activeNotes
} = actions;
