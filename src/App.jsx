import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Diary from "./pages/Diary";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import { auth } from "./firebaseConfig";

function App() {
    console.log("Firebase Auth:", auth); 

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default App;


