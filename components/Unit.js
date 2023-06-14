import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import * as React from "react";
import Image from "next/image";

function Unit(props) {
  const [value, setValue] = React.useState("studio");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        padding: "10px",
        maxWidth: "1024px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#",
        }}
      >
        UNIT
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="STUDIO" value="studio" />
            <Tab label="2BR A" value="a" />
            <Tab label="2BR B" value="b" />
            <Tab label="2BR C" value="c" />
          </TabList>
        </Box>
        <TabPanel value="studio">
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              color: "#349fab",
            }}
          >
            Type Studio
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#888",
            }}
          >
            2 Bedroom, 1 Bathroom, SGA 23m<sup>2</sup>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                src="/studio1.png"
                width={509}
                height={651}
                layout="responsive"
                alt="Studio "
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/studio2.png"
                width={509}
                height={651}
                layout="responsive"
                alt="Studio 2"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/studio4.png"
                width={509}
                height={651}
                layout="responsive"
                alt="Studio 3"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="a">
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              color: "#349fab",
            }}
          >
            2BR A
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#888",
            }}
          >
            2 Bedroom, 1 Bathroom, SGA 39m<sup>2</sup>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-a1.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR A "
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-a2.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR A"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-a3.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR A"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="b">
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              color: "#349fab",
            }}
          >
            2BR B
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#888",
            }}
          >
            2 Bedroom, 1 Bathroom, SGA 39m<sup>2</sup>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-b1.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR B"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-b2.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR B"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-b3.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR B"
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="c">
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              color: "#349fab",
            }}
          >
            2BR C
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#888",
            }}
          >
            2 Bedroom, 1 Bathroom, SGA 51m<sup>2</sup>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-c1.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR C"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-c2.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR C"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-c3.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR C"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/2br-c4.png"
                width={509}
                height={651}
                layout="responsive"
                alt="2BR C"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Unit;
