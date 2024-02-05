const PizzaList = ({ pizzaItem }) => {
  const isSoldOut = pizzaItem.isSoldOut;

  return (
    <li className='pizza'>
      <img src='../pizzas/focaccia.jpg' alt='focaccia' />
      <div>
        <h3>{pizzaItem.name}</h3>
        <p>{pizzaItem.ingredients}</p>
        {!isSoldOut ? <span>sold out</span> : <span>pizzaItem.price</span>}
      </div>
    </li>
  );
};

export default PizzaList;
