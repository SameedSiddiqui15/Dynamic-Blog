import React from 'react'

export default function AuthorCard() {
  return (
    <div className='container bg-white shadow-lg p-2 mt-12 rounded-lg'>
      <div className="flex items-center animation-fadeIn">
        <img src="../images/myProfilePic.jpg" alt="Author Image" className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500 object-top" />
        <div>
          <h3 className="text-xl font-bold ">Muhammad Sameed</h3>
          <p className="text-slate-500">Web Designer | Programmer</p>
        </div>

      </div>
      <p className="mt-4 text-black leading-relaxed">I am a first-year student passionate about learning web solutions. As a beginner in web development, I have a keen interest in front-end, and I&rsquo;m continuously exploring tools.</p>
      <div className="mt-4 flex space-x-2">
        <a href="https://www.linkedin.com/in/sameed-siddiqui-/" target="blank" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700transition duration-300">
        Linked In
        </a>
        <a href="https://github.com/SameedSiddiqui15" target="blank" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700transition duration-300">
        Github
        </a>
        <a href="https://www.instagram.com/maybe_sameed/?igsh=MWRrcWRpZ3Fwbm15bQ%3D%3D" target="blank" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700transition duration-300">
        Instagram
        </a>
      </div>
    </div>
  )
}
