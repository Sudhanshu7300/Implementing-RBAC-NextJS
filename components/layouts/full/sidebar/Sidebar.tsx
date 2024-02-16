"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SidebarItems from "./SidebarItems";
const drawerWidth = 240;
interface Props {
  session: any;
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
}
export default function ResponsiveDrawer(props: Props) {
  const { onSidebarClose, isMobileSidebarOpen, isSidebarOpen, session } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Box
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant={isMobileSidebarOpen ? "temporary" : "permanent"}
            open={isMobileSidebarOpen || isSidebarOpen}
            onClose={onSidebarClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: isMobileSidebarOpen
                ? { xs: "block", sm: "none" }
                : { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SidebarItems session={session} />
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
