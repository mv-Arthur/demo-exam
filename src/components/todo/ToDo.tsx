import React from "react";
import { Markup } from "../markup/Markup";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToDoForm } from "./ToDoForm";
import { observer } from "mobx-react-lite";
import { store } from "@/store/store";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { TextField, Typography } from "@mui/material";
import { Row } from "../Row";

export const ToDo = observer(() => {
	const [search, setSearch] = React.useState("");
	const users = store.users.filter((user) => {
		const exp = user.surname.toLowerCase().includes(search.toLowerCase());
		return exp;
	});

	return (
		<>
			<Markup
				left={<ToDoForm />}
				right={
					<div>
						<div style={{ marginBottom: "10px" }}>
							<TextField
								value={search}
								onChange={(e) => setSearch(e.currentTarget.value)}
								label="Поиск..."
							/>
						</div>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell align="center">Фамилия</TableCell>
										<TableCell align="center">Имя</TableCell>
										<TableCell align="center">Отчество</TableCell>
										<TableCell align="center">Номер тел.</TableCell>
										<TableCell align="center">Адрес эл.почты</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{users.map((user) => {
										return <Row key={user.id} user={user} />;
									})}
								</TableBody>
							</Table>
						</TableContainer>
						{!!store.snackbar && (
							<Snackbar
								open
								anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
								onClose={() => store.setSnackBar(null)}
								autoHideDuration={6000}
							>
								<Alert {...store.snackbar} onClose={() => store.setSnackBar(null)} />
							</Snackbar>
						)}
					</div>
				}
			/>
		</>
	);
});
