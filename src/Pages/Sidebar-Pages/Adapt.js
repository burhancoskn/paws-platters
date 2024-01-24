import React from 'react'

const Adapt = () => {
  return (
    <div className='container'>
          <section class="flex items-center py-20 bg-gray-100 lg:h-screen ">
        <div class="px-4 mx-auto max-w-7xl">
            <div class="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                
                <div class="w-full">
                    <div class="p-4 text-center bg-white rounded shadow">
                        <div class="block mb-2" href="#">
                            <div class="relative overflow-hidden">
                                <div class="mb-5 overflow-hidden">
                                    <img class="object-cover w-full mx-auto transition-all rounded h-72 hover:scale-110"
                                        src="https://i.postimg.cc/x8LtrkfV/kenny-eliason-HIz-Gn9-FZDFU-unsplash.jpg"
                                        alt=""/>
                                </div>
                            </div>
                            <a href="#">
                                <h3 class="mb-2 text-xl font-bold "> Nikon Lenses </h3>
                            </a>
                            <p class="text-lg font-bold text-black  ">
                                <span>$29.89</span>
                            </p>

                            <button
                                class="flex items-center justify-center mx-auto mt-4 font-bold text-center text-blue-500  group">
                                Add to Cart
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="ml-2 transition-all group-hover:translate-x-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Adapt