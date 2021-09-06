import React from "react";

/* import footer from '../components/footer'
 */

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
