import React from "react";

const Gasto = ({ gasto }) => {
  return (
    <div className="mt-5">
      <input className="hidden peer" />
      <label className="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500">
        <span> ✅ {gasto.nombregasto} </span>
        <span> ${gasto.cantidadgasto} 💵 </span>
      </label>
    </div>
  );
};

export default Gasto;
