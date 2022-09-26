import React from 'react'
import "../CSS/patHome.css"
import { useEffect, useState, useContext, useRef } from 'react'
import { UserContext } from "../Contexts/UserContext";
import axiosClient from '../ApiConfig';
import { useNavigate } from 'react-router-dom';
import BsStarFill from "../CSS/star";
import AiFillHome from "../CSS/logo";

function DocHome() {
    let navigate = useNavigate();
    let { user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole } = useContext(UserContext);
    let [loading, setLoading] = useState(true);
    let [doc, setDoc] = useState([]);

    useEffect(() => {
        if (user == null) {
            setUser(() => JSON.parse(localStorage.getItem("user_data")));
            setToken(() => localStorage.getItem("access_token"));
            setRefreshToken(() => localStorage.getItem("refresh_token"));
        }
        //console.log(user);
        fetchData();
    }, [])

    async function fetchData() {
        let resp = await axiosClient.get(`/doctor/${user._id}`);
        setDoc(() => resp.data[0]);
        console.log(resp.data[0]);
        setLoading(false);
    }

    return (
        <div className='book-cont'>
            <div className="phome-top">
                <div className="phome-logo" onClick={() => { navigate(`/${role}/home`) }}>
                    DocSeek <AiFillHome />
                </div>
                <div className='bttn-cont'>
                    <button className='appoint-bttn' onClick={() => navigate(`/${role}/appoints`)}>Appointments</button>
                    <button className='logout-bttn' onClick={() => logout()}>Logout</button>
                </div>
            </div>
            {
                loading ? <h1 style={{ margin: "0 auto" }}>loading...</h1> :
                    <div className="book-bottom">
                    </div>
            }
        </div>
    )
}

export default DocHome