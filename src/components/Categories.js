// Categories.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Menu from './menu'; // Import the Menu component

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/shop/categories');
        const categoriesData = response.data;
  
        // Add a "Show All" category to the list
        const showAllCategory = { _id: '', categoryName: 'Show All',categoryImg:'./images/category/show-all.jpg' };
        setCategories([showAllCategory, ...categoriesData]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/shop/');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    };

    fetchAllProducts();
  }, []);

  const filterItems = async (categoryName) => {
    console.log('Filtering items by category:', categoryName);
    setSelectedCategory(categoryName);
  
    try {
      let url;
      if (categoryName === 'Show All') {
        url = 'http://localhost:3000/shop/';
      } else {
        const encodedCategoryName = encodeURIComponent(categoryName);
        url = `http://localhost:3000/shop/category/${encodedCategoryName}`;
      }
  
      console.log('Request URL:', url);
  
      const response = await Axios.get(url);
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching items by category:', error);
      setMenuItems([]);
    }
  };

  
  



  return (
    <div className='container mx-auto p-4 sm:py-8 md:py-12 lg:py-16 xl:py-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4  my-3 py-3 px-1">
        <Splide
          options={{
            rewind: false,
            perPage: 3,
            perMove: 3,
            gap: 10,
            pagination: false,
            breakpoints: {
              623: {
                perPage: 1,
                perMove: 1,
              },
              935: {
                perPage: 2,
                perMove: 2,
              },
              1247: {
                perPage: 3,
                perMove: 3,
              },
            },
            focus: "center",
            arrows: true,
          }}
        >
          {categories.map((category, index) => (
            <SplideSlide key={index}>
            <div className={`flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${category.categoryName === selectedCategory ? 'border-2 border-blue-500' : ''}`}>
              <a href="#" onClick={() => filterItems(category._id)} className="block">
                <img
                  className="w-full rounded-t-lg h-80 object-cover"
                  src={category.categoryImg}
                  alt={category.categoryName}
                />
              </a>
              <div className="p-3">
                <h5 className="mb-2 text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-tight text-black">
                  {category.categoryName}
                </h5>
              </div>
            </div>
          </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Render the Menu component with filtered items */}
      <Menu items={menuItems} selectedCategory={selectedCategory} />
    </div>
  );
};

export default Categories;
