import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { productData } from './productData';
import { MdStars } from "react-icons/md";

function ProductPage() {
    const location = useLocation()
    const pageLocation = location.pathname.split('/').splice(1)

    const [product, setProduct] = useState([]);

    const productApi = async () => {
        try {
            const getProduct = await fetch('https://fakestoreapi.com/products');
            const productData = await getProduct.json();
            setProduct(productData);
        } catch (error) {

        }
    }

    useEffect(() => {
        productApi()
    }, [])

    console.log(product);
    return (
        <div className='container'>
            <div className="product-header">
                <div className="location-bar py-3">
                    {
                        pageLocation.map((item, index) => {
                            return (
                                <Link to={`${index == 0 ? `/${item}` : `/product/${item}`}`} key={index}>/{item}</Link>
                            )
                        })
                    }
                </div>
                <h2 className='text-center text-uppercase py-5'>our product list</h2>
                <div className="product-categury d-flex justify-content-center">
                    <div className="categury-body">
                        {productData.categury.map((item, index) => {
                            return (
                                <Link className='btn btn-outline-dark mx-1 text-capitalize' to={`/product/${item}`} key={index}>{item}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="product-container">
                <div className="product-body">
                    {
                        product.map((item, index) => {
                            return (
                                <div key={index} className="product-items">
                                    <div className="product-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="product-body d-flex flex-column p-3">
                                        <h4 style={{ fontSize: '19px' }}>{item.title.length > 30 ? item.title.substring(0, 29) : item.title}</h4>
                                        <div className="product-info d-flex justify-content-between">
                                            <h5>${item.price}</h5>
                                            <small style={{ color: 'red' }}><MdStars className='text-primary' /> {item.rating.rate}</small>
                                        </div>
                                    </div>
                                    <div className="text-center pb-3">
                                        <button className="btn btn-primary">buy now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage