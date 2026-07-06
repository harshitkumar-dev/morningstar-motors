import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

const testimonials = [
        { 
          name: "Marcus Vance", 
          location: "New York , US",
          image: assets.testimonial_image_1, 
          testimonial: "Exceptional service from start to finish. The vehicle was delivered immaculate and precisely on time. Morningstar is now my go-to whenever I fly into town." 
        },
        { 
          name: "Serena Chen", 
          location: "Los Angeles, US", 
          image: assets.testimonial_image_2, 
          testimonial: "Renting high-end vehicles is usually a paperwork nightmare, but the seamless digital booking here is unmatched. Absolute perfection." 
        },
        { 
          name: "Harrison Blake", 
          location: "London, UK", 
          image: assets.testimonial_image_1, 
          testimonial: "An incredible fleet selection. Being able to secure a pristine supercar for the weekend with zero hassle completely redefines car rental." 
        }
    ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
           <Title title="Behind the Wheel" subTitle="Discover why the world's most demanding drivers choose Morningstar for their elite automotive needs."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
