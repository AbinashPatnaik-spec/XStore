import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error in fetching: ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="container my-3" style={{paddingBottom: 30}}>
      <h4>Products List</h4>
      <Row gutter={[16,16]}>
        {products.map((prd) => (
          <Col md={6} key={prd.id}>
            <div
              className="card text-bg-success"
              style={{ width: "10rem;" }}
            >
              <img
                src={prd.image}
                className="card-img-top"
                alt={prd.title}
                height={250}
              />
              <div className="card-body">
                <p className="card-text">{prd.title}</p>
                <p className="card-text"><strong>Price:</strong> <i class="bi bi-currency-dollar"></i>{prd.price}</p>
                <button
                  className="btn btn-warning my-2"
                  onClick={() => addToCart(prd)}
                >
                  <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
