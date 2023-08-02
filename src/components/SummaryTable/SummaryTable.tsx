import { useAppSelector } from "../../store/hooks";
import { defineIcon } from "../defineIcon";
import { ICategory } from "../../models/ICategory";

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
    <table className="w-full table-fixed border-separate border border-slate-400">
      <thead>
        <tr>
          <th className="py-2 border border-slate-300">Note Category</th>
          <th className="py-2 border border-slate-300">Active</th>
          <th className="py-2 border border-slate-300">Archived</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((item: ICategory, i: number) => (
          <tr key={i}>
            <td className="p-1 border border-slate-300">
              <i className={`bi ${defineIcon(item.item)}`}></i> {item.item}
            </td>
            <td className="p-1 border border-slate-300 text-center">
              {item.active}
            </td>
            <td className="p-1 border border-slate-300 text-center">
              {item.archived}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
