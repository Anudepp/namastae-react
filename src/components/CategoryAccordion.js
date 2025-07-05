import { useState } from "react";
import MenuItem from "./MenuItem";

const CategoryAccordion = ({ title, itemCards }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-lg"
      >
        {title}
        <span className="ml-2 text-gray-500">{itemCards?.length}</span>
      </button>

      {/* Content */}
      {isOpen &&
        <div className="bg-white px-4 py-2 space-y-4">
          {itemCards.map(item =>
            <MenuItem key={item.card.info.id} info={item.card.info} />
          )}
        </div>}
    </div>
  );
};

export default CategoryAccordion;
