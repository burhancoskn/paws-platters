// src/AddProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        gift: '',
        subtitle: '',
        sale: false,
        newProduct: false,
        category: '',
        brand: '',
        price: 0,
        img: '',
        desc: '',
    });
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleRadioChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value === 'true' });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/menu`, formData);
            console.log('Product added successfully:', response.data);
            // You can redirect to another page or update state as needed
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };

    return (

        <section className='container'>

            <div class="justify-center p-0 sm:p-12">
                <div class="mx-auto max-w-2xl px-6 py-12 mt-7 bg-white border-0 shadow-lg sm:rounded-3xl">

                    <h1 class="text-2xl font-bold mb-8 shadow-sm rounded-xl p-4 text-center custom-Color text-white">Add Product</h1>
                    <div class="text-center mb-4">
                        <img
                            class="mx-auto w-48"
                            src="../logo512.png"
                            alt="logo" />
                    </div>
                    <form id="form" onSubmit={handleSubmit}>
                        <div class="relative z-0 w-full border-b rounded-xl shadow-sm p-2 mb-2">
                            <input
                                type="text"
                                name="title"
                                placeholder=" "
                                required
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="Title" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Title </label>
                            <span class="text-sm text-red-600 hidden" id="error">Title is required</span>
                        </div>
                        <div class="relative z-0 w-full border-b rounded-xl shadow-sm p-2 mb-2">
                            <label for="subtitle" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Subtitle</label>
                            <input
                                type="text"
                                name="subtitle"
                                placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />

                        </div>
                        <div class="relative z-0 w-full border-b rounded-xl shadow-sm p-2 mb-2">
                            <input
                                type="text"
                                name="brand"
                                placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="brand" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Brand</label>
                        </div>
                        <div class="relative z-0 w-full border-b rounded-xl shadow-sm p-2 mb-2">
                            <input
                                type="text"
                                name="desc"
                                placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="desc" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Description</label>
                        </div>
                        <div class="relative z-0 w-full border-b rounded-xl shadow-sm p-2 mb-2">
                            <input
                                type="text"
                                name="gift"
                                placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="gift" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Gift</label>
                        </div>


                        <fieldset class="relative z-0 w-full p-px mt-3  rounded-xl shadow-sm mb-5">
                            <legend class="absolute  transform scale-25 -top-5 text-center pb-2 origin-0">Sale</legend>
                            <div class="block pt-3 pb-2 text-center space-x-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="sale"
                                        value="true"
                                        onChange={handleRadioChange}
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Ja
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="sale"
                                        value="false"
                                        onChange={handleRadioChange}
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Nein
                                </label>

                            </div>
                        </fieldset>
                        <fieldset class="relative z-0 w-full p-px  rounded-xl shadow-sm mb-5">
                            <legend class="absolute  transform scale-25 -top-5 text-center pb-2 origin-0">New Product</legend>
                            <div class="block pt-3 pb-2 text-center space-x-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="newProduct"
                                        value="true"
                                        onChange={handleRadioChange}
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Ja
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="newProduct"
                                        value="false"
                                        onChange={handleRadioChange}
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Nein
                                </label>

                            </div>
                        </fieldset>
                        <fieldset class="relative z-0 w-full text-center p-px mb-3  rounded-xl shadow-sm border-b">
                            <legend class="absolute  transform scale-25 -top-5 text-center pb-2 origin-0">Categories</legend>
                            <div class="block pt-3 pb-2 space-x-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="65a8266a6a35abd8977b07b7"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Wet Cat Food
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="65a826826a35abd8977b07b9"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Wet Dog Food
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="65a826996a35abd8977b07bb"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Dog Snacks
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="65a826ad6a35abd8977b07bd"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Cat Snacks
                                </label>
                            </div>
                            <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                        </fieldset>



                        <div class="flex flex-row space-x-4 border-b  rounded-xl shadow-sm p-3">
                            <div class="relative z-0 w-4/5 mb-2">
                                <input
                                    type="text"
                                    name="img"
                                    placeholder=" "
                                    onclick="this.setAttribute('type', 'date');"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label for="img" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Image</label>
                            </div>
                            <div class="relative z-0 w-1/5 mb-2 ">
                                <input
                                    type="number"
                                    name="price"
                                    placeholder=" "
                                    onclick="this.setAttribute('type', 'date');"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label for="price" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500">Price €</label>
                            </div>
                        </div>


                        <button
                            id="button"
                            type="submit"
                            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear custom-Color border-0 rounded-lg shadow outline-none  hover:shadow-lg focus:outline-none"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>

        </section>

    );
};

export default AddProductForm;
