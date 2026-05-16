import { testimonials } from "../data/Testimonials"

const Testimonials = () => {
  return (
    <section id='testimonials'
    className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg-gap-16'>
          {/* Left side Header */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 '>
              What Developers are Saying About Us
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, test and deploy applications with AI-powered developement tools.
            </p>
          </div>
          {/* Right Side Testimonials */}
          <div className="w-full lg:w-1/2 ">
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial,index)=> (
                <div key={index} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl ">
                  <div className="shrink-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      "
                    </div>
                  </div>

                  <div className="grow">
                    <p className="text-whit text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                    <div>
                      <img
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400 ">
                          {testimonial.role}
                        </p>
                      </div>
                      </div>
                  </div>
                </div> 
              ))}
            </div>
          </div>
        </div>
      </div>    
    </section>
  )
}

export default Testimonials