import React from 'react';
import Card from '../UI/Card';
import Button from "react-bootstrap/Button";

const Home = () => {
    return (
      <Card>
        <div
          className="card text-center p-2"
          style={{ backgroundColor: "transparent",border: "none" }}
        >
          <div className="card-header">
            <h1 className="display-1">
              Good Food is the Soul for Healthy life
            </h1>
          </div>
          <div className="card-body pd-3">
            <h2>Just because you are not sick doesn't mean you're healthy</h2>
            <p>
              Book Appoinment, Insure Good Health -<cite>Foodie Family</cite>
            </p>
          </div>
          <div>
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

export default Home;