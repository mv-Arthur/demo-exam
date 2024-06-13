import { store, User } from "@/store/store";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
type PropsType = {
	user: User;
};

const styleCell = {
	width: 100,
};

export const Row: React.FC<PropsType> = ({ user }) => {
	const [editMode, setEditMode] = React.useState(false);
	const { name, surname, patronymic, phoneNumber, email } = user;

	const [form, setForm] = React.useState({
		name,
		surname,
		patronymic,
		phoneNumber,
		email,
	});
	// onChange={(e) => setForm({...form, surname:e.currentTarget.value})}
	return (
		<TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
			<TableCell align="center">
				{editMode ? (
					<TextField
						style={styleCell}
						value={form.surname}
						onChange={(e) => setForm({ ...form, surname: e.currentTarget.value })}
					/>
				) : (
					user.surname
				)}
			</TableCell>
			<TableCell align="center">
				{editMode ? (
					<TextField
						style={styleCell}
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
					/>
				) : (
					user.name
				)}
			</TableCell>
			<TableCell align="center">
				{editMode ? (
					<TextField
						style={styleCell}
						value={form.patronymic}
						onChange={(e) => setForm({ ...form, patronymic: e.currentTarget.value })}
					/>
				) : (
					user.patronymic
				)}
			</TableCell>
			<TableCell align="center">
				{editMode ? (
					<TextField
						style={styleCell}
						value={form.phoneNumber}
						onChange={(e) => setForm({ ...form, phoneNumber: e.currentTarget.value })}
					/>
				) : (
					user.phoneNumber
				)}
			</TableCell>
			<TableCell align="center">
				{editMode ? (
					<TextField
						style={styleCell}
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
					/>
				) : (
					user.email
				)}
			</TableCell>

			<TableCell align="center">
				<Button onClick={() => store.removeUser(user.id)} color="error">
					<DeleteIcon />
				</Button>
				<Button onClick={() => setEditMode(true)} variant={editMode ? "contained" : "text"}>
					<EditIcon />
				</Button>
				<Button
					variant={editMode ? "text" : "contained"}
					onClick={() => {
						store.editUser(user.id, form);
						setEditMode(false);
					}}
				>
					<RemoveRedEyeIcon />
				</Button>
			</TableCell>
		</TableRow>
	);
};
