import { Link } from "@tanstack/react-router"
import type { Product } from "../../interfaces/product"
import { MdAddShoppingCart } from "react-icons/md"

interface ProductCardProps {
    product: Product
}

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-md">
            <Link to="/products">
                <img className="w-full max-h-100 object-cover rounded-md mb-2" src={product.image} alt={product.name} />
            </Link>

            <div className="text-black rounded-2xl p-4">
                {product.name}

                <h3 className="text-lg font-semibold"><p>{product.color}</p></h3>

                <div className="flex justify-between mt-2.5">
                    <p className="font-bold">
                        R${product.price},00
                    </p>

                    <button className="cursor-pointer">
                        <MdAddShoppingCart className="h-7 w-7" />
                    </button>

                </div>

            </div>

        </div>
    )
}