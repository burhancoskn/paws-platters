import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { BsCheck, BsX, BsPinMap } from 'react-icons/bs'
import { FaShieldCat, FaShieldDog, FaPaw } from 'react-icons/fa6'
const CategoriesAdapt = () => {
    const [items, setItems] = useState([]); // Use setItems to update the state
    const [selectedCategory, setSelectedCategory] = useState(null);
   const apiUrl= process.env.REACT_APP_API_URL;
  

    // Use the selectedCategory when fetching data
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                // Use the selectedCategory to conditionally construct the URL
              
                const url = selectedCategory ? `${apiUrl}/adapt/types/${selectedCategory}` :`${apiUrl}/adapt`;

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
    const handleCategoryClick = (category) => {
        setSelectedCategory(category === 'all' ? null : category);
    };


    return (
        <>

            <div>
                <div class="bannerFondo custom-Color	bg-left-top bg-auto bg-repeat-x" >
                </div>

                <div class="-mt-40 ">
                    <div class="w-full text-center">
                        <p class="text-sm tracking-widest text-black">Browse pets from our network </p>
                        <h1 class="font-bold text-5xl text-black">
                            Find your new best friend
                        </h1>
                    </div>
                    <div className='container mb-16'>
                        <div class="grid grid-cols-1 gap-1 sm:grid-cols-7  ">

                            <div >
                            </div>
                            <div >
                            </div>
                            <div class="p-4 sm:p-10 text-center cursor-pointer">
                                <div class="py-1 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                                    <div
                                        onClick={() => handleCategoryClick('all')}
                                        class="flex flex-col justify-center items-center">
                                        <i class="fa fa-head-side-mask"></i>
                                        <div class="p-2">
                                            <span
                                                className={`custom-Nav-Color cursor-pointer ${selectedCategory === 'all' ? 'font-bold' : ''}`}
                                            >
                                                Show All
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 sm:p-10 text-center cursor-pointer">
                                <div
                                    onClick={() => handleCategoryClick('cat')}
                                    class="py-1 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                                    <div class="flex flex-col justify-center items-center">
                                        <FaShieldCat size={64} className='custom-Nav-Color'
                                        />

                                        <div class="p-2 ">

                                            <div class="font-bold text-xl ">Cats</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 sm:p-10 text-center cursor-pointer ">
                                <div class=" max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500">
                                    <div
                                        onClick={() => handleCategoryClick('dog')} class="flex flex-col justify-center items-center">
                                        <i class="fa fa-head-side-mask" ></i>
                                        <div class="p-2">
                                            <FaShieldDog size={64} className='custom-Nav-Color'
                                            />

                                            <div class="font-bold text-xl mb-2">Dogs</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 sm:p-10 text-center cursor-pointer ">
                                <div class=" max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500">
                                    <div
                                        onClick={() => handleCategoryClick('others')}
                                        class="flex flex-col justify-center items-center">
                                        <i class="fa fa-head-side-mask" ></i>
                                        <div class="p-2">
                                            <FaPaw size={64} className='custom-Nav-Color'

                                            />

                                            <div class="font-bold text-xl mb-2">Others</div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <main className='container'>
                <h2 className='pb-2 text-xl font-bold text-left'>Adopt a Friend</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4'>
                    {
                        items.map((item) => {

                            const { id, name, img, types, about, year, sex, color, breed, coatLength, zip, city, adres, vaccinated, fee } = item;
                            return (
                                <article key={id} id={id}>
                                    <div className="p-8 bg-white rounded-lg shadow-md dark:bg-gray-700 group">
                                        <div class="block mb-2" href="#">
                                        <div className='container'>
                                                    <p class="mb-2 text-xl font-bold text-black "> {types}  </p>


                                            </div>
                                            <div class="relative overflow-hidden">
                                                <div class="mb-5 overflow-hidden">
                                                    <img class="object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110"
                                                        src={img}
                                                        alt="" />





                                                </div>



                                            </div>
                                            <div className='container flex flex-row'>
                                                <div
                                                    className="h-full w-auto text-left  rounded-lg  py-1 leading-8">
                                                    <span class="custom-Color-200 text-black text-xs font-medium mr-1 px-2.5 py-0.5 rounded-full ">{breed}</span>

                                                </div>
                                                <div
                                                    className="h-full w-auto text-left  rounded-lg  py-1 leading-8">
                                                    <span class="custom-Color-200 text-black text-xs font-medium mr-1 px-2.5 py-0.5 rounded-full ">{sex}</span>

                                                </div>

                                                <div
                                                    className="h-full w-auto text-left  rounded-lg  py-1 leading-8">
                                                    <span class="custom-Color-200 text-black text-xs font-medium mr-1 px-2.5 py-0.5 rounded-full ">{color}</span>

                                                </div>

                                            </div>
                                            <div className='container'>
                                                    <p class="mb-2 text-xl font-bold text-black "> {name}  <span className='text-sm font-light '>{year} year's old</span> </p>


                                            </div>
                                            <div className='container'>

                                                <span className="about-description mb-4 mt-2 text-xs font-semibold text-gray-400 overflow-hidden">
                                                    {about} </span>
                                                <p class="mt-4 text-lg font-bold flex items-end justify-end ">
                                                    <span className='text-xs font-light'>Adoption Fee: <span className='text-lg font-medium'> {fee}€</span></span>

                                                </p>
                                            </div>
                                            <div className='container'>
                                                <div className='flex flex-row justify-start items-start'>

                                                    {
                                                        vaccinated === true ? <span className='flex flex-row text-green-700 text-xs'> <BsCheck size={20} className='pr-2' />  Vaccinated </span>
                                                            : <span className='flex flex-row text-red-800 text-xs'> <BsX size={20} className='pr-2' /> Not Vaccinated  </span>
                                                    }



                                                </div>
                                                <span className='flex flex-row text-center text-xs my-1 '><BsPinMap size={20} className='pr-2' />  {adres}, {zip} {city}</span>
                                                <div className='flex flex-1 justify-end justify-items-end items-end'>
                                                    <button class="text-sm text-white transition-all custom-Color rounded-r-none border-0 rounded-t-xl">
                                                        View More
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </article >
                            )
                        })


                    }
                </div >
            </main >
        </>
    )
};

export default CategoriesAdapt




