import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import Navbar from "C:/Users/User/OneDrive/Dokumen/SYSTEM 56/KELAS A/TUGAS KULIAH SEMESTER 5/Pemograman Web/Praktikum/Latihan/Modul 3/modul3/src/components/Navbar.jsx";
import Footer from "C:/Users/User/OneDrive/Dokumen/SYSTEM 56/KELAS A/TUGAS KULIAH SEMESTER 5/Pemograman Web/Praktikum/Latihan/Modul 3/modul3/src/components/Footer.jsx";
import Home from "C:/Users/User/OneDrive/Dokumen/SYSTEM 56/KELAS A/TUGAS KULIAH SEMESTER 5/Pemograman Web/Praktikum/Latihan/Modul 3/modul3/src/pages/Home.jsx";
import AboutUs from "C:/Users/User/OneDrive/Dokumen/SYSTEM 56/KELAS A/TUGAS KULIAH SEMESTER 5/Pemograman Web/Praktikum/Latihan/Modul 3/modul3/src/pages/AboutUs.jsx";
import Contact from "C:/Users/User/OneDrive/Dokumen/SYSTEM 56/KELAS A/TUGAS KULIAH SEMESTER 5/Pemograman Web/Praktikum/Latihan/Modul 3/modul3/src/pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
