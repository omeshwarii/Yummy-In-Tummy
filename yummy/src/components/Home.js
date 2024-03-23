import React, { useEffect, useRef} from 'react';
import './Home.css';
import home1 from '../../src/images/home1.jpg';
import home2 from '../../src/images/home2.jpg';
import home3 from '../../src/images/home3.jpg';
import fresh from '../../src/images/fresh.png';
import eco from '../../src/images/eco.png';
import nutrition from '../../src/images/nutrition.png';

function Home() {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const imgContainer = imgContainerRef.current;
    let currentIndex = 0;
    const images = [home1, home2, home3];
    const imageStayDuration = 5000; // 8 seconds in milliseconds

    const showImage = () => {
      imgContainer.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(showImage, imageStayDuration);
    };

    showImage(); // Initial call to start showing images

    return () => clearTimeout(showImage);
  }, []);

  return (
    <div>
      <img src={home1} alt="Home" className="img-container" ref={imgContainerRef} />
      <section className="description">
        SAVOR THE FLAVORS OF HOMEMADE GOODNESS.
      </section>
      <div className="about">
      Indulge in our farm-fresh dishes, where purity meets nutrition. Our ingredients are meticulously selected for their freshness and quality, ensuring every bite is a delightful experience. Experience the goodness of pure and clean food, free from harmful additives. Nourish your body with our menu's nutritional excellence, crafted to offer a perfect balance of flavors and nutrients. Join us for a culinary journey that celebrates the best of nature's bounty.
      </div>
      <div className="detailsContainer">
      <div className="detailsContent">
        <img src={fresh} alt="freshness" className="contentImg" />
        <h2>Farm to table freshness</h2>
        <p>Enjoy the vibrant flavors and superior quality of food that has been carefully harvested</p>
      </div>
      <div className="detailsContent">
      <img src={eco} alt="eco" className="contentImg" />
        <h2>Pure and Clean Ingredients</h2>
        <p>free from harmful chemicals, pesticides, and artificial additives.</p>
      </div>
      <div className="detailsContent">
      <img src={nutrition} alt="nutrition" className="contentImg" />
        <h2>Nutritional Excellence</h2>
        <p>Our Products are packed with essential nutrients, vitamins, and minerals, providing customers with optimal nutrition.</p>
      </div>
      </div>
        <div className="footer-container">
        <footer className='contact'>
          <section>CONTACT DETAILS:</section>
          <p>395-879-4115</p>
          <p>yummyintummy@gmail.com</p>
        </footer>
        <footer className='location'>
          <section>ADDRESS:</section>
          <p>1-9-38, Brindavan colony, Saroor nagar, Telangana, Hyderabad, IN - 56093</p>
          <p>Now available online on
            <a href="https://www.doordash.com/" title="Order online for Doordash chef's miracle special spices ">
              Doordash
            </a>&nbsp;and&nbsp;
            <a href="https://www.ubereats.com/" title="Order online for Ubereats chef's miracle special spices ">
              UberEats
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
