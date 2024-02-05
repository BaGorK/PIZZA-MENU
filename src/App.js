import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer/>
    </Fragment>
  );
};

function Header() {
  return (
    <header class='header'>
      <h1>fast react pizza co.</h1>
    </header>
  );
}

function Main() {
  return (
    <main class='main'>
      <h2>our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
        organic, all delicious.
      </p>
      <ul class='pizzas'>
        <li class='pizza'>
          <img src='../pizzas/focaccia.jpg' alt='focaccia' />
          <div>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, and pepperoni</p>
            <span>sold out</span>
          </div>
        </li>
        <li class='pizza'>
          <img src='./../pizzas/salamino.jpg' alt='pizza salamino' />
          <div>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, and pepperoni</p>
            <span>sold out</span>
          </div>
        </li>
        <li class='pizza'>
          <img src='./../pizzas/salamino.jpg' alt='pizza salamino mage' />
          <div>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, and pepperoni</p>
            <span>sold out</span>
          </div>
        </li>
        <li class='pizza'>
          <img src='./../pizzas/salamino.jpg' alt='pizza salamino iage' />
          <div>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, and pepperoni</p>
            <span>sold out</span>
          </div>
        </li>
        <li class='pizza'>
          <img src='./../pizzas/salamino.jpg' alt='pizza salamino age' />
          <div>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, and pepperoni</p>
            <span>sold out</span>
          </div>
        </li>
        <li class='pizza sold-out'>
          <div>
            <img src='./../pizzas/salamino.jpg' alt='pizza salamino imge' />
          </div>
          <div>
            <h3>Pizza Salamino</h3>
            <p>Tomato, mozarella, and pepperoni</p>
            <span>sold out</span>
          </div>
        </li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer class='footer'>
      <p>
        We're happy to welcome you between {12}:00 and {20}:00.
      </p>
      {/* <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p> */}
    </footer>
  );
}

export default App;
