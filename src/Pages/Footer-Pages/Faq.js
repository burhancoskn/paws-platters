import React from 'react'

const Faq = () => {
  return (
    <section class="bg-white ">
  <ul class="max-w-2xl mx-auto mt-20 divide-y  shadow shadow-blue-600 rounded-xl">
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>What is "Paws & Platters"?
</span>
            </summary>

            <article class="px-4 pb-4">
                <p>"Paws & Platters" is your one-stop destination for high-quality pet food and adoption services. We offer a wide range of cat, dog, and other pet foods to cater to the nutritional needs of your furry friends.
                   Additionally, we provide a platform for pet adoption, connecting loving families with adorable pets in need of a home.
                </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>Can I use pet food and adoption services for multiple projects?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Absolutely! "Paws & Platters" products, including our design and code packages, can be utilized for an unlimited number of projects.
                 Whether it's for personal use, a SaaS application, or a client's website, as long as your project doesn't directly compete with "Paws & Platters," you're good to go. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>How does support work?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Our dedicated support team consists of the very individuals who worked on the "Paws & Platters" project. Feel free to reach out with any questions or concerns, and we'll provide assistance promptly. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>What does "lifetime access" exactly mean?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                When you purchase from "Paws & Platters," the term "lifetime access" ensures that you have ongoing access to all future updates and improvements we make to our products. This includes design, code, and any other features outlined in our roadmap, without any additional charges. </p>
            </article>
        </details>
    </li>

</ul>
</section>
  )
}

export default Faq