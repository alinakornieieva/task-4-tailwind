import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./Form.css";
import { addNote, toggleForm } from "../../store/slice";
import { INote } from "../../models/INote";

export const FormComp = () => {
  const dispatch = useAppDispatch();
  const { openForm, edit } = useAppSelector((state) => state.notes);
  const [note, setNote] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Task");
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
        //  updateNote(edit, name.value, content.value, dates, category.value);
      } else {
        const newNote: INote = {
          id: Date.now(),
          archived: false,
          name: note,
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
    }
  };
  return (
    <div className={`form-component ${openForm && "show"}`}>
      <Form onSubmit={onFormSubmit}>
        <Form.Control
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Enter a note..."
        />
        <FloatingLabel
          className="my-3"
          controlId="floatingTextarea2"
          label="Content"
        >
          <Form.Control
            as="textarea"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Leave a description here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingSelect"
          label="Category"
        >
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </Form.Select>
        </FloatingLabel>
        <Button type="submit" variant="primary">
          Add
        </Button>
      </Form>
    </div>
  );
};
