import VideoSection from "../components/community/VideoSection.jsx";
import Navbar from "../components/navbar.jsx";
const Home = () => {
  return (
    <div>
       <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-4 md:p-8 mt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-purple-800 mb-6 text-center">FemCare Video Library</h1>
        <p className="text-center text-purple-600 mb-8 max-w-2xl mx-auto">
          Explore our collection of educational videos on women's health, wellness, and self-care. Videos are randomly
          arranged each time you visit for a fresh experience.
        </p>
        <VideoSection />
      </div>
    </main>
    </div>
  );
};

export default Home;