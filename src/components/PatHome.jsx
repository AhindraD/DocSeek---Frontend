import React from 'react'
import "../CSS/patHome.css"
import { useEffect, useState, useContext, useRef } from 'react'
import { UserContext } from "../Contexts/UserContext";
import axiosClient from '../ApiConfig';
import { useNavigate } from 'react-router-dom';

function PatHome() {
    let navigate = useNavigate();
    let { user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole } = useContext(UserContext);
    let [loading, setLoading] = useState(true);
    let [docs, setDocs] = useState(true);

    useEffect(() => {
        if (user == null) {
            setUser(() => JSON.parse(localStorage.getItem("user_data")));
            setToken(() => localStorage.getItem("access_token"));
            setRefreshToken(() => localStorage.getItem("refresh_token"));
        }
        fetchData();
    }, [])

    async function fetchData() {
        let resp = await axiosClient.get("/doctor/all");
        setDocs(() => resp.data);
        console.log(resp.data);
        setLoading(false);
    }

    return (
        <div className='phome-cont'>
            <div className="phome-top">
                <div className="phome-logo" onClick={() => { navigate("/home") }}>
                    DocSeek
                </div>
                <button className='logout-bttn' onClick={() => logout()}>Logout</button>
            </div>

            {loading ? <h1 style={{ margin: "0 auto" }}>loading...</h1> : ""
            }
        </div >
    )
}

export default PatHome