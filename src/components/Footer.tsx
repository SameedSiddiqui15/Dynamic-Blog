export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white body-font">
      <div className="px-2 py-6 mx-auto xl:mx-20 flex items-center sm:flex-row flex-col">
        <a href="https://personal-portfolio-of-sameed.vercel.app" target="blank" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src="../images/myProfilePic.jpg" alt="Author Image" className="w-12 h-12 rounded-full object-cover border object-top" />
          <span className="ml-3 text-xl">Sameed Siddiqui</span>
        </a>
        <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Dynamic Blog —
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWPGckFzBwrnGLCclqsTxgNwGgMqFNDPjnFdtFNkVQPgSZqXRQrTzcHqdcdPHXwlXprpq" className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">Gmail</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.facebook.com/taha.siddiqui.334839/" target="blank" className="">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://github.com/SameedSiddiqui15" target="blank" className="ml-3 ">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.096.823 2.21v3.293c0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/maybe_sameed/?igsh=MWRrcWRpZ3Fwbm15bQ%3D%3D" target="blank" className="ml-3">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sameed-siddiqui-/" target="blank" className="ml-3 ">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
