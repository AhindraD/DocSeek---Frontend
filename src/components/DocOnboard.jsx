import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';


import React from 'react'
import "../CSS/onboard.css"
import { useEffect, useState, useContext } from 'react'
import { UserContext } from "../Contexts/UserContext";
import axiosClient from '../ApiConfig';
import { useNavigate } from 'react-router-dom';

function DocOnboard() {
    let navigate = useNavigate();
    let { user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole } = useContext(UserContext);
    let [loading, setLoading] = useState(true);
    let [timeSlots, setTimeSlots] = useState([]);
    let [days, setDays] = useState([]);

    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const TIME_SLOTS = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];

    useEffect(() => {
        if (user == null) {
            setUser(() => JSON.parse(localStorage.getItem("user_data")));
            setToken(() => localStorage.getItem("access_token"));
            setRefreshToken(() => localStorage.getItem("refresh_token"));
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // let onboardDoc = {
        //     title: data.get('title'),
        //     desc: data.get('desc'),
        //     start: data.get('start'),
        //     end: data.get('end'),
        //     //locations: autoVals.map((elem) => elem.place_name),
        //     status: data.get('status'),
        // };
        console.log(days);
        console.log(timeSlots);
        console.log("submit");
    };

    return (
        <div className='onboard-cont'>
            <div className="onboard-card">
                <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                    <HealthAndSafetyTwoToneIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography component="h1" variant="h3">
                    Register Yourself
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                color="success"
                                id="qualification"
                                label="Qualification"
                                name="qualification"
                                autoComplete="Qualification"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                color="success"
                                name="speciality"
                                label="Speciality"
                                id="speciality"
                                autoComplete="Speciality"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                color="success"
                                id="hospital"
                                label="Hospital"
                                name="hospital"
                                autoComplete="Hospital"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                color="success"
                                type="number"
                                name="experience"
                                label="Experience"
                                id="experience"
                                autoComplete="Experience"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                color="success"
                                id="city"
                                label="City"
                                name="city"
                                autoComplete="City"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                color="success"
                                name="country"
                                label="Country"
                                id="country"
                                autoComplete="Country"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                color="success"
                                type="number"
                                name="fee"
                                label="Fees in $"
                                id="fee"
                                autoComplete="Fee"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                multiple
                                limitTags={3}
                                options={TIME_SLOTS}
                                getOptionLabel={(option) => option.toString()}
                                sx={{ width: 400 }}
                                renderInput={(params) => <TextField {...params}
                                    fullWidth
                                    id="timeslots"
                                    name="timeslots"
                                    label="Time Slots" />}
                                onChange={(event, newValue) => {
                                    //console.log(newValue);
                                    setTimeSlots(newValue);
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                disablePortal
                                multiple
                                limitTags={2}
                                options={DAYS}
                                getOptionLabel={(option) => option.toString()}
                                sx={{ width: 400 }}
                                renderInput={(params) => <TextField {...params}
                                    fullWidth
                                    id="days"
                                    name="days"
                                    label="Days Available" />}
                                onChange={(event, newValue) => {
                                    //console.log(newValue);
                                    setDays(newValue);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="success"
                    >
                        ONBOARD
                    </Button>
                </Box>
            </div>
        </div>
    )
}

export default DocOnboard