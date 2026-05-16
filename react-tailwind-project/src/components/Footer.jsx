import { footerLinks } from "../data/footerLinks"
import logo from "../assets/logo.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      {/* up */}
      <div className="hidden md:flex gap-5 py-10 flex-row justify-between px-20">
        {/* left side */}
        <div className="py-4 flex flex-col justify-start max-w-80">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="w-5 h-5 sm:w-7 sm:h-7"/>
            <span className="text-sm sm:text-base font-medium">       
              <span className="text-white">Come</span>
              <span className="text-blue-400">Fore</span>
            </span>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-400">
              Transform Your workflow with AI-Powered tools and automation. 
              Built for modern teams.
            </p>
          </div>

          <div className="flex flex-row gap-2 pt-8">
            <div className="p-1 bg-gray-100/10 rounded-sm">
              <FaXTwitter className="w-4 h-4" />
            </div>
            <div className="p-1 bg-gray-100/10 rounded-sm">
              <FaGithub className="w-4 h-4"/>
            </div>
            <div className="p-1 bg-gray-100/10 rounded-sm">
              <FaLinkedin className="w-4 h-4"/>
            </div>
            <div className="p-1 bg-gray-100/10 rounded-sm">
              <MdEmail className="w-4 h-4"/>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-start gap-15 text-sm">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}> 
              <h3 className="font-bold">{category}</h3>
              <ul className="flex flex-col items-start justify-start text-gray-400">
                {links.map((link) => (
                  <li key={link} className="text-sm pt-2 leading-relaxed">
                    <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* down */}
      <div className='flex flex-col sm:flex-row items-center p-6 sm:p-8 sm:justify-between text-xs sm:text-sm text-gray-400 border-t border-slate-800'>
        <p className="px-14">Ⓒ2026 ComeFore. All rights reserved</p>
        <div className='mt-2 px-14 sm:mt-0 space-x-2 sm:space-x-4'>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie setting</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer