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
  "Food and Beverage": ['Bakery & confectionery products', 'Beverages', 'Fish & fish products', 'Meat & meat products', 'Milk & dairy products', 'Other', 'Sweets & snack food'],
  Furniture: ['Bathroom/sauna', 'Bedroom', 'Children room', 'Kitchen', 'Living room', 'Office', 'Other (Furniture)', 'Outdoor', 'Project furniture'],
  Machinery: ['Machinery components', 'Machinery equipment/tools', 'Manufacture of machinery', 'Maritime', 'Metal structures', 'Other', 'Repair and maintenance service'],
  Maritime: ['Aluminium and steel workboats', 'Boat/Yacht building', 'Ship repair and conversion'],
  Metalworking: ['Construction of metal structures', 'Houses and buildings', 'Metal products', 'Metal works'],
  'Metal works': ['CNC-machining', 'Forgings, Fasteners', 'Gas, Plasma, Laser cutting', 'MIG, TIG, Aluminum welding'],
  'Plastic and Rubber': ['Packaging', 'Plastic goods', 'Plastic processing technology', 'Plastic Profile'],
  'Plastic processing technology': ['Blowing', 'Moulding', 'Plastics welding and processing'],
  Printing: ['Advertising', 'Book/Periodicals printing', 'Labelling and packaging printing'],
  'Textile and Clothing': ['Clothing', 'Textile'],
  Wood: ['Other (Wood)', 'Wooden building materials', 'Wooden houses'],
  Other: ['Creative industries', 'Energy technology', 'Environment'],
  Service: ['Business services', 'Engineering', 'Information Technology and Telecommunications', 'Tourism', 'Translation services', 'Transport and Logistics'],
  'Information Technology and Telecommunications': ['Data processing, Web portals, E-marketing', 'Programming, Consultancy', 'Software, Hardware', 'Telecommunications'],
  'Transportation and Logistics': ['Air', 'Road', 'Water'],
};
  const categoryOptions = Object.keys(sectorOptions);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-5 text-center">Please enter your name and pick the Sectors you are currently involved in.</h1>
      <form onSubmit={handleSubmit} className="max-w-md shadow-lg m-auto p-5">
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
  Save
</button>

      </form>
    </div>
  );
};

export default App;
