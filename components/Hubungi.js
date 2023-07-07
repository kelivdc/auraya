import { Box, Button, Card } from "@mui/material";
import Link from "next/link";
import React from "react";

function Hubungi() {
  return (
    <>
      <Card
        sx={{
          padding: "15px",
          marginTop: "25px",
          margin: "auto",
          maxWidth: "1024px",
          lineHeight: "1.8",
        }}
        elevation={0}
      >
        Hubungi Marketing Official:
        <br />
        <Link href="https://wa.me/6281222226880?text=Halo..Marketing Auraya Suites Apartemen, saya berminat dengan apartemen ini, boleh info lengkap? Terima kasih" passHref>
        <Button>
          Ira 0812 2222 6880
        </Button>
        </Link>
      </Card>
    </>
  );
}

export default Hubungi;
