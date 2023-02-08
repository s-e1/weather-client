import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Weather App
                </Typography>

                <Button
                    component={NavLink}
                    to="/weather-client"
                    variant="outlined"
                    color="inherit"
                    style={
                        ({ isActive }) => ({
                            color: "white",
                            backgroundColor: isActive ? "dodgerblue" : "",
                            textDecoration: "none"
                        })
                    }
                >
                    Home
                </Button>
                &nbsp;&nbsp;

                <Button
                    component={NavLink}
                    to="/weather-client/favorites"
                    variant="outlined"
                    color="inherit"
                    style={
                        ({ isActive }) => ({
                            color: "white",
                            backgroundColor: isActive ? "dodgerblue" : "",
                            textDecoration: "none"
                        })
                    }
                >
                    Favorites
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;