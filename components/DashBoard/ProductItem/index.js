export default function ProductItem({ product }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <img src={product.image} className="w-12 h-12 rounded" alt={product.name} />
        <div>
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-xs text-gray-400">{product.subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${product.earning}</p>
        {/* <span
          className={`text-xs px-2 py-1 rounded ${
            product.active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
          }`}
        >
          {product.active ? 'Active' : 'Inactive'}
        </span> */}
      </div>
    </div>
  );
}
