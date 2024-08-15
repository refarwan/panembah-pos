import { Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post("add-product")
	async createProduct(): Promise<{ message: string }> {
		return await this.productService.createProduct();
	}
}
