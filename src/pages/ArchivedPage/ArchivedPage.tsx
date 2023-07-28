import { INote } from "../../models/INote";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Table from "react-bootstrap/Table";
import { archiveNote } from "../../store/slice";

export const ArchivedPage = () => {
  let { notes } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  notes = notes.filter((item) => item.archived);
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
          </th>
        </tr>
      </thead>
      <tbody>
        {notes.map((item: INote) => (
          <tr key={item.id}>
            <td>{item.note}</td>
            <td>{item.created}</td>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>{item.dates}</td>
            <td>
              <i
                onClick={() => dispatch(archiveNote(item.id))}
                className="bi bi-folder2-open"
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
