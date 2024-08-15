import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
	@IsNotEmpty({ message: "Nama tidak boleh kosong" })
	name: string;
}
