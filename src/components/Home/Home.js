import React, { useEffect } from 'react';
import './Home.css'


const Home = () => {
   
    return (
        <div className='home-container'> 
            <div className="info-container">
                <h1>LOVE WILL MAKE</h1>
                <h1> YOU DO CARZY THINGS</h1>
                <p>Based on a true story, the movie shows the need of a man Chris Gardner (a real person), his expectations from life through his pursuit of happiness, that is his quest for a happy life. His pursuit for 'happyness', spelled in the title as spelled by his son Christopher, is indicative of a father's solace, his son's happiness encompassing him. Persistence and passion are synonymous with success, the movie stands as a pillar of that projection. The moral lesson being to believe in yourself no matter what.</p>
            </div>
            <div className="img-container">
            
            <img src={require('../../assets/bg.jpg')} alt="" />
            </div>
        </div>
    );
};

export default Home;