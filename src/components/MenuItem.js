
const MenuItem = ({ info }) => {
  return (
    <div className="p-4 border rounded shadow-sm hover:shadow-md transition-all">
      <h4 className="text-xl font-semibold">{info.name}</h4>
      {info.description && <p className="text-sm text-gray-600 mb-2">{info.description}</p>}
      <p className="text-gray-800 font-medium">
        ₹{info.defaultPrice / 100 || info.price / 100}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Rating: {info.ratings?.aggregatedRating?.rating || "N/A"}
      </p>
    </div>
  );
};

export default MenuItem;