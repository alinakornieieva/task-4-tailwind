import { INote } from "../../models/INote";
import { useAppDispatch } from "../../store/hooks";
import {
  archiveNote,
  deleteNote,
  editNote,
  toggleForm,
} from "../../store/slice";
import { defineIcon } from "../defineIcon";

type Props = {
  name: string;
  notes: INote[];
};

export const TableComp = ({ name, notes }: Props) => {
  const tableCateg: string[] = [
    "Name",
    "Created",
    "Category",
    "Content",
    "Dates",
  ];
  const iconsActiveHead = name === "active" && (
    <th className="py-2 border border-slate-300 text-center">
      <i className="bi bi-folder2-open me-2"></i>
      <i className="bi bi-trash"></i>
    </th>
  );
  const iconsArchivedHead = name === "archived" && (
    <th className="py-2 border border-slate-300 text-center">
      <i className="bi bi-folder2-open"></i>
    </th>
  );
  const dispatch = useAppDispatch();
  return (
    <table className="w-full table-auto border-separate border border-slate-400">
      <thead>
        <tr>
          {tableCateg.map((categ) => (
            <th className="py-2 border border-slate-300" key={categ}>
              {categ}
            </th>
          ))}
          {iconsActiveHead}
          {iconsArchivedHead}
        </tr>
      </thead>
      <tbody>
        {notes.map((item: INote) => (
          <tr key={item.id}>
            <td className="p-1 border border-slate-300">
              <i className={`bi ${defineIcon(item.category)}`}></i> {item.note}
            </td>
            <td className="p-1 border border-slate-300">{item.created}</td>
            <td className="p-1 border border-slate-300">{item.category}</td>
            <td className="p-1 border border-slate-300">{item.content}</td>
            <td className="p-1 border border-slate-300">
              {item.dates?.map((data, i) => (
                <div key={i}>{data}</div>
              ))}
            </td>
            <td className="p-1 border border-slate-300 text-center">
              {name === "active" && (
                <i
                  onClick={() => {
                    dispatch(editNote(item.id));
                    dispatch(toggleForm());
                  }}
                  className={`bi bi-pencil ${name === "active" && "me-2"}`}
                ></i>
              )}
              <i
                onClick={() => dispatch(archiveNote(item.id))}
                className="bi bi-folder2-open me-2"
              ></i>
              {name === "active" && (
                <i
                  onClick={() => dispatch(deleteNote(item.id))}
                  className="bi bi-trash"
                ></i>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
