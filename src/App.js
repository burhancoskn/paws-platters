import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories';
import items from './components/Data'
import itemsAdapt from './components/DataAdapt'

import { useState } from 'react';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import AddProduct from './components/AddProductForm';
import Login from './Pages/Login';
import Home from './Pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Account from './Pages/Sidebar-Pages/Account';
import Favorite from './Pages/Sidebar-Pages/Favorite';
import Aboutus from './Pages/Footer-Pages/Aboutus';
import { CartProvider } from './Pages/Sidebar-Pages/CartContext';
import Faq from './Pages/Footer-Pages/Faq';
import CategoriesAdapt from './components/CategoriesAdapt';
import DetailPage from './components/DetailPage'; // Import the new DetailPage component
import Cart from'./Pages/Sidebar-Pages/Cart';

const allCategories = ['Show All', ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [adaptItems, setadaptItems] = useState(itemsAdapt);
  const [categories, setCategories] = useState(allCategories);

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
      <CartProvider>

        <div className="Container">
          <TopNav />

          <div className='Content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route path='/login'>

                <Login />

              </Route>
              <Route path='/profile'>

                <Account />

              </Route>
              <Route path='/about'>

                <Aboutus />

              </Route>


              <Route path='/faq'>

                <Faq />

              </Route>
              <Route path='/addproduct'>

                <AddProduct />

              </Route>
              <Route path='/fav'>

                <Favorite />

              </Route>
              <Route path='/shop'>
                <Categories filterItems={filterItems} categories={categories} />
              </Route>

              <Route path='/adopt'>

                <CategoriesAdapt items={adaptItems} />

              </Route>
              <Route path="/cart">
              <Cart />
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
      </CartProvider>

    </Router>





  );
}

export default App;
