import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const Menu = ({ selectedCategory }) => {
    const [items, setItems] = useState([]); // Use setItems to update the state
    const apiUrl= process.env.REACT_APP_API_URL;

    // Use the selectedCategory when fetching data
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
              // Use the selectedCategory to conditionally construct the URL
              const url = selectedCategory ? `${apiUrl}/shop/category/${selectedCategory}` : `${apiUrl}/shop/`;
          
              const response = await Axios.get(url);
              const data = response.data;
              setItems(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Fetch data when the component mounts or when selectedCategory changes
        fetchDataFromAPI();
      }, [selectedCategory]);
    return (
        <main className='container mx-auto'>
            <h2 className='pb-2 text-xl font-bold text-left'>Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-4'>
                {items.map((item, index) => {
                    const {
                        id,
                        img,
                        price,
                        desc,
                        subtitle,
                        title,
                        gift,
                        sale,
                        newProduct,
                        category,
                        brand,
                        categoryImg,
                    } = item;


                    const cardSize = index === 0 ? 'lg:col-span-2 xl:col-span-3' : 'sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1';

                    return (
                        <Link to={`/detail/${id}`} key={id} className='no-underline'>
                            <article
                                key={id}
                                id={id}
                                className={`p-3 bg-white rounded shadow dark:bg-gray-700 group relative ${cardSize}`}>
                                <div className='relative overflow-hidden mb-5'>
                                    <img
                                        className='object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110'
                                        src={img}
                                        alt=''
                                    />
                                    {newProduct === true && (
                                        <span className="absolute bottom-0 left-0 px-4 py-2 lg:px-2 lg:py-1 text-sm font-bold border-2 rounded-md custom-Color text-white">
                                            New
                                        </span>
                                    )}

                                    {sale === true && (
                                        <div className="w-32 h-8 absolute top-4 -left-8">
                                            <div className="h-full w-full custom-Color text-white text-center leading-8 font-semibold transform -rotate-45">
                                                SALE
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className='container'>
                                    <h3 className='mb-2 text-xl font-bold text-black title-description overflow-hidden'>{title}</h3>
                                </div>
                                <div className='container'>
                                    <p className='mb-2 text-xs font-thin text-gray-700 text-right title-description overflow-hidden'>{subtitle}</p>
                                </div>
                                <div className='container'>
                                    {gift ? (
                                        <div className='h-full w-auto text-left rounded-lg mx-2 py-1 leading-8 font-semibold'>
                                            <span className='custom-Color-200 text-black text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'>
                                                {gift}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className='text-gray-700 mb-2'>
                                            <span className='bg-orange-500 text-white text-xs font-medium mr-1 px-2 py-0.5 rounded-full'>
                                                No gift available. Follow us for updates!</span>
                                        </div>
                                    )}
                                </div>
                                <span className='my-4 text-xs font-semibold text-gray-400  overflow-hidden about-description'>
                                    {desc} <a className='text-center px-3' href='#'>
                                        Read More
                                    </a>
                                </span>

                                <div className='pl-2 flex items-end justify-end'>
                                    <span className='mt-1 pl-2 text-price text-md font-medium me-2 px-2.5 py-0.5 rounded dark:text-yellow-400 border border-yellow-300'>
                                        € {price}{' '}
                                    </span>
                                </div>

                            </article>
                        </Link>
                    );
                })}
            </div>
        </main >
    );
};

export default Menu;
