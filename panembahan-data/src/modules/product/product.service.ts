import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
	async createProduct(): Promise<{ message: string }> {
		return { message: "Berhasil menambahkan produk" };
	}
}
