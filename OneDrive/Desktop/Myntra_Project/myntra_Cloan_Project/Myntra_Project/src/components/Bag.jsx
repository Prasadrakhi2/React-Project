import { useSelector } from "react-redux";
import BagItems from "./BagItems";
import BagSummery from "./BagSummery";

const Bag = () => {
  const bagItem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItem = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          {finalItem.map((item) => (
            <BagItems item={item} />
          ))}

          <BagSummery />
        </div>
      </main>
    </>
  );
};

export default Bag;
