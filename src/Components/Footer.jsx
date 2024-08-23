import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 w-full bottom-0">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-white mb-4 md:mb-0">
        <h3 className="text-xl font-bold">Your Company</h3>
        <p className="text-sm">123 Street Name, City, State, 12345</p>
        <p className="text-sm">Email: contact@yourcompany.com</p>
        <p className="text-sm">Phone: (123) 456-7890</p>
      </div>

      <div className="text-white flex space-x-6">
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </div>

    <div className="text-center text-white mt-4">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
