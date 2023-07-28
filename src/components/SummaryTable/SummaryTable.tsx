import { useAppSelector } from "../../store/hooks";
import Table from "react-bootstrap/Table";

type Category = {
  item: string;
  active: number;
  archived: number;
};

export const SummaryTable = () => {
  const { notes } = useAppSelector((state) => state.notes);
  const categories: Category[] = [];
  const summary = ["Task", "Random Thought", "Idea"].forEach((item) => {
    categories.push({
      item,
      active: notes.filter((n) => n.category === item && !n.archived).length,
      archived: notes.filter((n) => n.category === item && n.archived).length,
    });
  });
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
        {categories.map((item: Category, i: number) => (
          <tr key={i}>
            <td>{item.item}</td>
            <td>{item.active}</td>
            <td>{item.archived}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
