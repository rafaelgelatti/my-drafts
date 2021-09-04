import { useHistory } from "react-router-dom";

export const Transition = () => {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.goBack()}>
        Return
      </button>
      <p>Transition</p>
    </>
  );
};
