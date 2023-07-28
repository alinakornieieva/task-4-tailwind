import { FormComp } from "../../components/Form/Form";
import { SummaryTable } from "../../components/SummaryTable/SummaryTable";
import { NotesList } from "../../components/NotesList/NotesList";
import { useAppDispatch } from "../../store/hooks";
import { toggleForm } from "../../store/slice";
import Button from "react-bootstrap/Button";

export const ActivePage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <FormComp />
      <NotesList />
      <Button onClick={() => dispatch(toggleForm())} variant="primary mb-3">
        Add note
      </Button>
      <SummaryTable />
    </>
  );
};
