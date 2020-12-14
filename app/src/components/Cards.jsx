import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { chefData } from "../data";

const Cards = (props) => {
  return (
    <div className="card-container">
      {chefData.map((item) => {
        return (
          <Card>
            <CardImg
              top
              width="100%"
              src={item.image}
              alt="Card image cap"
              className="chef-img"
            />
            <CardBody className="card-body">
              <CardTitle tag="h2">{item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {item.title}
              </CardSubtitle>
              <CardText>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-256.png"
                  className="social-media"
                  alt=""
                />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_6-twitter-256.png"
                  className="social-media"
                  alt=""
                />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png"
                  className="social-media"
                  alt=""
                />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_youtube-256.png"
                  className="social-media"
                  alt=""
                />
              </CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
