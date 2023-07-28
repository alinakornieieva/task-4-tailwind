import { useAppSelector } from "../../store/hooks";
import { TableComp } from "../../components/Table/Table";

export const ArchivedPage = () => {
  let { notes } = useAppSelector((state) => state.notes);
  notes = notes.filter((item) => item.archived);
  return <TableComp name="archived" notes={notes} />;
};
