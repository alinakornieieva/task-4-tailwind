import { FormComp } from "../../components/Form/Form";
import { SummaryTable } from "../../components/SummaryTable/SummaryTable";
import { TableComp } from "../../components/Table/Table";
import Button from "react-bootstrap/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleForm } from "../../store/slice";

export const ActivePage = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <FormComp />
      <TableComp />
      <Button onClick={() => dispatch(toggleForm())} variant="primary mb-3">
        Add note
      </Button>
      <SummaryTable />
    </>
  );
};
