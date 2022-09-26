import React from 'react'
import "../CSS/patHome.css"
import { useEffect, useState, useContext, useRef } from 'react'
import { UserContext } from "../Contexts/UserContext";
import axiosClient from '../ApiConfig';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';

function BookFill() {
    const navigate = useNavigate();
    const { docID } = useParams();
    let { user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole } = useContext(UserContext);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user == null) {
            setUser(() => JSON.parse(localStorage.getItem("user_data")));
            setToken(() => localStorage.getItem("access_token"));
            setRefreshToken(() => localStorage.getItem("refresh_token"));
        }
    }, [])

    return (
        <div className='book-cont'>
            <div className="phome-top">
                <div className="phome-logo" onClick={() => { navigate("/home") }}>
                    DocSeek
                </div>
                <button className='logout-bttn' onClick={() => logout()}>Logout</button>
            </div>
        </div>
    )
}

export default BookFill