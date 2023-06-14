"use client";

// import Image from 'next/image'
import styles from "./page.module.css";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../../components/Footer";
import Unit from "../../components/Unit";
import Kelebihan from "../../components/Kelebihan";
import Hubungi from "../../components/Hubungi";
import Lokasi from "../../components/Lokasi";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#4f878f",
          height: "5px",
          width: "100%",
        }}
      ></Box>
      <Box
        style={{
          minHeight: "100vh",
          margin: "0",
        }}
        margin="auto"
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Image
            src="/logo-cyan-2.png"
            width={235}
            height={110}
            alt="Logo Auraya"
          />
        </Box>
        <Typography
          variant="h2"
          sx={{
            color: "#61939b",
            margin: "auto",
            paddingBottom: "15px",
            textAlign: "center",
          }}
          fontSize={{
            xs: "16px",
            md: "26px",
          }}
        >
          Apartemen
        </Typography>
        <Box
          sx={{
            borderTop: "solid 1px #ccc",
            borderBottom: "solid 1px #ccc",
            padding: "5px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image
                src="/image2.png"
                width={509}
                height={651}
                layout="responsive"
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#61939b",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  fontSize={{
                    xs: "16px",
                    md: "26px",
                  }}
                >
                  TODAY, TOMORROW, TOGETHER
                </Typography>
                <Typography
                  sx={{
                    color: "#61939b",
                    fontWeight: "normal",
                    textAlign: "center",
                    padding: "15px",
                  }}
                >
                  <strong>Auraya Suites</strong> adalah sebuah kompleks
                  apartemen mewah yang menawarkan hunian yang elegan dan
                  fasilitas yang lengkap. Dalam konten ini, kami akan membahas
                  mengenai apartemen Auraya Suites, lokasinya yang strategis,
                  desain interior yang modern, fasilitas yang disediakan, dan
                  kenyamanan hidup yang dapat Anda nikmati di sini.
                </Typography>
                <Chip
                  label="Mulai dari Rp. 500jt an"
                  color="success"
                  sx={{
                    textAlign: "center",
                    margin: "auto",
                    marginY: "10px",
                    display: "flex",
                  }}
                />
                <Link
                  href="https://wa.me/6281222226880?text=Halo..Marketing Auraya Suites Apartemen, saya berminat dengan apartemen ini, boleh minta brosurnya ? Terima kasih"
                  passHref
                >
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{
                      textAlign: "center",
                      margin: "auto",
                      marginY: "10px",
                      display: "flex",
                    }}
                  >
                    E-Brochure
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Image
            src="/image4.png"
            width={509}
            height={651}
            layout="responsive"
          />
          <Image
            src="/image5.png"
            width={509}
            height={651}
            layout="responsive"
          />
        </Box>
        <Unit />

        <Kelebihan />
        <Lokasi />
        <Hubungi />
        <Box
          sx={{
            marginBottom: "50px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00cba9"
              fillOpacity="1"
              d="M0,160L18.5,138.7C36.9,117,74,75,111,90.7C147.7,107,185,181,222,218.7C258.5,256,295,256,332,234.7C369.2,213,406,171,443,154.7C480,139,517,149,554,176C590.8,203,628,245,665,234.7C701.5,224,738,160,775,149.3C812.3,139,849,181,886,165.3C923.1,149,960,75,997,64C1033.8,53,1071,107,1108,160C1144.6,213,1182,267,1218,261.3C1255.4,256,1292,192,1329,160C1366.2,128,1403,128,1422,128L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
