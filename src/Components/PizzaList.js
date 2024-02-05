const PizzaList = ({ pizzaItem }) => {
  const isSoldOut = pizzaItem.soldOut;

  return (
    <li className={`pizza ${isSoldOut ? 'sold-out' : ''}`}>
      <img src='../pizzas/focaccia.jpg' alt='focaccia' />
      <div>
        <h3>{pizzaItem.name}</h3>
        <p>{pizzaItem.ingredients}</p>
        {!pizzaItem.soldOut ? <span>{pizzaItem.price}</span> : <span>sold out</span>}
      </div>
    </li>
  );
};

export default PizzaList;
