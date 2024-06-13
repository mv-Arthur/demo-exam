import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import BoltIcon from "@mui/icons-material/Bolt";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function Drawner() {
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/")}>
						<ListItemText primary={"first"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/2")}>
						<ListItemText primary={"second"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/3")}>
						<ListItemText primary={"third"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/4")}>
						<ListItemText primary={"fourth"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/5")}>
						<ListItemText primary={"fivth"} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/6")}>
						<ListItemText primary={"sixth"} />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
		</Box>
	);

	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					// width: "100vw",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<BoltIcon style={{ width: 50, height: 50, color: "#000" }} />
					<div style={{ background: "#000", padding: "0 20px", borderRadius: "10px" }}>
						<Typography
							style={{ color: "#fff", fontSize: 15, fontWeight: 900 }}
							variant="overline"
							gutterBottom
						>
							MALAKHOVVV
						</Typography>
					</div>
				</div>
				<Button onClick={toggleDrawer(true)}>
					<MenuIcon style={{ width: 30, height: 30, color: "#000" }} />
				</Button>
			</div>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	);
}
