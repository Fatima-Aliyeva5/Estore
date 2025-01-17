import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts } from "../../redux/features/productsSlice";
import "./Admin.scss";
const Admin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({ title: "", category: "", price: "", image: "" });
  };
  return (
    <div className="admin">
      <div className="container">
        <div className="btn btn-success my-2">Create</div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((product) => (
                <tr key={product?._id}>
                  <td>
                    <img src={product?.image} alt={product?.title} />
                  </td>
                  <td>{product?.title}</td>
                  <td>{product?.category}</td>
                  <td>${product?.price}</td>
                  <td>
                    <div className="btn btn-danger">Delete</div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No products found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
