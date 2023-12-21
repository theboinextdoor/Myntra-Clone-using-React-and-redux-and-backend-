import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  // console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // dispatch(fetchStatusAction.markFetchingStarted())
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(fetchStatusAction.markFetchDone())
        // dispatch(fetchStatusAction.markFetchingFinished())
        dispatch(itemsActions.addInitialItems(items[0]));
        // console.log("I am after the Started Function");
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
      <div>
        {/* Fetch Done: {fetchStatus.fetchDone} */}
        {/* Currently Fetching : {fetchStatus.currentlyFetching} */}
      </div>
    </>
  );
};

export default FetchItems;
