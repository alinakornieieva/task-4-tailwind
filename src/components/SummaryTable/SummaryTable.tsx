import { useAppSelector } from "../../store/hooks";
import { defineIcon } from "../defineIcon";
import { ICategory } from "../../models/ICategory";
import Table from "react-bootstrap/Table";

export const SummaryTable = () => {
  const { notes, allCategories } = useAppSelector((state) => state.notes);
  const categories: ICategory[] = [];
  allCategories.forEach((item) => {
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
        {categories.map((item: ICategory, i: number) => (
          <tr key={i}>
            <td>
              <i className={`bi ${defineIcon(item.item)}`}></i> {item.item}
            </td>
            <td>{item.active}</td>
            <td>{item.archived}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
