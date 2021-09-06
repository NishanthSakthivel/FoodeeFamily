import React from "react";
import BrandImg from "../Assets/Brand.png";
import Card from "../UI/Card";

const contact = () => {
  return (
    <Card>
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-sm border card shadow shadow-lg">
            <p
              className="text-left"
              style={{ textAlign: "left", fontSize: "1.8rem" }}
            >
              Contact us
            </p>
            <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
              FoodieFamily
            </p>
            <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
              Coimbatore,TamilNadu
            </p>
            <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
              Phone:6382923115
            </p>
            <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
              Email: foodiefamiy99@gmail.com
            </p>
          </div>
          <div className=" col-sm ">
            <img src={BrandImg} alt="bran_logo" width="100%" height="auto" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default contact;
