import { useState } from "react";

const PaymentMethod = () => {
  const [selected, setSelected] = useState(null);

  const paymentMethods = [
    { id: 1, name: "Efectivo", icon: "/path-to-efectivo-icon.png" },
    { id: 2, name: "Yape", icon: "/path-to-yape-icon.png" },
    { id: 3, name: "Transferencia", icon: "/path-to-transferencia-icon.png" },
    { id: 4, name: "Híbrido", icon: "/path-to-híbrido-icon.png" },
  ];

  const handleSelection = (id: any) => {
    setSelected(id);
  };

  return (
    <div className="flex space-x-4">
      {paymentMethods.map((method) => (
        <div key={method.id} className={`w-16 h-16`}>
          <div
            onClick={() => handleSelection(method.id)}
            className={`w-16 h-16 flex flex-col items-center p-4 border rounded-lg cursor-pointer ${
              selected === method.id ? "border-blue-500" : "border-gray-300"
            }`}
          >
            {/* <img src={method.icon} alt={method.name} className="w-12 h-12" />*/}
          </div>
          <div className="mt-2 text-center text-sm break-words">
            {method.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethod;
