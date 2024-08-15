import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProductService {
	constructor(private prismaService: PrismaService) {}

	async createProduct(): Promise<{ message: string }> {
		// const productIdIsUnavailable = await this.prismaService.product.count({
		//     where: {
		//         id
		//     }
		// })
		return { message: "Berhasil menambahkan produk" };
	}
}
