import { Box } from "@mui/material";
import Overview from "../components/Overview";
import RFPDetails from "../components/RFPDetails";
import ResidentProfiles from "../components/ResidentProfiles";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <>
      <Box id="overview">
        <Overview />
      </Box>
      <Box id="residents">
        <ResidentProfiles />
      </Box>
      <Box id="requirements">
        <RFPDetails />
      </Box>
      <Box id="gallery">
        <Gallery />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </>
  );
};

export default HomePage; 