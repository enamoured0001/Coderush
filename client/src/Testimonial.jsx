export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "BrandCrafters transformed our online presence with stunning designs and effective ad campaigns. Highly recommended!",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Ananya Verma",
      text: "Their web development services exceeded our expectations. Our website is now faster and more user-friendly!",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Vikram Rao",
      text: "Fantastic team! They designed a logo that perfectly represents our brand. Will work with them again!",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="py-12 bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-sm p-6 bg-gray-800 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
              <h3 className="text-lg font-medium">{testimonial.name}</h3>
            </div>
            <p className="text-gray-300">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
