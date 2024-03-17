function MenuCard(props) {
    return (
        <div className='MenuCard'>
            
            <div className='MenuImg'>
                <img src={props.cuisine.image} alt={props.cuisine.title}></img>
                <div className='Calories'>{props.cuisine.calories}</div>
            </div>
            <div className='MenuDetails'>
                <h3>{props.cuisine.title}</h3>
                <div className='Items'>
                    {props.cuisine.items.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default MenuCard;
