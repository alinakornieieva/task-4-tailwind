import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./Form.css";
import { useAppSelector } from "../../store/hooks";

export const FormComp = () => {
  const { openForm } = useAppSelector((state) => state.notes);
  return (
    <div className={`form-component ${openForm && "show"}`}>
      <Form>
        <Form.Control type="text" placeholder="Enter a note..." />
        <FloatingLabel
          className="my-3"
          controlId="floatingTextarea2"
          label="Content"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a description here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingSelect"
          label="Category"
        >
          <Form.Select>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </Form.Select>
        </FloatingLabel>
        <Button variant="primary">Add</Button>
      </Form>
    </div>
  );
};
