import React, { useState } from 'react'

const Login = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <>

      {
        isShown ? <section class=" h-full  " id='signin' >


          <div class="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 " >
            <div class="mx-auto max-w-lg">
              <div class="text-center">
                <img
                  class="mx-auto w-48"
                  src="../logo512.png"
                  alt="logo" />

              </div>

              <form
                action=""
                class="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
              >
                <p class="text-center text-lg font-medium">Sign in to your account</p>

                <div>
                  <label for="email" class="sr-only">Email</label>

                  <div class="relative">
                    <input
                      type="email"
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label for="password" class="sr-only">Password</label>

                  <div class="relative">
                    <input
                      type="password"
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  class="block w-full rounded-lg custom-Color border-0 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
                {//<!--Register button-->
                }
                <div class="flex items-center justify-end pl-6">
                  <p class="text-center text-sm text-gray-500">
                    No account?
                    <a onClick={handleClick} class="pl-2 custom-Text-Color underline" >Sign up</a>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </section>
         : 
        <section class="bg-transparent" id="signup">
          <div class="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
            <form class="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8">
              <div class="flex justify-center mx-auto">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="../logo512.png"
                    alt="logo" />

                </div>
              </div>



              <div class="relative flex items-center mt-8">
                <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>

                <input type="text" class="block w-full py-3  border rounded-lg px-11 focus:outline-none" placeholder="Username" />

              </div>

              <label for="dropzone-file" class="flex items-center px-3 py-2 mx-auto mt-6 text-center  border-1 border-dashed rounded-lg cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>

                <h4 class="mx-3 ">Profile Photo</h4>

                <input id="dropzone-file" type="file" class="hidden" />
              </label>

              <div class="relative flex items-center mt-6">
                <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>

                <input type="email" class="block w-full py-3   border rounded-lg px-11 focus:outline-none" placeholder="Email address" />
              </div>

              <div class="relative flex items-center mt-4">
                <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>

                <input type="password" class="block w-full px-10 py-3  border rounded-lg focus:outline-none" placeholder="Password" />
              </div>

              <div class="relative flex items-center mt-4">
                <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>

                <input type="password" class="block w-full px-10 py-3  border rounded-lg focus:outline-none" placeholder="Confirm Password" />
              </div>

              <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform custom-Color rounded-lg border-0">
                  Sign Up
                </button>

                <div class="mt-6 text-center ">
                  <a onClick={handleClick} href="#" class="text-sm custom-Text-Color hover:underline">
                    Already have an account?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      }

    </>
  )
}

export default Login

{
  /*




<div class="text-center">
                      <img
                        class="mx-auto w-48"
                        src="./logo512.png"
                        alt="logo" />

                    </div>




<div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="border-2 peer block min-h-[auto] w-full  rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username" />
                        <label
                          for="exampleFormControlInput1"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] custom-Text-Color transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                        >Username
                        </label>
                      </div>

  <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          class="border-2 peer block min-h-[auto] w-full  rounded  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password" />
                        <label
                          for="exampleFormControlInput11"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] custom-Text-Color transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                        >Password
                        </label>
                      </div>

<div class="mb-12 pb-1 pt-1 text-center">
                    <button
                      class="mb-3 inline-block w-full border-0 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal custom-Color-btn shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      >
                      Log in
                    </button>

                   { //<!--Forgot password link-->
                   }
                    <a href="#!" className=''>Forgot password?</a>
                  </div>

                      {//<!--Register button-->
                      }
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      class="inline-block rounded border-none custom-Color-btn px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 "
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Register
                    </button>
                  </div>

  */
}