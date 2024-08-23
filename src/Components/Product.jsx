import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aysncgetProducts } from "../Store/Actions/ProductAction";

const Product = () => {
  const {products} = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aysncgetProducts());
  });
  return (
    <div className="w-full h-full overflow-y-auto bg-red-200 flex items-center flex-col justify-start gap-2 ">
      <h1 className="text-5xl">Products</h1>
      <ul>
        {
          products.map((elem)=>  <li key={elem.id}>{elem.title}</li>)
        }
      </ul>
    </div>
  );
};

export default Product;
