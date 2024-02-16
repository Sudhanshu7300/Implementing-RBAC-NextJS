"use client";
import type { ReactElement } from "react";
import { Grid, Box, Card } from "@mui/material";
import BlankLayout from "../../../components/layouts/blank/BlankLayout";
import Image from "next/image";
// components
import PageContainer from "../../../components/container/PageContainer";
import AuthLogin from "../../../components/authentication/AuthLogin";
import TestLogo from "../../../components/assets/Images/test-logo.jpg";
import Toast from "../../../components/Toast";

const Login2 = () => {
  return (
    <>
      <Toast />
      <PageContainer title="Login" description="this is Login page">
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
            },
          }}
        >
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                elevation={9}
                sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Image
                    src={TestLogo}
                    alt="TestLogo"
                    height={85}
                    width={200}
                  />
                </Box>
                <AuthLogin />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
};
export default Login2;

Login2.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
