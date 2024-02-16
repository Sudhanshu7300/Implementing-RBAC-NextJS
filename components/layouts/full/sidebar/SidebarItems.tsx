"use client";
import React from "react";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import Image from "next/image";
import TestLogo from "../../../assets/Images/test-logo.jpg";
import useCustomRoutes from "@/components/hooks/useCustomiseRoutes";
const SidebarItems = ({ session }: any) => {
  const Role = session.user.role;
  const UpdatedRoutes = useCustomRoutes(Role);
  return (
    <Box sx={{ px: 3 }}>
      <Image src={TestLogo} alt="TestLogo" height={85} width={200} />
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {UpdatedRoutes.map((item: any, index: number) => {
          return <NavItem item={item} key={index} />;
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
