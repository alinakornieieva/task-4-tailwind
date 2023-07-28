import { useAppSelector } from "../../store/hooks";
import { TableComp } from "../Table/Table";

export const NotesList = () => {
  let { notes } = useAppSelector((state) => state.notes);
  notes = notes.filter((item) => !item.archived);
  return <TableComp name="active" notes={notes} />;
};
