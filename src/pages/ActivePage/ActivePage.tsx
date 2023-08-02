import { FormComp } from "../../components/Form/Form";
import { SummaryTable } from "../../components/SummaryTable/SummaryTable";
import { NotesList } from "../../components/NotesList/NotesList";
import { useAppDispatch } from "../../store/hooks";
import { toggleForm } from "../../store/slice";

export const ActivePage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <FormComp />
      <NotesList />
      <button onClick={() => dispatch(toggleForm())} className="my-5 btn">
        Add note
      </button>
      <SummaryTable />
    </>
  );
};
