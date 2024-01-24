import React from 'react'

const Account = () => {
  return (
    <div className='container'>
      <div class="w-full h-[250px]">
        <img src="./images/banner-bg.png" class="w-full h-full rounded-tl-lg rounded-tr-lg" />
      </div>
      <div class="flex flex-col items-center -mt-20">
        <img src="./images/person.png" class="object-cover custom-border-orange object-center h-40 w-40 border-4 border-white rounded-full" />
        <div class="flex items-center space-x-2 mt-2">
          <p class="text-2xl">Burhan Coskun</p>
          
        </div>
        <p class="text-gray-700">A Cat Lover! </p>
        <p class="text-sm text-gray-500">Vienna, Austria</p>
      </div>
      <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
        <div class="w-full flex flex-col ">
          <div class="flex-1 w-full">
            <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul class="mt-2 text-gray-700">
              <li class="flex py-2 items-center place-items-center">
                <label class="font-bold w-24">Full name:</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              <li class="flex border-b py-2  place-items-center">
                <label class="font-bold w-24">Birthday:</label>
                <input class="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"01.06.1994"}/>
              </li>
              <li class="flex border-b py-2 place-items-center">
                <label class="font-bold w-24">Joined:</label>
                <input class="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"01.11.2023"}/>
              </li>
              <li class="flex border-b py-2 place-items-center">
                <label class="font-bold w-24">Phone:</label>
                <input class="text-gray-700 bg-transparent p-2 w-full focus:outline-none"value={"+436605136336"} />
              </li>
              <li class="flex border-b py-2 place-items-center">
                <label class="font-bold w-24">Email:</label>
                <span class="text-gray-700">amandaross@example.com</span>
              </li>
              <li class="flex border-b py-2 place-items-center">
                <label class="font-bold w-24">Location:</label>
                <span class="text-gray-700">Vienna</span>
              </li>
              <li class="flex border-b py-2 place-items-center">
                <label class="font-bold w-24">Languages:</label>
                <span class="text-gray-700">English, Spanish</span>
              </li>
              
            </ul>
            <h4 class="text-xl text-gray-900 font-bold">Pet Info</h4>
            <ul class="mt-2 text-gray-700">
              <li class="flex py-2 items-center place-items-center">
                <label class="font-bold w-24">Petname:</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              <li class="flex border-b py-2 items-center place-items-center">
                <label class="font-bold w-24">Pet Gender:</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              <li class="flex border-b py-2 items-center place-items-center">
                <label class="font-bold w-24">Birthday:</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              <li class="flex border-b py-2 items-center place-items-center">
                <label class="font-bold w-24"> Vaccinated</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              <li class="flex border-b py-2 items-center place-items-center">
                <label class="font-bold w-24"> castrated</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              <li class="flex border-b py-2 items-center place-items-center">
                <label class="font-bold w-24"> Fav Food</label>
                <input className="text-gray-700 bg-transparent p-2 w-full focus:outline-none" value={"Burhan Coskun"}/>
              </li>
              </ul>

          </div>

        </div>

      </div>
      <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
        <h4 class="text-xl text-gray-900 font-bold">Activity log</h4>
        <div class="relative px-4">
          <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>


          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-sm">Profile informations changed.</p>
              <p class="text-xs text-gray-500">3 min ago</p>
            </div>
          </div>

          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-sm">
                Connected with <a href="#" class="text-blue-600 font-bold">Colby Covington</a>.</p>
              <p class="text-xs text-gray-500">15 min ago</p>
            </div>
          </div>

          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-sm">Invoice <a href="#" class="text-blue-600 font-bold">#4563</a> was created.</p>
              <p class="text-xs text-gray-500">57 min ago</p>
            </div>
          </div>

          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-sm">
                Message received from <a href="#" class="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
              <p class="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>

          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-sm">New order received <a href="#" class="text-blue-600 font-bold">#OR9653</a>.</p>
              <p class="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>

          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/12 z-10">
              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
            </div>
            <div class="w-11/12">
              <p class="text-sm">
                Message received from <a href="#" class="text-blue-600 font-bold">Jane Stillman</a>.</p>
              <p class="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Account