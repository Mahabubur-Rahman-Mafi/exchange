import React from 'react';
import {
  useQuery,
} from "@tanstack/react-query";
import CateCard from './CateCard';
import { Container } from 'react-bootstrap';
import './Home.css'


const Categories = () => {
    const { data: category = [], isLoading } = useQuery({
      queryKey: ["category"],
        queryFn: async () =>
            fetch("http://localhost:5000/categories")
      .then(res=>res.json())
    });
    

    return (
      <Container>
        <h2 className="text-center my-5">Select your Category</h2>
        <div className="category-card">
          {category.map((c) => (
            <CateCard c={c} key={c._id}></CateCard>
          ))}
        </div>
      </Container>
    );
};

export default Categories;