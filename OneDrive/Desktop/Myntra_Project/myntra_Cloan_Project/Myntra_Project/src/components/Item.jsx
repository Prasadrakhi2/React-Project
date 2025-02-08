import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Item = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const elementBagFount = bagItems.indexOf(item.id) >= 0;

  const dispatch = useDispatch();

  const handleOnClicked = () => {
    dispatch(bagSliceAction.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagSliceAction.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementBagFount ? (
        <button
          type="button"
          className="btn-add-bag btn btn-danger"
          onClick={handleRemove}
        >
          <MdDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-success"
          onClick={handleOnClicked}
        >
          <IoMdAddCircle /> Add To Bag
        </button>
      )}
    </div>
  );
};

export default Item;
