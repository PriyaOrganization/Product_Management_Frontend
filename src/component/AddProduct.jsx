import React, { useState } from 'react'
import productService from '../service/product.service';

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: ""
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    }

    const ProductRegister = (e) => {
        e.preventDefault();
        productService.saveProduct(product).then((res) => {
            // alert("Product added successfully.");
            setMsg("Product added successfully.");
            setProduct(
                {
                    productName: "",
                    description: "",
                    price: "",
                    status: ""
                }
            )
        })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 offset-md-3'>
                        <div className="card">
                            <div className='card-header fs-4 text-center'>
                                Add Product
                            </div>
                            {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
                            <div className='card-body'>
                                <form action="" onSubmit={(e) => ProductRegister(e)}>
                                    <div className='mb-3'>
                                        <label htmlFor="">Enter Product Name</label>
                                        <input type="text" name="productName" id="" value={product.productName} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="">Enter Description</label>
                                        <input type="text" name="description" id="" value={product.description} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="">Enter Price</label>
                                        <input type="text" name="price" id="" value={product.price} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="">Enter Status</label>
                                        <input type="text" name="status" id="" value={product.status} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <button className='btn btn-primary col-md-12'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct