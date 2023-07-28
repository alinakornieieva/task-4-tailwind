import { INote } from "../../models/INote";
import { useAppDispatch } from "../../store/hooks";
import {
  archiveNote,
  deleteNote,
  editNote,
  toggleForm,
} from "../../store/slice";
import { defineIcon } from "../defineIcon";
import Table from "react-bootstrap/Table";

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
    <th className="text-center">
      <i className="bi bi-folder2-open me-2"></i>
      <i className="bi bi-trash"></i>
    </th>
  );
  const iconsArchivedHead = name === "archived" && (
    <th className="text-center">
      <i className="bi bi-folder2-open"></i>
    </th>
  );
  const dispatch = useAppDispatch();
  return (
    <Table bordered>
      <thead>
        <tr>
          {tableCateg.map((categ) => (
            <th key={categ}>{categ}</th>
          ))}
          {iconsActiveHead}
          {iconsArchivedHead}
        </tr>
      </thead>
      <tbody>
        {notes.map((item: INote) => (
          <tr key={item.id}>
            <td>
              <i className={`bi ${defineIcon(item.category)}`}></i> {item.note}
            </td>
            <td>{item.created}</td>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>
              {item.dates?.map((data, i) => (
                <div key={i}>{data}</div>
              ))}
            </td>
            <td className="text-center">
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
    </Table>
  );
};
