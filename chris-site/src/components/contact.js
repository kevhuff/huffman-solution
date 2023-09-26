import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    recipient: "example@example.com",
    subject: "",
    body: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${formData.recipient}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.body)}`;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="/path-to-image.jpg" alt="Mail" />
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input onChange={handleChange} type="text" name="subject" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                Body
              </label>
              <textarea onChange={handleChange} name="body" id="body" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
