import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteNote } from "../../store/slice";
import Table from "react-bootstrap/Table";

export const TableComp = () => {
  const { notes } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>
            <i className="bi bi-folder2-open"></i>
            <i className="bi bi-trash"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        {notes.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.created}</td>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>{item.dates}</td>
            <td>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-folder2-open"></i>
              <i
                onClick={() => dispatch(deleteNote(item.id))}
                className="bi bi-trash"
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
