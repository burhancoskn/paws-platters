import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsCartFill, BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaUserFriends, FaGoogleWallet, FaSignInAlt, FaSignOutAlt, FaCat } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import News from '../Pages/News'
import Login from '../Pages/Login'
import Cart from '../Pages/Sidebar-Pages/Cart'
const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
    const [sideCart, setsideCart] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='bg-white max-w-[1520] mx-auto flex justify-between items-center py-1 sticky top-0 z-10'>
            <div className='flex items-center'>
                <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer p-4'>
                    <AiOutlineMenu size={25} />

                </div>                                <a href="/" class="text-neutral-600 hover:text-neutral-800 ">

                <img src='./images/web-logo.png' className='h-auto sm:w-36 max-w-lg rounded-lg' /></a>
                <div className='hidden lg:flex items-center  rounded-full  text-[11px]'>
                    <nav>
                        <ul className='flex flex-row my-0 text-gray-900'>
                            <li className='text-xl  custom-Text-Color flex'>
                                <a href="/" class="text-neutral-600 hover:text-neutral-800 ">
                                    Home</a>
                            </li>  <li className='text-xl px-2 custom-Text-Color flex'>
                                <a href="/shop" class="text-neutral-600 hover:text-neutral-800 ">
                                    Shop</a>
                            </li>  <li className='text-xl px-2 custom-Text-Color flex'>
                                <a href="/adopt" class="text-neutral-600 hover:text-neutral-800 ">
                                    Adoption</a>
                            </li>  <li className='text-xl px-2 custom-Text-Color flex'>
                                <a href="/news" class="text-neutral-600 hover:text-neutral-800 ">
                                    News</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <div className='bg-gray-50 rounded-full flex items-center custom-border-orange px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} className='custom-Nav-Color' />
                <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search' />

            </div>

            <div className=' lg:flex items-center  rounded-full p-1 text-[11px]'>
                <div class="relative inline-flex w-fit">

                    <button onClick={() => setsideCart(!sideCart)} class="custom-Color m-2 inline-block rounded  border-0  md:flex items-center py-2 rounded-full text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        <BsFillCartFill size={14} />
                        <span className='px-1 hidden lg:flex items-center  rounded-full p-1 text-[11px]'>Cart </span>
                    </button>


                </div>

                <button onClick={handleShow} className='custom-Color m-2 inline-block rounded  border-0  md:flex items-center py-2 rounded-full text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] '>
                    <FaSignInAlt size={14} /> <span className=' loginicon px-1 hidden lg:flex items-center  rounded-full p-1 text-[11px]'>Sign In</span>
                </button>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton style={{ backgroundColor: "transparent" }} className='border-0'>

                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "transparent !important;" }}>

                        <Login />
                    </Modal.Body>

                </Modal>

            </div>

            {
                sideNav ? (
                    <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'> </div>

                ) : ("")
            }
            <div className={sideCart ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-200' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'}>

                <AiOutlineClose onClick={() => setsideCart(!sideCart)} size={25} className='absolute right-4 top-4 cursor-pointer' />


            </div>

            <div className={sideNav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'}>
                <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl p-4'> Pets <span className='custom-Text-Color font-bold'> Eats</span> </h2>
                <div
                    class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16  rounded-lg text-gray-900">

                    <div class="mx-auto w-32 h-32 relative -mt-16 custom-border-white rounded-full overflow-hidden">
                        <img class="object-cover object-center h-32 w-full" src='./images/person.png' alt='Person-pic' />
                    </div>
                    <div class="text-center mt-2">
                    <a href="/profile" class="custom-Nav-Color no-underline">

                        <h2 class="font-semibold">Burhan Coskun</h2>
                        </a>
                        <p class="text-gray-500">A Cat Lover! </p>
                    </div>
                </div>

                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex'>
                            <BsPerson size={25} className='mr-4 custom-Nav-Color  rounded-none' />
                            <a href="/profile" class="text-neutral-600 hover:text-neutral-800 no-underline">

                            My Account</a>
                        </li>  <li className='text-xl py-4 flex'>
                            <FaCat size={25} className='mr-4 custom-Nav-Color  rounded-none' />
                            <a href="/adapt2" class="text-neutral-600 hover:text-neutral-800 no-underline">

                            Adapt a Pet</a>
                        </li>  <li className='text-xl py-4 flex'>
                            <MdOutlineFavorite size={25} className='mr-4 custom-Nav-Color  rounded-none' />
                            <a href="/fav" class="text-neutral-600 hover:text-neutral-800 no-underline">

                            Favourite</a>
                        </li>  <li className='text-xl py-4 flex'>
                            <FaGoogleWallet size={25} className='mr-4 custom-Nav-Color  rounded-none' />
                            <a href="/wallet" class="text-neutral-600 hover:text-neutral-800 no-underline">

                            My Orders</a>
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaUserFriends size={25} className='mr-4 custom-Nav-Color  rounded-none' />
                            Share
                        </li> <li className='text-xl py-4 flex'>
                            <MdHelp size={25} className='mr-4 custom-Nav-Color  rounded-none' />
                            <a href="/help" class="text-neutral-600 hover:text-neutral-800 no-underline">

                            Help        </a>                </li>
                    </ul>
                </nav>
            </div>



        </div>

    )
}

export default TopNav