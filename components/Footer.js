import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="E-Brochure" icon={<RestoreIcon />} onClick={() => handleNavigation('https://wa.me/6281222226880?text=Halo..Marketing Auraya Suites Apartemen, saya berminat dengan apartemen ini, boleh minta brosurnya ? Terima kasih')} />          
          <BottomNavigationAction label="Hubungi" icon={<WhatsAppIcon />} onClick={() => handleNavigation('https://wa.me/6281222226880?text=Halo..Marketing Auraya Suites Apartemen, saya berminat dengan apartemen ini, boleh info lengkap ? Terima kasih')} />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}
