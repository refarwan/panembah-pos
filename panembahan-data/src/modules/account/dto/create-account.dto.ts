import {
	IsAlphanumeric,
	IsNotEmpty,
	IsString,
	IsStrongPassword,
} from "class-validator";

export class CreateAccountDto {
	@IsNotEmpty({ message: "Username tidak boleh kosong" })
	@IsAlphanumeric(undefined, {
		message: "Username hanya boleh huruf atau nomor",
	})
	username: string;

	@IsNotEmpty({ message: "Password tidak boleh kosong" })
	@IsStrongPassword(
		{ minLength: 8 },
		{ message: "Password kurang aman (contoh: Panembahan#2024)" },
	)
	password: string;

	@IsNotEmpty({ message: "Konfirmasi password tidak boleh kosong" })
	@IsString({ message: "Konfirmasi password harus string" })
	confirmPassword: string;
}
