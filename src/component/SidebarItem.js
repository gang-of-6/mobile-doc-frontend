import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import ColorConfigs from "../configs/ColorConfigs";

const SidebarItem = ({ item, key }) => {
    return (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
            "&: hover": {
                backgroundColor: ColorConfigs.sidebar.hoverBg,
            },
            backgroundColor: "unset",
            paddingY: "12px",
            paddingX: "24px"
            }}
        >
            <ListItemIcon sx={{
            color: ColorConfigs.sidebar.color,
            }}>
            {item.icon && item.icon}
            </ListItemIcon>
            {item.displayText}
        </ListItemButton>
    );
};

export default SidebarItem;