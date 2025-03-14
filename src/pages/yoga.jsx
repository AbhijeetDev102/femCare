import Navbar from "../components/navbar.jsx";
import ImageSlider from "./ImageSlider.jsx";
import YogaSection from "./yogaSection.jsx";
import Footer from "../components/footer.jsx";
import YogaVideoSection from "./yogaVideo.jsx";

const YogaLandingPage = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <YogaSection></YogaSection>
      <YogaVideoSection></YogaVideoSection>
      <Footer></Footer>
    </div>
  );
};

export default YogaLandingPage;
