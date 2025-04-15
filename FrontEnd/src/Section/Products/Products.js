import React, { useState } from 'react';
import './Products.css';
import Modals from './Modal/Modals';
import { useGetProductsByNameQuery } from '../../redux/Products';
import { Rating } from 'react-simple-star-rating';

const Products = () => {
  const allProductsQuery = 'products?populate=*';
  const menProductsQuery = 'products?populate=*&filters[ProductCategory][$eq]=Men';
  const womenProductsQuery = 'products?populate=*&filters[ProductCategory][$eq]=Women';

  const [state, setState] = useState(allProductsQuery);
  const { data, error, isLoading } = useGetProductsByNameQuery(state);
  const [Modal,SetModal] = useState(
    [
      {
        cat:"",
        Title:"",
        price:"",
        dis:"",
       img:[],
       firstimg:""

      }
    ]
  )

  const SetTheModalInfo=(cat,Title,price,dis,img)=>{
    SetModal({cat:cat,Title:Title,price:price,dis:dis,img:img});
  }
console.log(Modal);

  const handleTabClick = (query) => {
    setState(query);
  };

  if (isLoading) {
    return (
      <div className="spinner-grow text-dark text-center mt-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <h1 className="mt-4 text-center">{error.message}</h1>;
  }

  if (data) {
    return (
      <div className="container">
        <div className="TabTable">
          <div className="CategoryDis">
            <div>
              <h3>Selected Products</h3>
              <p>All our new arrivals in an exclusive brand selection</p>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${state === allProductsQuery ? 'active' : ''}`}
                  onClick={() => handleTabClick(allProductsQuery)}
                  type="button"
                >
                  All Products
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${state === menProductsQuery ? 'active' : ''}`}
                  onClick={() => handleTabClick(menProductsQuery)}
                  type="button"
                >
                  Men Category
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${state === womenProductsQuery ? 'active' : ''}`}
                  onClick={() => handleTabClick(womenProductsQuery)}
                  type="button"
                >
                  Women Category
                </button>
              </li>
            </ul>
          </div>

          
          <div className="tab-content" id="myTabContent">

{/*=========================================================================================================*/}
{/*=========================================================================================================*/}

            <div className={`tab-pane fade ${state === allProductsQuery ? 'show active' : ''}`} id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
              <div className="CardOne">
                {data.data.map((Item) => (
                  <div key={Item.id} className="thecard mb-4 card col-lg-4 col-md-5 col-sm-12">
                    <h2 style={{ margin: '10px', marginBottom: '20px' }}>{Item.ProductCategory}</h2>
                    {Item.ProductImg && Item.ProductImg[0] && Item.ProductImg[0].url ? (
              <img
                src={`http://localhost:1337${Item.ProductImg[0].url}`} // Corrected URL
                className="card-img-top"
                alt={Item.ProductTitle} // Added alt text
              />
            ) : (
              <p>Image not available</p>
            )}
                    <div className="card-body">
                      <div className="PriceContainar container">
                        <h5 className="card-title">{Item.ProductTitle}</h5>
                        <p className="categoryPrice">${Item.ProductPrice}</p>
                      </div>
                      <p className="card-text container">{Item.ProductDis}</p>
                      <div className="Buy container">
                        <button onClick={()=>{SetTheModalInfo( Item.ProductCategory, Item.ProductTitle,Item.ProductPrice,Item.ProductDis,Item.ProductImg,Item.ProductImg[0].url)}} data-bs-toggle="modal" data-bs-target="#myModal" type="button" className="btn btn-dark">Add To Cart</button>
                        <Rating initialValue={Item.ProductRating} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

{/*=========================================================================================================*/}
{/*=========================================================================================================*/}


          </div>
        </div>
        <Modals id="myModal" Cat={Modal.cat} title={Modal.Title} price={Modal.price} dis={Modal.dis} img={Modal.img} firstimg={Modal.firstimg}/>
      </div>
    );
  }
};

export default Products;