import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.routeContainer}>
                <Routes>
                    <Route path="/weather-client" element={<Home />} />
                    <Route path="/weather-client/favorites" element={<Favorites />} />
                </Routes>
            </div>
            <footer style={{ textAlign: "center" }}>
                <p>Data provided by <a href="https://developer.accuweather.com/">Accuweather</a></p>
            </footer>
        </div>
    );
}

export default App;
