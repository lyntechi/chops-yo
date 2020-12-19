import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { infoAboutItem } from "../data";
import Review from "./Review";
import { connect } from "react-redux";

function IndividualItem(props) {
  const params = useParams();
  const product = props.infoAboutItem.find(
    (item) => `${item.id}` === params.id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="individualItemContainer">
      <div className="grid">
        <div className="left-col">
          <img src={product.image} className="img" alt="" />
        </div>
        <div className="right-col">
          <div>
            <div className="titles">
              <h1>{product.name}</h1>
              <h1>${product.price}.00</h1>
            </div>

            <img src={product.rating} className="rating" alt="" />
            <div className="types">
              <p>{product.type}</p>
              <p>{product.availability}</p>
            </div>
            <p>{product.about}</p>
          </div>

          <div className="social-container">
            <img src='https://i.imgur.com/av9p2Dv.png' alt="" className="cart-icon" />

            <div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-256.png"
                alt=""
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_6-twitter-256.png"
                alt=""
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-and-tab">
        <p>REVIEWS</p>

        <Review />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  console.log("this is mapstate", state);

  return {
    infoAboutItem: state.infoAboutItem,
  };
}

export default connect(mapStateToProps, {})(IndividualItem);
