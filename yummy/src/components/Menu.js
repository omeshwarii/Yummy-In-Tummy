import './Menu.css';
import MenuCard from './MenuCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Menu() {
    const [menu, setMenu] = useState([]);
    const [selectedType, setSelectedType] = useState(''); // State to keep track of selected meal type

    useEffect(() => {
        axios.get('https://yummy-in-tummy.onrender.com/')
            .then(response => {
                setMenu(response.data.menu);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleFilter = (type) => {
        setSelectedType(type); // Update the selected meal type
    };

    // Filter the menu items based on the selected meal type
    const filteredMenu = selectedType ? menu.filter(item => item.mealType === selectedType) : menu;
    console.log('Selected Type:', selectedType);
    console.log('Filtered Menu:', filteredMenu);
    return (
        <section className='menu'>
            <div className="mealType">
                <span className="regular" onClick={() => handleFilter('regular')}>Regular</span>
                <span className="dessert" onClick={() => handleFilter('dessert')}>Desserts</span>
            </div>
            <div className='MenuCards'>
                {filteredMenu.map(cuisine => (
                    <MenuCard cuisine={cuisine} key={cuisine.id} />
                ))}
            </div>
        </section>
    );
}

export default Menu;
