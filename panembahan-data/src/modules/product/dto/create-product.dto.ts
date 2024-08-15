import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
	@IsNotEmpty({ message: "ID Produk tidak boleh kosong" })
	id: string;

	@IsNotEmpty({ message: "Nama tidak boleh kosong" })
	name: string;

	@IsNotEmpty({ message: "Satuan tidak boleh kosong" })
	satuan: string;

	@IsNotEmpty({ message: "Harga tidak boleh kosong" })
	price: string;
}
