import { Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Hubungi from "./Hubungi";

function Lokasi() {
  return (
    <>
      <Card
        sx={{
          border: "solid 1px #ccc",
          padding: "15px",
          margin: "auto",
          maxWidth: "1024px",
          lineHeight: "1.8",
        }}
      >
        <Typography variant="h2" sx={{
            fontSize: "1.8rem",
            textAlign: "center"
        }}>
        Lokasi
        </Typography>
        <Image
            src="/lokasi.jpg"
            width={509}
            height={651}
            layout="responsive"
            alt="Lokasi"
          />
          Jl. Alam Sutera Boulevard <br />
          Tangerang
      </Card>
      <Hubungi />
    </>
  );
}

export default Lokasi;
