export default function ProductItem({ product }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-[#F5F5F5] rounded-lg transition-colors cursor-pointer">

      <div className="w-16 h-16 mr-3 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 pr-4 transition duration-200 ease-in-out">
        <p className="text-sm font-medium text-[#1A1D1F]">{product.name}</p>
        {product.subtitle && (
          <p className="text-xs text-gray-400 truncate">{product.subtitle}</p>
        )}
      </div>

      <div className="text-right min-w-[90px]">
        <p className="font-semibold text-[#1A1D1F]">${product.earning}</p>
        {product.status && (
          <span
            className={`inline-block mt-1 text-xs font-semibold rounded-md px-2 py-0.5 ${product.status === "Active"
              ? "bg-[#EAFAE5] text-[#83BF6E]"
              : "bg-[#FFE7E4] text-[#FF6A55]"
              }`}
          >
            {product.status}
          </span>
        )}
      </div>
    </div>
  );
}
