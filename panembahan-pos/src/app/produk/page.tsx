"use client";

import { useCallback, useState } from "react";

type ProductType = {
	id: number;
	name: string;
	satuan: string;
	stock: number;
	harga: number;
};

const product: ProductType[] = [
	{ id: 1, name: "Roti", satuan: "Pcs", stock: 10, harga: 3000 },
	{ id: 2, name: "Beras", satuan: "Kg", stock: 10, harga: 3000 },
	{ id: 3, name: "Air Mineral", satuan: "Botol", stock: 10, harga: 3000 },
	{ id: 4, name: "Minyak", satuan: "liter", stock: 10, harga: 3000 },
];

const Page = () => {
	const [selectedProduct, setSelectedProduct] = useState<
		{ id: number; count: number }[]
	>([]);

	const getCurrentStock = useCallback(
		(product: ProductType): number => {
			let stock: number = product.stock;
			selectedProduct.map((item) => {
				if (item.id === product.id) stock -= item.count;
			});
			return stock;
		},
		[selectedProduct]
	);

	const addSelectedProduct = useCallback(
		(product: ProductType) => {
			let tempSelected = [...selectedProduct];
			const addCount = tempSelected.find((item) => item.id === product.id);

			if (addCount) {
				if (getCurrentStock(product) <= 0) return alert("Produk Habis");
				const index = tempSelected.indexOf(addCount);
				tempSelected[index] = {
					id: tempSelected[index].id,
					count: tempSelected[index].count + 1,
				};
			} else tempSelected.push({ id: product.id, count: 1 });

			setSelectedProduct(tempSelected);
		},
		[selectedProduct]
	);

	const [isDone, setIsDone] = useState<boolean>(false);

	return (
		<main className="p-[20px]">
			<h1 className="text-[18px] text-center">Produk</h1>
			<div className="my-[20px] flex justify-between w-full">
				<div className="flex">
					<input
						type="search"
						name="search"
						className="border h-[40px] w-[300px] px-[12px]"
						placeholder="cari"
					/>
					<button className="bg-sky-500 text-white px-[20px]">Cari</button>
				</div>
				<div className="text-sky-500">
					Dipilih ({selectedProduct.length} Produk)
				</div>
			</div>
			<div>
				<table className="w-full">
					<thead>
						<tr>
							<th className="border">ID</th>
							<th className="border">Nama</th>
							<th className="border">stock</th>
							<th className="border">Satuan</th>
							<th className="border">Harga</th>
						</tr>
					</thead>
					<tbody>
						{product.map((item) => (
							<tr
								onClick={() => {
									addSelectedProduct(item);
								}}
								key={item.id}
								className="cursor-pointer hover:bg-sky-200"
							>
								<td className="border px-[10px]">{item.id}</td>
								<td className="border px-[10px]">{item.name}</td>
								<td className="border px-[10px]">{getCurrentStock(item)}</td>
								<td className="border px-[10px]">{item.satuan}</td>
								<td className="border px-[10px]">{item.harga}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<button
				onClick={() => setIsDone(true)}
				className="bg-sky-500 text-white block ml-auto h-[40px] mt-1 px-4"
			>
				Selesai
			</button>
		</main>
	);
};

export default Page;
