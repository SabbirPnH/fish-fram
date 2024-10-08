import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa"; 
import PropTypes from "prop-types";
import { RxBorderStyle } from "react-icons/rx";
import Image from "next/image";
const products = [
	{
		img: "/img/product (1).png",
		title: "Cow",
		price: "345.00",
		rating: "4.6",
	},
	{
		img: "/img/product (5).jpg",
		title: "Chicken",
		price: "125.00",
		rating: "4.1",
	},
	{
		img: "/img/product (6).jpg",
		title: "Pigeon",
		price: "525.00",
		rating: "4.9",
	},
	{
		img: "/img/product (2).png",
		title: "Bitter Gourd",
		price: "427.00",
		rating: "4.5",
	},
	{
		img: "/img/istockphoto-146776721-612x612.jpg",
		title: "Goat",
		price: "427.00",
		rating: "4.5",
	},
	{
		img: "/img/products (1).jpg",
		title: "Chilli",
		price: "427.00",
		rating: "4.5",
	},
	{
		img: "/img/products (2).jpg",
		title: "Duck",
		price: "427.00",
		rating: "4.5",
	},
	{
		img: "/img/products (3).jpg",
		title: "Fish",
		price: "427.00",
		rating: "4.5",
	},
];

const ProductItem = ({ product }) => {
	return (
		<div className=" bg-slate-200">
			<div className="relative">
				
				<a href="#!">
					<Image src={product.img} alt={product.title} className="w-full h-44" width={400} height={400}/>
				</a>
			</div>
			<div className="py-4 lg:py-6 text-start px-2">
				<a href="#!">
					<h5 className="text-[17px] text-[#404A3D] font-medium">{product.title}</h5>
				</a>
				<div className="flex justify-between items-center">
					<h5 className="text-[#5B8C51] font-medium text-[17px] leading-none my-2">
						${product.price}
					</h5>
					<a href="#!">
						<h5 className="hover:text-[#5B8C51]">
							<FaShoppingCart /> 
						</h5>
					</a>
				</div>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object.isRequired,
};

const Products = () => {
	return (
		<section className="light sm:py-10   text-zinc-900 dark:text-white relative overflow-hidden ">
			<div className="px-4 sm:px-20">
            <div className="text-center sm:pb-6" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <p className="text-[#5B8C51] flex justify-center text-lg font-semibold uppercase  inline-block py-1 rounded pt-3 sm:pt-0 sm:mb-2 flex items-center">
  <RxBorderStyle className="inline-flex text-2xl font-semibold mr-2" />
   Our Products
  <RxBorderStyle className="inline-flex text-2xl font-semibold ml-2" />
</p>

        <h1 className="mb-5 text-lg lg:text-2xl font-bold text-[#404A3D]">Our Products For Healthy Living</h1>
      </div>

				<div className="grid grid-cols-12  text-center justify-start xl:justify-center ">
					{products.map((product, i) => (
						<div
							className="col-span-12 sm:col-span-6 xl:col-span-3 p-2"
							key={i}
						>
							<ProductItem product={product} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
