import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const checklistItems = [
  { name: "Fire Extinguishers", hasExpiry: true, lifespan: 10 },
  { name: "Smoke Detectors", hasExpiry: true, lifespan: 10 },
  { name: "First Aid Kits", hasExpiry: true, lifespan: 5 },
  { name: "Gas Leak Detectors", hasExpiry: true, lifespan: 7 },
  { name: "Emergency Exits", hasExpiry: false },
  { name: "Sprinkler Systems", hasExpiry: false },
  { name: "Evacuation Plans & Signage", hasExpiry: false },
  { name: "Emergency Lighting", hasExpiry: false }
];

export default function InspectionDetails() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [checkedItems, setCheckedItems] = useState({});
  const [expiryDates, setExpiryDates] = useState({});
  const [quantities, setQuantities] = useState({});
  const [uploadedPhotos, setUploadedPhotos] = useState({});

  const handleCheckboxChange = (itemName) => {
    setCheckedItems((prev) => ({ ...prev, [itemName]: !prev[itemName] }));
    if (!checkedItems[itemName]) {
      setQuantities((prev) => ({ ...prev, [itemName]: 1 })); // Default quantity to 1
      setUploadedPhotos((prev) => ({ ...prev, [itemName]: [] })); // Reset photo array
    }
  };

  const handleExpiryChange = (itemName, date) => {
    setExpiryDates((prev) => ({ ...prev, [itemName]: date }));
  };

  const handleQuantityChange = (itemName, value) => {
    setQuantities((prev) => ({ ...prev, [itemName]: parseInt(value, 10) }));
    setUploadedPhotos((prev) => ({ ...prev, [itemName]: Array(parseInt(value, 10)).fill(null) }));
  };

  const handlePhotoUpload = (itemName, index, file) => {
    setUploadedPhotos((prev) => {
      const updatedPhotos = { ...prev };
      updatedPhotos[itemName] = [...(updatedPhotos[itemName] || [])];
      updatedPhotos[itemName][index] = file;
      return updatedPhotos;
    });
  };

  const calculateExpiryTime = (itemName) => {
    if (!expiryDates[itemName]) return null;

    const expiryDate = moment(expiryDates[itemName]);
    const now = moment();
    const diffYears = expiryDate.diff(now, "years");
    const diffMonths = expiryDate.diff(now, "months") % 12;
    const diffDays = expiryDate.diff(now, "days") % 30;

    if (expiryDate.isBefore(now)) {
      return <span className="text-red-600 font-bold">⚠️ Expired!</span>;
    }

    if (diffYears < 1) {
      return <span className="text-orange-500 font-bold">🔴 Replace ASAP! ({diffMonths} months, {diffDays} days left)</span>;
    }

    return `Expires in ${diffYears} years, ${diffMonths} months, and ${diffDays} days`;
  };

  const isFormValid = () => {
    return checklistItems.every(({ name, hasExpiry }) => {
      if (!checkedItems[name]) return false;
      if (!quantities[name] || quantities[name] < 1) return false;
      if (uploadedPhotos[name]?.length !== quantities[name] || uploadedPhotos[name]?.includes(null)) return false;
      if (hasExpiry && !expiryDates[name]) return false;
      return true;
    });
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert("Please fill all required fields before submitting.");
      return;
    }
    console.log("Form submitted with data:", { checkedItems, expiryDates, quantities, uploadedPhotos });
    alert("Inspection submitted successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Inspection Checklist</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {checklistItems.map(({ name, hasExpiry }) => (
          <div key={name} className="mb-6 border-b pb-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={checkedItems[name] || false} onChange={() => handleCheckboxChange(name)} />
              <span className="text-gray-800 font-semibold">{name}</span>
            </label>

            {checkedItems[name] && (
              <div className="mt-2 space-y-2">
                {/* Quantity Dropdown */}
                <div>
                  <label className="text-gray-600 block">Quantity:</label>
                  <select
                    className="block w-full border p-2"
                    value={quantities[name] || 1}
                    onChange={(e) => handleQuantityChange(name, e.target.value)}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>{num + 1}</option>
                    ))}
                  </select>
                </div>

                {/* File Upload Inputs Based on Quantity */}
                <div>
                  <label className="text-gray-600 block">Upload Photos:</label>
                  {[...Array(quantities[name] || 1)].map((_, index) => (
                    <input
                      key={index}
                      type="file"
                      className="block w-full border p-2 mt-1"
                      onChange={(e) => handlePhotoUpload(name, index, e.target.files[0])}
                    />
                  ))}
                </div>

                {/* Expiry Date for Items That Require It */}
                {hasExpiry && (
                  <div>
                    <label className="text-gray-600 block mt-2">Set Expiry Date:</label>
                    <input
                      type="date"
                      className="block w-full border p-2"
                      value={expiryDates[name] || ""}
                      onChange={(e) => handleExpiryChange(name, e.target.value)}
                    />
                    {expiryDates[name] && (
                      <p className="text-sm text-red-600 mt-1">{calculateExpiryTime(name)}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!isFormValid()}
        className={`mt-6 px-6 py-3 font-bold rounded-lg shadow-md transition duration-200 ${
          isFormValid() ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        Submit Inspection
      </button>
    </div>
  );
}
