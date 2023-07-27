import { useAppSelector } from "../../store/hooks";
import Table from "react-bootstrap/Table";

export const SummaryTable = () => {
  const { notes } = useAppSelector((state) => state.notes);
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Note Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.created}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
