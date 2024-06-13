import React from "react";
import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { store } from "@/store/store";

export type UserForm = {
	name: string;
	surname: string;
	patronymic: string;
	phoneNumber: string;
	email: string;
};

export const ToDoForm = () => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<UserForm>();
	const onSubmit: SubmitHandler<UserForm> = (data) => {
		store.setUser(data);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ display: "flex", flexDirection: "column", gap: "10px" }}
		>
			<TextField
				{...register("surname", { required: true })}
				label={errors.surname ? "поле обязательно для заполнения" : "Фамилия"}
				error={!!errors.surname}
			/>

			<TextField
				{...register("name", { required: true })}
				label={errors.name ? "поле обязательно для заполнения" : "Имя"}
				error={!!errors.name}
			/>
			<TextField
				{...register("patronymic", { required: true })}
				label={errors.patronymic ? "поле обязательно для заполнения" : "Отчество"}
				error={!!errors.patronymic}
			/>
			<TextField
				{...register("phoneNumber", { required: true, maxLength: 11 })}
				label={errors.phoneNumber ? "неверно введен номер" : "Номер телефона"}
				error={!!errors.phoneNumber}
				type="number"
			/>
			<TextField
				{...register("email", { required: true })}
				label={errors.email ? "поле обязательно для заполнения" : "Адрес эл. почты"}
				error={!!errors.email}
			/>
			<Button onClick={() => inputRef.current?.click()} variant="contained">
				Сохранить
			</Button>
			<input ref={inputRef} type="submit" style={{ display: "none" }} />
		</form>
	);
};
