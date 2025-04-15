import React, { useState } from 'react';
import './Modal.css';

const Modals = ({ id, Cat, title, price, dis , img }) => {

  const [imag,setimag] = useState("");

  const settheimagurl=(url)=>{
    setimag(url);
  }
  return (
    <div className='container'>
      <div className="modal fade col-md-12" id={id} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className='imagen'>
                <h3>{Cat}</h3>
                <hr style={{ color: "black", margin: "20px", width: "160%", textAlign: "center" }} />
                
                <img  className="card-img-top" src={`http://localhost:1337${imag}`} alt="Product" /> 
              </div>
              <div className='T_shirt_dis'>
                <h1>{title}</h1>
                <h4>${price}</h4>
                <p>{dis}</p>
                <div className='T_shirt_color'>
                  {img && img.length > 0 ? (
                    img.map((Item) => (
                      Item && Item.url ? (
                        <div key={Item.id}><img className="card-img-top" style={{ maxWidth: "50px" }} onClick={()=>{settheimagurl(Item.url)}} src={`http://localhost:1337${Item.url}`} alt="Color" /></div>
                      ) : null 
                    ))
                  ) : (
                    <p>No images available</p> 
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary"><span><img style={{ maxWidth: "30px" }} src='/Icons/icons8-shopping-cart-50.png' alt="Cart" /></span> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;