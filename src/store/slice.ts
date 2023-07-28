import { IEditNote } from "./../models/IEditNote";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../models/INote";

type initialStateType = {
  notes: INote[];
  openForm: Boolean;
  active: INote[];
  edit: Boolean;
  editElement: INote | null;
};

const initialState: initialStateType = {
  notes: [
    {
      id: 1,
      archived: false,
      note: "Dentist appointment on the 27/07/2023",
      created: "July 20, 2023",
      category: "Task",
      content: "It`s a content for task 1",
      dates: ["27/07/2023"],
    },
    {
      id: 24,
      archived: true,
      note: "Buy milk",
      created: "July 24, 2023",
      category: "Task",
      content: "Important!!!",
      dates: [],
    },
    {
      id: 2,
      archived: false,
      note: "Idea 1",
      created: "July 25, 2023",
      category: "Idea",
      content: "It`s a content for idea 1",
      dates: [],
    },
    {
      id: 10,
      archived: false,
      note: "Idea 27/07/2023 - 30/07/2023",
      created: "July 27, 2023",
      category: "Idea",
      content: "It`s a content for idea",
      dates: ["27/07/2023, 30/07/2023"],
    },
    {
      id: 11,
      archived: false,
      note: "Write a message",
      created: "July 27, 2023",
      category: "Random Thought",
      content: "Write a message to Ann and offer to go to the cafe",
      dates: [],
    },
    {
      id: 1166,
      archived: false,
      note: "Go walking",
      created: "July 27, 2023",
      category: "Idea",
      content: "Don`t forget earphones",
      dates: [],
    },
    {
      id: 2087,
      archived: true,
      note: "Start to learn french",
      created: "July 27, 2023",
      category: "Random Thought",
      content: "Find tutor or just start with Duolingo",
      dates: [],
    },
  ],
  openForm: false,
  active: [],
  edit: false,
  editElement: null,
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
    editNote: (state, action: PayloadAction<number>) => {
      state.edit = true;
      const index = state.notes.findIndex((item) => {
        if (item.id == action.payload) return true;
      });
      state.editElement = state.notes[index];
    },
    toggleForm: (state: initialStateType) => {
      state.openForm = !state.openForm;
    },
    changeEdit: (state: initialStateType) => {
      state.edit = false;
    },
    updateNote: (state, action: PayloadAction<IEditNote>) => {
      const id = state.editElement?.id;
      const index = state.notes.findIndex((item) => {
        if (item.id == id) return true;
      });
      state.notes[index].note = action.payload.note;
      state.notes[index].content = action.payload.content;
      state.notes[index].category = action.payload.category;
      state.notes[index].dates = action.payload.dates;
      state.editElement = null;
    },
  },
});

const { reducer, actions } = slice;
export default reducer;
export const {
  addNote,
  deleteNote,
  archiveNote,
  editNote,
  toggleForm,
  changeEdit,
  updateNote,
} = actions;
