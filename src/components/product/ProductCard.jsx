import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link className={"h-full"} to={`/product/${item.id}`}>
      <div className="card hover:brightness-90 h-full transition-all duration-100 cursor-pointer bg-white shadow rounded-lg overflow-hidden">
        <div className="relative bg-gray-100 h-48 flex items-center justify-center">
          {item.isBestseller ? (
            <div className="badge badge-primary absolute top-2 left-2">
              Bestseller
            </div>
          ) : null}

          <img
            src={item.imageUrl}
            alt={item.name}
            className="object-contain h-32"
          />
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-lg">{item.name}</h2>
          <div className="flex items-center space-x-2 my-2">
            <Star className="text-warning" fill="var(--color-warning)" size={14} />
            <span className="text-sm font-medium">{item.rating}</span>
            <span className="text-xs text-gray-500">({item.numReviews})</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold">${(Math.round(item.price * 100) / 100).toFixed(2)}</span>
            {item.onSale && (
              <span className="text-sm line-through text-gray-400">
                ${(Math.round(item.comparePrice * 100) / 100).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
