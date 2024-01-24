// DetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DetailPage = ({ items }) => {
    const { itemId } = useParams();
    const selectedItem = items.find(item => item.id.toString() === itemId);

    if (!selectedItem) {
        console.log("Item not found");
        return <div>Item not found</div>;
    }

    const { img, title, brand, desc, price } = selectedItem;
    const imagePath = `${process.env.PUBLIC_URL}/${img}`;

    return (
        <div className="container mx-auto">


            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap justify-end">
                        <img alt="ecommerce" class="lg:w-1/2 w-full object-contain object-center rounded border border-gray-200" src={imagePath} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{brand}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>

                            <p class="leading-relaxed">{desc}</p>
                            <div class="flex justify-end mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                <div class="flex ml-6 items-center">
                                    <span class="mr-3 items-end text-right">Count</span>
                                    <div class="relative">
                                        <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                            <span class="  pl-2 text-price text-2xl font-medium me-2 px-2.5 py-0.5 rounded  dark:text-yellow-400 border border-yellow-300 ">€ {price} </span>

                                
                            <button class="flex  ml-auto text-white custom-Color border-0 py-2 px-6 focus:outline-none border-yellow-600 rounded">Add Cart</button>

                                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border inline-flex items-center text-center justify-center custom-Text-Color ml-4">
                                    <MdOutlineFavorite size={25} className=' custom-Nav-Color  rounded-none' />
                                </button>
                            </div>
                        </div>
                        <Link to={`/shop`}  class="w-full my-4 flex items-center justify-end w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 custom-Color border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go back</span>
                </Link>
                    </div>
                    
                </div>
               
            </section>
        </div>
    );
};


export default DetailPage;
