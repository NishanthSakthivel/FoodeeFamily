import React from "react";
import Card from "../UI/Card";
import Button from "react-bootstrap/Button";



const About = () => {
  return (
    <Card>
      <div
        className="card mt-3 "
        style={{
          backgroundColor: "transparent",
          border: "none",

          width: "65%",
        }}
      >
        <div className="card-header">
          <h1>What we are?</h1>
        </div>
        <h5
          className="about_para mt-2"
          style={{ textAlign: "left"}}
        >
          Foodie Family is created with the intention to help you make the right
          food choice every time. We cover all aspects of basic nutrition,
          nutrients, hygienic practices, exercises and some recipes.
        </h5>
        <h5 className="about_para mt-2" style={{ textAlign: "left" }}>
          We help you to live healthier, better, longer lives, and we're here to
          assist with the process. Healthy eating doesn't have to be daunting
          when you have the tools you need to make smarter food decisions.
        </h5>
        <h5 className=" about_para mt-2" style={{ textAlign: "left" }}>
          Whether you're in a bustling city or a rural town, our advice meets
          you wherever you are. From eating healthier at chain restaurants to
          shopping the local grocery store with a keener eye, we can help you
          make better food choices every single day.
        </h5>
        <div className="text-center mt-3">
          <Button
            variant="success"
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdcUNrNnwU3yGRt3BJ2tbxsNLTmFE-e7iO_9Fkhnaqt6Th0xA/viewform"
          >
            Book Appoinment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default About;
