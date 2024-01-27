import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import items from '../components/Data'



const Home = ({ filterItems, categories }) => {
    const allCategories = [...new Set(items.map((item) => item.category))];

    const allCategoriesImg = [...new Set(items.map((item) => item.categoryImg))];
    const [categoriess, setCategories] = useState(allCategories);
    console.log("bbb ", allCategoriesImg);

    return (


        <div className='banner_bg_Home2'>
            <div class="pt-24">
                <div class="container  px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                    <div class="flex flex-col w-full md:w-2/5 justify-center items-end text-center md:text-right">

                    </div>
                    <div class="w-full md:w-3/5 py-6 text-center">

                        <h1 class="my-4 text-5xl  text-white  font-bold leading-tight">
                            Nourishing Paws, Enriching Lives
                        </h1>
                        <p class=" text-white text-xl mb-8">
                            At Paws & Platters, we're passionate about providing the best nutrition for your pets. Our premium food selections are crafted to nourish their bodies and enrich their lives.
                        </p>
                        <button class="mx-auto lg:mx-0 hover:underline bg-white border-0 text-gray-800 font-bold rounded-full  py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Shop Now
                        </button>
                    </div>

                </div>
            </div>
            <div class="relative -mt-12 lg:-mt-24 ">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                            <path
                                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                opacity="0.100000001"
                            ></path>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path
                                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
            <section class="bg-white border-b py-8">
                <div class="container max-w-5xl mx-auto m-8">
                    <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Find Your Furry Friend: Pet Adoption Made Easy
                    </h2>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div class="flex flex-wrap items-center justify-center">
                        <div class="w-5/6 sm:w-1/2 p-6">
                            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                                Discover Pet Adoption
                            </h3>
                            <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900  first-letter:mr-3 first-letter:float-left">
                                Looking for a furry friend? Your search ends here! Paws & Platters is your go-to destination for pet adoption.
                                We connect loving families with adorable pets in need of homes. Explore our listings, meet the pets, and find your perfect companion today!
                            </p>
                        </div>
                        <div class="w-full sm:w-1/2 p-4 flex items-center justify-center">
                            <img class="h-96 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 items-center" src="./images/adopt.png" alt="..\public\images\adopt5.png" />

                        </div>
                    </div>
                    <div class="flex flex-wrap flex-col-reverse sm:flex-row items-center justify-center">
                        <div class="w-full sm:w-1/2 flex items-center justify-center p-4">
                            <img class="h-96 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="./images/adopt2.png" alt="image description" />

                        </div>
                        <div class="w-full sm:w-1/2 flex items-center justify-center p-4">
                            <div class="align-middle">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-8">
                                    Adopting Made Simple
                                </h3>
                                <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900  first-letter:mr-3 first-letter:float-left">
                                    Ready to adopt? We make it easy! At Paws & Platters, the adoption process is straightforward.
                                    Browse pets, meet your match, complete paperwork, and bring your new friend home. Start your journey to a lifetime of love now.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='shop  border-b'>
                <div className='container'>
                    <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Our Pets Food
                    </h2>

                    <Splide options={{
                        rewind: false,
                        perPage: 3,
                        perMove: 3,
                        gap: 10,
                        padding: "3rem",
                        pagination: false,
                        breakpoints: {
                            623: {
                                perPage: 1,
                                perMove: 1
                            },
                            935: {
                                perPage: 2,
                                perMove: 2
                            },
                            1247: {
                                perPage: 3,
                                perMove: 3
                            }
                        }, arrows: false
                    }}>

                        {

                            categoriess.map((category, index) => {
                                {
                                    console.log(allCategoriesImg[index])
                                }
                                return (
                                    <>
                                        <SplideSlide>
                                            <div class="grid-cols-1 py-4 ">
                                                <div
                                                    class="mx-2 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                                    <a href="/shop">
                                                        <img
                                                            class="w-full rounded-t-lg h-80"
                                                            src={allCategoriesImg[index]}
                                                            alt={allCategoriesImg[index]} />
                                                    </a>
                                                    <div class="p-6">
                                                        <h5
                                                            class="mb-2 text-xl font-medium leading-tight text-black ">
                                                            {category}
                                                        </h5>

                                                    </div>
                                                </div>
                                            </div>

                                        </SplideSlide>


                                    </>
                                )
                            })
                        }

                    </Splide>

                </div>
            </section>

            <section class="bg-white border-b py-8">
                <div class="container mx-auto flex flex-wrap pt-4 mb-12">
                    <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Services
                    </h2>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto custom-Color w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <img
                                    class="w-full rounded-t-lg h-80"
                                    src="./images/banner.png"
                                    alt="tit" />
                                <div class="w-full font-bold text-xl text-gray-800 px-6 my-3">
                                    High quality, low prices
                                </div>
                                <p class="text-gray-800 text-base px-6">
                                    Keep your pet happy and healthy with great prices on the best products.
                                </p>
                            </a>
                        </div>

                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <img
                                    class="w-full rounded-t-lg h-80"
                                    src="./images/banner13.png"
                                    alt="tit" />
                                <div class="w-full font-bold text-xl text-gray-800 px-6 my-3">
                                    Free delivery over $35
                                </div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Your pet doesn’t have to wait. Get everything delivered right to your door with fast, 1-3 day delivery.
                                </p>
                            </a>
                        </div>

                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <img
                                    class="w-full rounded-t-lg h-80"
                                    src="./images/banner11.png"
                                    alt="tit" />
                                <div class="w-full font-bold text-xl text-gray-800 px-6 my-3">
                                    Hassle-free returns
                                </div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    If an item doesn't work out, just let us know. We'll take care of it.
                                </p>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section class="text-neutral-700 border-b container p-4">
                <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl my-5">
                    <h3 class="mb-6 text-3xl font-bold">What Our Happy Customers Are Saying</h3>

                </div>

                <div class="grid gap-6 text-center md:grid-cols-3">
                    <div>
                        <div
                            class="block rounded-lg bg-white shadow-lg dark:shadow-black/30">
                            <div class="h-28 overflow-hidden rounded-t-lg custom-Color"></div>
                            <div
                                class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 custom-border-orange bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                            </div>
                            <div class="p-6">
                                <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                                <hr />
                                <p class="mt-4 text-left">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        class="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Adopting our beloved fur baby through Paws & Platters was an absolute joy! The process was seamless, and the team was incredibly supportive. Our little pup, Max, has brought immeasurable happiness into our lives. Thank you for connecting us with our perfect match!
                                </p>
                            </div>
                            <div className='p-3'>
                                <ul class="mb-0 flex items-center justify-center">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            class="h-5 w-5 text-yellow-500"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div class="h-28 overflow-hidden rounded-t-lg custom-Color"></div>
                            <div
                                class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 custom-border-orange bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                            </div>
                            <div class="p-6">
                                <h4 class="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                                <hr />
                                <p class="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        class="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    We can't thank Paws & Platters enough for helping us find our sweet kitty, Luna. The care and dedication they showed throughout the adoption process were remarkable. Luna has filled our home with laughter and love, and we are forever grateful for this wonderful addition to our family.
                                </p>
                            </div>
                            <div className='p-3'>
                                <ul class="mb-0 flex items-center justify-center">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                            <div class="h-28 overflow-hidden rounded-t-lg custom-Color"></div>
                            <div
                                class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 custom-border-orange bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                <img
                                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                            </div>
                            <div class="p-6">
                                <h4 class="mb-4 text-2xl font-semibold">John Smith</h4>
                                <hr />
                                <p class="mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        class="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    Not only did Paws & Platters help us find our furry family member, but they also introduced us to their exceptional pet food options. We've been feeding our beloved dog. We're grateful for their commitment to not only finding loving homes for pets but also ensuring their well-being.
                                </p>
                            </div>
                            <div className='p-3'>
                                <ul class="mb-0 flex items-center justify-center">
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="h-5 w-5 text-yellow-500">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='banner_bg_Home3 border-b'>
                <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                            <g class="wave" fill="#f8fafc">
                                <path
                                    d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
                                ></path>
                            </g>
                            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                    <path
                                        d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                                        opacity="0.100000001"
                                    ></path>
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>


                <section class="container  mx-auto text-center py-6 ">
                    <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        Call to Action
                    </h2>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <h3 class="my-4 text-3xl leading-tight">
                        Main Hero Message to sell yourself!
                    </h3>
                    <button class="mx-auto lg:mx-0 hover:underline bg-white border-0 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Action!
                    </button>

                </section>
                
            </div>
        </div>
    )
}

export default Home