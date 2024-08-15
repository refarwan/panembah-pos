import { CreateAccountDto } from "./dto/create-account.dto";
import { PrismaService } from "src/prisma.service";

import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountService {
	constructor(private prismaService: PrismaService) {}

	async createAccount(data: CreateAccountDto): Promise<{ message: string }> {
		const usernameIsUnavailable = await this.prismaService.account.count({
			where: {
				username: data.username,
			},
		});
		return { message: "Berhasil membuat akun" };
	}
}
