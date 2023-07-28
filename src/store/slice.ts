import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../models/INote";

type initialStateType = {
  notes: INote[];
  openForm: Boolean;
  active: INote[];
  edit: Boolean;
};

const initialState: initialStateType = {
  notes: [
    {
      id: 1,
      archived: false,
      name: "Dentist appointment on the 27/07/2023",
      created: "July 20, 2023",
      category: "Task",
      content: "It`s a content for task 1",
      dates: ["27/07/2023"],
    },
    {
      id: 24,
      archived: true,
      name: "Buy milk",
      created: "July 24, 2023",
      category: "Task",
      content: "Important!!!",
      dates: [],
    },
    {
      id: 2,
      archived: false,
      name: "Idea 1",
      created: "July 25, 2023",
      category: "Idea",
      content: "It`s a content for idea 1",
      dates: [],
    },
    {
      id: 10,
      archived: false,
      name: "Idea 27/07/2023 - 30/07/2023",
      created: "July 27, 2023",
      category: "Idea",
      content: "It`s a content for idea",
      dates: ["27/07/2023, 30/07/2023"],
    },
    {
      id: 11,
      archived: false,
      name: "Write a message",
      created: "July 27, 2023",
      category: "Random Thought",
      content: "Write a message to Ann and offer to go to the cafe",
      dates: [],
    },
    {
      id: 1166,
      archived: false,
      name: "Go walking",
      created: "July 27, 2023",
      category: "Idea",
      content: "Don`t forget earphones",
      dates: [],
    },
    {
      id: 2087,
      archived: true,
      name: "Start to learn french",
      created: "July 27, 2023",
      category: "Random Thought",
      content: "Find tutor or just start with Duolingo",
      dates: [],
    },
  ],
  openForm: false,
  active: [],
  edit: false,
};

const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state: initialStateType, action: PayloadAction<INote>) => {
      state.notes = [...state.notes, action.payload];
    },
    deleteNote: (state: initialStateType, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.map((item) => {
        if (item.id === action.payload) {
          item.archived = !item.archived;
        }
        return item;
      });
    },
    editNote: (state, action: PayloadAction<number>) => {},
    toggleForm: (state: initialStateType) => {
      state.openForm = !state.openForm;
    },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const { addNote, deleteNote, archiveNote, editNote, toggleForm } =
  actions;
