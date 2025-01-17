import React, { useEffect } from "react";
import "./Latest.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productsSlice";
import Card from "../card/Card";

const Latest = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  console.log(products)
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="latest">
      <div className="container">
        <div className="row row-list">
          <div className="col-lg-4">
            <h2>Latest Products</h2>
          </div>
          <div className="col-lg-8 all-new">
            <ul>
              <li style={{ color: "red" }}>All</li>
              <li>New</li>
              <li>Featured</li>
              <li>Offer</li>
            </ul>
          </div>
        </div>
        <div className="product-list">
        {products.length > 0 && products ? (
        products.map((product) => (
          <Card key={product._id} product = {product}/>
        ))
      ) : ( <p>Not found</p>)
    }
       
        </div>
      </div>
    </div>
  );
};

export default Latest;
