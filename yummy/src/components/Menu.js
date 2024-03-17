import './Menu.css';
import MenuCard from './MenuCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Menu(){
    const [Menu, setMenu] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:2000/user/menu')
        .then(response => {
          setMenu(response.data.menu);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    return (
        <section className='menu'>
            <div className='MenuCards'>
                {Menu.map(cuisine=>(
                    <MenuCard cuisine={cuisine}></MenuCard>
                ))}
                
            </div>
        </section>
        
      );
}


export default Menu;
