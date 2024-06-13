import { UserForm } from "@/components/todo/ToDoForm";
import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";
import { AlertProps } from "@mui/material/Alert";
export interface User extends UserForm {
	id: string;
}

const saveData = (data: User[]) => window.localStorage.setItem("users", JSON.stringify(data));

class Store {
	users = [] as User[];
	snackbar: Pick<AlertProps, "children" | "severity"> | null = null;
	constructor() {
		makeAutoObservable(this, {}, { deep: true });
	}

	setSnackBar(data: Pick<AlertProps, "children" | "severity"> | null) {
		this.snackbar = data;
	}

	setUser(user: UserForm) {
		this.users.push({ ...user, id: v4() });
		this.setSnackBar({ children: "успешно добавлен", severity: "success" });
		saveData(this.users);
	}

	editUser(id: string, user: UserForm) {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].id === id) this.users[i] = { ...user, id };
		}
		saveData(this.users);
		this.setSnackBar({ children: "успешно изменен", severity: "success" });
	}

	removeUser(id: string) {
		for (let i = 0; i < this.users.length; i++) {
			if (this.users[i].id === id) {
				this.users.splice(i, 1);
				break;
			}
		}
		saveData(this.users);
		this.setSnackBar({ children: "успешно изменен", severity: "success" });
	}

	setUsers(users: User[]) {
		this.users = users;
	}
}

export const store = new Store();
