import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CEO, TechVentures Inc.",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "Precision Accounting Partners transformed our financial operations. Their attention to detail and strategic insights have been invaluable to our company's growth. We've saved over $200K in the first year alone.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Founder, Coastal Properties",
      image: "https://i.pravatar.cc/150?img=47",
      quote: "Working with Precision has been a game-changer for our real estate business. Their proactive approach to tax planning and financial forecasting gives us the confidence to make bold business decisions.",
      rating: 5
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "CFO, MedHealth Systems",
      image: "https://i.pravatar.cc/150?img=33",
      quote: "The team at Precision Accounting Partners provides exceptional service. They're responsive, knowledgeable, and truly understand the complexities of our industry. I highly recommend them to any business seeking financial excellence.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why businesses trust Precision Accounting Partners for their financial success
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <p className="text-gray-600 font-medium">
            Trusted by over 500+ businesses nationwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
