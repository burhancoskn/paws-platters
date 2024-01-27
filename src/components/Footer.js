import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='container'>
            <div className='m-auto py-0'>
                <div className='pt-16 grid lg:grid-cols3 gap-8 text-gray-300'>
                    <div>
                        <h1 className='w-full text-3xl font-bold custom-Text-Color'>Pet Foods!</h1>
                        <p className='text-black'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                    </div>
                    </div>
                    <div className='grid sm:grid-cols-3 lg:grid-cols-4 justify-between sm:item-center mt-6'>
                        <div>
                            <h6 className=' font-medium text-center custom-Text-Color'> Location</h6>
                            <ul className='text-black text-center'>
                                <li className='py-2 text-sm'>Vienna</li>
                                <li className='py-2 text-sm'>Salzburg</li>
                                <li className='py-2 text-sm'>Graz</li>
                                <li className='py-2 text-sm'>Berlin</li>
                                <li className='py-2 text-sm'>Hamburg</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-center custom-Text-Color'> Our Services
                            </h6>
                            <ul className='text-black text-center'>
                                <li className='py-2 text-sm'>Pet Insurance</li>
                                <li className='py-2 text-sm'>Pet surgeries</li>
                                <li className='py-2 text-sm'>Pet Adoption</li>
                                <li className='py-2 text-sm'>Dog Insurance</li>
                                <li className='py-2 text-sm'>Cat Insurance</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-medium text-center custom-Text-Color'> Quick Link </h6>
                            <ul className='text-black text-center'>
                                <a href='/about' className='no-underline text-black'><li className='py-2 text-sm'>About Us</li></a>
                                <li className='py-2 text-sm'>Privacy Policy</li>
                                <li className='py-2 text-sm'>Terms of Service</li>
                                <li className='py-2 text-sm'>Login info</li>
                                <li className='py-2 text-sm'>Knowledge Base</li>
                            </ul>
                        </div>
                        <div>
                            <img src='./images/web-logo.png' className='h-auto max-w-lg rounded-lg pb-2' />
                            <ul className='text-black text-center'>
                                <li className='py-2 text-sm'>Stephansdom 12, Vienna - Austria </li>
                                <li className='py-2 text-sm'>burhan.coskn@gmail.Com</li>
                                <li className='py-2 text-sm'>+555 0000 565</li>

                                <div className='flex  md:w-[75%] text-black my-6'>
                                    <FaFacebookSquare size={30} /> <span className='pl-2'></span>
                                    <FaInstagram size={30} /><span className='pl-2'></span>
                                    <FaGithubSquare size={30} /><span className='pl-1'></span>
                                </div>
                            </ul>
                        </div>

                    </div>
                    <div className='lg:col-span-2 flex justify-between mt-6 sticky top-[100vh]'>
                        <div className='flex justify-start items-center md:w-[75%] text-black my-6 static  bottom-0'>
                            <span class="text-sm text-gray-500 sm:text-center">© 2023 <a href="#" class="text-gray-900 hover:underline">Burhan Coskun</a>. All Rights Reserved.
                            </span>                    </div>

                    </div>
                
            </div>
        </div>
    )
}

export default Footer