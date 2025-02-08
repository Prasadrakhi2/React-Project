import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemsSlice";
import { fachStatusActions } from "../store/fachStatusSlice";

const FachingItem = () => {
  const fachStatus = useSelector((store) => store.fachStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fachStatus.fatchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fachStatusActions.fatchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fachStatusActions.markFachDone());
        dispatch(fachStatusActions.fatchingEnded());
        dispatch(itemAction.addInitialItem(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fachStatus.fatchDone]);

  return <></>;
};

export default FachingItem;
