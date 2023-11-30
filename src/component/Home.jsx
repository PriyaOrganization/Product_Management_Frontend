import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProducts()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then(res => {
        setMsg("Product Deleted Successfully.");
        init();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header text-center fs-4'>
                All Products List
              </div>
              {
                msg && <p className="fs-4 text-success text-center">{msg}</p>
              }
              <div className='card-body'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Sr. No.</th>
                      <th scope='col'>Product Name</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      productList.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.productName}</td>
                          <td>{product.description}</td>
                          <td>{product.price}</td>
                          <td>{product.status}</td>
                          <td>
                            <Link to={'/editProduct/' + product.id} className="btn btn-info" style={{ marginRight: 4 }}>Edit</Link>
                            <button to="" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home