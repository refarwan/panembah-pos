import { AccountService } from "./account.service";
import { CreateAccountDto } from "./dto/create-account.dto";

import { Body, Controller, Post } from "@nestjs/common";

@Controller("account")
export class AccountController {
	constructor(private readonly accountService: AccountService) {}

	@Post("create")
	async createAccount(
		@Body() data: CreateAccountDto,
	): Promise<{ message: string }> {
		return await this.accountService.createAccount(data);
	}
}
