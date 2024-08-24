import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-6xl p-8">
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center p-4 md:p-8">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/036/290/329/non_2x/about-us-metaphor-company-information-flat-illustration-template-business-profile-office-information-customer-support-our-team-about-company-vector.jpg" 
            alt="About Us" 
            className="max-w-full h-auto rounded shadow-lg"
            style={{ maxHeight: '80vh' }} 
          />
        </div>
        
        {/* Text Section */}
        <div className="flex-1 text-left p-4 md:p-8">
          <h2 className="text-4xl font-bold text-gray-800">
            About Our Store
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our store is dedicated to providing the latest technology and gadgets to our customers. From mobile phones to laptops, we offer a wide range of products that meet your needs and budget. Our mission is to bring you the best quality at competitive prices, with a focus on customer satisfaction and service.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Established in 2024, we have been at the forefront of technological innovation, ensuring that our customers have access to the latest trends and advancements. We pride ourselves on our commitment to quality and our dedication to serving you.
          </p>
          <button className="mt-6 bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
