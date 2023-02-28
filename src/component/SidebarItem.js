import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import ColorConfigs from "../configs/ColorConfigs";
import { rootURL } from './APIURL'

const SidebarItem = ({ forPatient, item, key }) => {
    const directory = forPatient ? "patient" : "doctor";
    return (
        <ListItemButton
            component={Link}
            to={rootURL + directory + item.path}
            sx={{
            "&: hover": {
                backgroundColor: ColorConfigs.sidebar.hoverBg,
            },
            backgroundColor: "unset",
            paddingY: "12px",
            paddingX: "24px"
            }}
        >
            <ListItemIcon id={key} sx={{
            color: ColorConfigs.sidebar.color,
            }}>
            {item.icon && item.icon}
            </ListItemIcon>
            {item.displayText}
        </ListItemButton>
    );
};

export default SidebarItem;