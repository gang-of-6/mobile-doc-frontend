import ColorConfigs from "../configs/ColorConfigs"
import SizeConfigs from "../configs/SizeConfigs"

import { Drawer, List, Stack, Toolbar } from "@mui/material";
import SidebarItem from './SidebarItem';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
  return (
    <Drawer
    variant="permanent"
    sx={{
      width: SizeConfigs.sidebar,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: SizeConfigs.sidebar,
        boxSizing: "border-box",
        borderRight: "0px",
        backgroundColor: ColorConfigs.sidebar.bg,
        color: ColorConfigs.sidebar.color
      }
    }}
  >
    <List disablePadding>
      <Toolbar sx={{ marginBottom: "20px" }}>
        <Stack
          sx={{ width: "100%" }}
          direction="row"
          justifyContent="center"
        >
        </Stack>
      </Toolbar>
      {SidebarItems.map((item, index) => (
        <SidebarItem item={item} key={index} />
        ))}
    </List>
  </Drawer>
    
  )
}

export default Sidebar