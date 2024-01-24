import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu'
import Categories from './components/Categories';
import items from './components/Data'
import itemsAdapt from './components/DataAdapt'

import { useState } from 'react';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import Adapt from './Pages/Sidebar-Pages/Adapt';
import Login from './Pages/Login';
import Home from './Pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './Pages/Sidebar-Pages/Account';
import Favorite from './Pages/Sidebar-Pages/Favorite';
import Aboutus from './Pages/Footer-Pages/Aboutus';
import Cart from './Pages/Sidebar-Pages/Cart';
import Faq from './Pages/Footer-Pages/Faq';
import CategoriesAdapt from './components/CategoriesAdapt';
import DetailPage from './components/DetailPage'; // Import the new DetailPage component


const allCategories = ['Show All', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [adaptItems, setadaptItems] = useState(itemsAdapt);
  const [categories, setCategories] = useState(allCategories);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  // Define the filterItems function
  const filterItems = (category) => {
    if (category === 'Show All') {
      setMenuItems(items);
    } else {
      const filteredItems = items.filter((item) => item.category === category);
      setMenuItems(filteredItems);
    }
  };


  return (
    <Router>
      <div className="Container">
      <TopNav  />
        <div className='Content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/adapt'>
              <Adapt />
            </Route>
            <Route path='/login'>

              <Login />

            </Route>
            <Route path='/profile'>

              <Account />

            </Route>
            <Route path='/about'>

              <Aboutus />

            </Route><Route path='/cart'>

              <Cart />

            </Route>
            <Route path='/faq'>

              <Faq />

            </Route>
            <Route path='/fav'>

              <Favorite />

            </Route>
            <Route path='/shop'>
              <Categories filterItems={filterItems} categories={categories} />
            </Route>

            <Route path='/adapt2'>

              <CategoriesAdapt items={adaptItems} />

            </Route>
            <Route path='/detail/:itemId'>
              <DetailPage items={items} />
            </Route>
          </Switch>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </Router>





  );
}

export default App;