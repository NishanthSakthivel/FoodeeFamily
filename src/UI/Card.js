import React from "react";
import Footer from "../components/Footer";
/* import footer from '../components/footer'
 */
import BgImg from '../Assets/CardBgLadyWhite.jpg'
const Card = (props) => {
  return (
    <div className="container d-flex flex-wrap">
       <div className="wrapper_card">
         {props.children} 
        
      </div> 
     
    </div>
  );
};

export default Card;
