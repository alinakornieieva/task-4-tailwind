import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addNote, changeEdit, updateNote, toggleForm } from "../../store/slice";
import { INote } from "../../models/INote";

export const FormComp = () => {
  const dispatch = useAppDispatch();
  const { openForm, edit, editElement } = useAppSelector(
    (state) => state.notes
  );
  const [note, setNote] = useState("");
  const [content, setContent] = useState(" ");
  const [category, setCategory] = useState("Task");
  useEffect(() => {
    if (editElement) {
      setNote(editElement.note);
      setContent(editElement.content);
      setCategory(editElement.category);
    }
  }, [openForm]);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!note || !content) {
        throw new Error("Fields should be filled!");
      }
      const dates =
        note.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g) || [];
      const date = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = months[date.getMonth()];
      const created = `${month} ${date.getDate()}, ${date.getFullYear()}`;
      if (edit) {
        dispatch(updateNote({ note, content, category, dates }));
      } else {
        const newNote: INote = {
          id: Date.now(),
          archived: false,
          note,
          created,
          content,
          category,
          dates,
        };
        dispatch(addNote(newNote));
      }
      dispatch(toggleForm());
      setNote("");
      setContent("");
      setCategory("Task");
    } catch (e: any) {
      alert(e.messsage);
    } finally {
      dispatch(changeEdit());
    }
  };
  return (
    <div className={`form-component ${openForm && "show"}`}>
      <form
        onSubmit={onFormSubmit}
        className="p-5 border rounded border-3 border-solid border-sky-500"
      >
        <div>
          <input
            className="px-3 py-1 rounded"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter a note..."
          />
        </div>
        <div>
          <textarea
            className="my-3 p-1 rounded"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Leave a description here"
            rows={5}
            cols={50}
          ></textarea>
        </div>
        <div>
          <select
            className="px-3 py-1 rounded"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
        </div>
        <button className="btn mt-3">Add</button>
      </form>
    </div>
  );
};
