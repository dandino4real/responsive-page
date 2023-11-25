import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    selectedCategory: '',
    selectedSector: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCategory: category,
      selectedSector: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You would normally send the data to a server here
  };

  const sectorOptions = {
    Manufacturing: ['Construction materials', 'Electronics and Optics'],
    "Food and Beverage": ['Bakery & confectionery product', 'Beverages', 'Fish & fish products', 'Meat & meat products', 'Milk & dairy products '],
    IT: ['Web Development', 'Networking', 'Security'],
    Finance: ['Banking', 'Investments'],
    Healthcare: ['Hospitals', 'Pharmaceuticals'],
  };

  const categoryOptions = Object.keys(sectorOptions);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Please enter your name and pick the Sectors you are currently involved in.</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <label className="flex flex-col mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded"
          />
        </label>
        <div className="flex mb-4">
          <label className="flex-1 mr-2">
            <span className="text-gray-700">Sector:</span>
            <select
              name="selectedCategory"
              value={formData.selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              required
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="">Select a sector</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          {formData.selectedCategory && (
            <label className="flex-1 ml-2">
              <span className="text-gray-700">Sub-Sector:</span>
              <select
                name="selectedSector"
                value={formData.selectedSector}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="">Select a sector</option>
                {sectorOptions[formData.selectedCategory].map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
        <label className="block mb-4">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            className="mr-2"
          />
          <span className="text-gray-700">Agree to Terms</span>
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
