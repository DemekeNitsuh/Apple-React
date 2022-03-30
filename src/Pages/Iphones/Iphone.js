import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./single.css"
function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((data) =>
      setProducts(data.Products)
       );
  }, []);

  console.log(products);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container single">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((products) => {
            let product_url = products.product_url;
            let product_name = products.product_name;
            let product_img = products.product_img;
            let product_brief_description = products.product_brief_description;
            let starting_price = products.starting_price;
            let price_range = products.price_range;
            let product_id = "/iphone/" + product_url;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={product_url}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product_name">{product_name}</div>
                  <div className="product_brief_description">
                    {product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${starting_price}`}
                  </div>
                  <div className="monthly-price">{price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={product_url}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-img">
                    <img src={product_img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}
export default Iphone;
