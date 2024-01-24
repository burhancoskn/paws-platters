import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = () => {
    const [sideCart, setsideCart] = useState(false)

    return (
        <div >

            <div>
                <div class="fixed inset-0  opacity-25"></div>
                <div class="fixed top-0 bottom-0 right-0 z-10 w-full max-w-xl overflow-y-scroll bg-white ">
                    <div class="p-6 bg-white md:pt-12 md:pb-6 md:px-12 ">
                        <div class="text-right">

                            <AiOutlineClose onClick={() => setsideCart(!sideCart)} size={25} className='absolute right-4 top-4 cursor-pointer' />

                        </div>
                        <div class="flex items-center mb-3">
                            <h2 class="text-3xl font-bold  ">Shopping Cart</h2>
                            <span
                                class="inline-flex items-center justify-center w-8 h-8 ml-4 text-base  custom-Color-btn rounded-full text-white">6</span>
                        </div>
                        <div class="block pb-2 mb-2 -mx-4 border-b border-gray-200  md:flex">
                            <div class="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                                <div class="flex w-full h-16 md:h-16 md:w-16">
                                    <img src="https://i.postimg.cc/pdcRLwSq/pexels-igor-ovsyannykov-205961.jpg" alt=""
                                        class="object-cover w-full h-16 rounded-md" />
                                </div>
                            </div>
                            <div class="w-full px-4 md:2/3">
                                <div class="flex justify-between">
                                    <div class="">
                                        <h2 class="mb-2 text-xl font-bold ">Product Name</h2>
                                        <p class="text-xs font-light text-gray-600  "> Quantity: 4</p>

                                    </div>
                                    <div>
                                        <p class="text-lg font-bold custom-Text-Color ">99.00€</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <AiOutlineClose onClick={() => setsideCart(!sideCart)} size={25} className=' cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block pb-2 mb-2 -mx-4 border-b border-gray-200  md:flex">
                            <div class="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                                <div class="flex w-full h-16 md:h-16 md:w-16">
                                    <img src="https://i.postimg.cc/x1dZ1XSV/pexels-k-bra-do-u-10154821.jpg" alt=""
                                        class="object-cover w-full h-16 rounded-md" />
                                </div>
                            </div>
                            <div class="w-full px-4 md:2/3">
                                <div class="flex justify-between">
                                    <div class="">
                                        <h2 class="mb-2 text-xl font-bold ">Product Name</h2>
                                        <p class=" text-xs font-light text-gray-600  "> Quantity: 4</p>

                                    </div>
                                    <div>
                                        <p class="text-lg font-bold custom-Text-Color ">99.00€</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <AiOutlineClose onClick={() => setsideCart(!sideCart)} size={25} className=' cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block pb-2 mb-2 -mx-4 border-b border-gray-200  md:flex">
                            <div class="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                                <div class="flex w-full h-16 md:h-16 md:w-16">
                                    <img src="https://i.postimg.cc/pdcRLwSq/pexels-igor-ovsyannykov-205961.jpg" alt=""
                                        class="object-cover w-full h-16 rounded-md" />
                                </div>
                            </div>
                            <div class="w-full px-4 md:2/3">
                                <div class="flex justify-between">
                                    <div class="">
                                        <h2 class="mb-2 text-xl font-bold ">Product Name</h2>
                                        <p class="text-xs font-light text-gray-600  "> Quantity: 4</p>

                                    </div>
                                    <div>
                                        <p class="text-lg font-bold custom-Text-Color ">99.00€</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <AiOutlineClose onClick={() => setsideCart(!sideCart)} size={25} className=' cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between text-base ">
                            <p>Subtotal</p>
                            <p className='custom-Text-Color font-bold'>297.00€</p>

                        </div>
                       
                    </div>
                    <div className='sticky top-[100vh] px-5'>
                            <p class="mt-4 text-sm text-gray-500 ">Shipping calculated at checkout period.</p>
                            <div class="flex items-center justify-center mt-6">
                                <button
                                    class="w-full py-2 text-lg font-medium custom-Color-btn border-0 rounded-md text-gray-50 ">Checkout</button>
                            </div>
                            <div class="flex items-center justify-center mt-6 ">
                                <p>or,
                                    <a class="pl-1 custom-Text-Color hover:underline no-underline">Continue Shopping
                                    </a>
                                </p>
                            </div>
                        </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Cart