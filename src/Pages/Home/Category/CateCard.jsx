import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Home.css";

const CateCard = ({c}) => {
    return (
      <Link to={`/category/${c.categoryName}`}>
        <Button variant="transparent">
          <div className="cate-card">
            <h2 className="text-center align-items-center p-5">
              {c.categoryName}
            </h2>
          </div>
        </Button>
      </Link>
    );
};

export default CateCard;