import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AdCard from './AdCard';
import './Home.css'

const Adversite = () => {

    const [ad, setAd] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/adversite")
            .then(res=>res.json())
            .then(d=>setAd(d))
        .catch(e=>console.log(e))
    },[])
    return (
        <Container>
            {
                ad.length !== 0 &&

                <h2 className='text-center mt-5 mb-4'>Advertise</h2>
            }
        <div className='advertise-card'>
          {ad.map((add) => (
            <AdCard add={add} key={add._id}></AdCard>
          ))}
        </div>
      </Container>
    );
};

export default Adversite;