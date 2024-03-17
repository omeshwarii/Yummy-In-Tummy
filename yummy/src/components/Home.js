import chefpic from '../../src/images/chef.jpg';
import './Home.css';
function Home(){
    return (
        <div >
        
          <div className="top-container">
            <section className="description">
              Savor the flavors of homemade goodness.
            </section>
            <section className="img"><img src={chefpic} alt="A chef at our restaurant"/>
            </section>
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
                <p>Now available online on <a href="https://www.doordash.com/" title="This will direct you to order online for Doordash chef's miracle special spices ">
                Doordash</a>&nbsp;and <a href="https://www.ubereats.com/" title="This will direct you to order online for ubereats chef's miracle special spices ">
                UberEats
                </a></p>
                
                </footer>
          </div>

        </div>
      );
}

export default Home;