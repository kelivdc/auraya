import { Box, Typography } from "@mui/material";
import React from "react";

function Kelebihan() {
  return (
    <>
    <Box sx={{maxWidth: "1024px", margin: "auto"}}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Kelebihan<br />Apartemen Auraya Suites
      </Typography>
      <Typography
        sx={{
          color: "#555",
          fontWeight: "normal",
          padding: "15px",
        }}
      >
        <ul>
          <li>
            Lokasi yang Strategis: Apartemen Auraya Suites terletak di pusat
            kota yang sibuk dan berkembang pesat. Dengan akses mudah ke berbagai
            tempat seperti pusat perbelanjaan, restoran, kantor, dan sarana
            transportasi, apartemen ini merupakan tempat yang ideal untuk
            tinggal bagi mereka yang ingin menjalani gaya hidup perkotaan yang
            nyaman.
          </li>
          <li>
            Desain Interior yang Modern: Setiap unit di Auraya Suites didesain
            dengan sangat teliti untuk memberikan pengalaman hidup yang mewah
            dan nyaman. Interior apartemen ini memiliki sentuhan modern dengan
            perabotan berkualitas tinggi dan peralatan yang canggih. Desain
            ruangan yang terbuka memberikan kesan luas dan pencahayaan alami
            yang optimal, menciptakan suasana yang menyenangkan untuk
            ditinggali.
          </li>
          <li>
            Fasilitas yang Lengkap: Auraya Suites menawarkan berbagai fasilitas
            yang akan memenuhi kebutuhan dan gaya hidup Anda. Beberapa fasilitas
            yang tersedia antara lain: Kolam renang yang indah, tempat ideal
            untuk bersantai atau berenang untuk menjaga kebugaran tubuh. Pusat
            kebugaran modern yang dilengkapi dengan peralatan olahraga terbaru,
            memungkinkan Anda menjaga kebugaran fisik tanpa harus meninggalkan
            kompleks apartemen. Area rekreasi dan taman yang luas, tempat yang
            sempurna untuk bersantai atau berkumpul bersama teman dan keluarga.
            Ruang serbaguna yang dapat digunakan untuk acara atau pertemuan
            khusus. Area parkir yang aman dan nyaman untuk kendaraan penghuni.
          </li>
          <li>
            Pilihan Unit yang Fleksibel: Auraya Suites menawarkan pilihan unit
            apartemen yang fleksibel, mulai dari studio hingga unit dengan
            beberapa kamar tidur. Setiap unit memiliki tata letak yang cerdas,
            memaksimalkan penggunaan ruang dan memberikan kenyamanan hidup yang
            optimal. Dengan pilihan yang beragam, Anda dapat menemukan unit yang
            sesuai dengan kebutuhan dan preferensi Anda.
          </li>
        </ul>
        Inilah sebagian dari keunggulan dan fasilitas yang ditawarkan oleh
        Auraya Suites. Dengan apartemen yang mewah, fasilitas lengkap, dan
        lokasi yang strategis, ini adalah tempat yang sempurna untuk tinggal
        bagi mereka yang menginginkan gaya hidup perkotaan yang berkualitas.
      </Typography>
      </Box>
    </>
  );
}

export default Kelebihan;
