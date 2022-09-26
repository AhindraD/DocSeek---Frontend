import React from 'react'
import "../CSS/patAppoint.css"
import { useEffect, useState, useContext, useRef } from 'react'
import { UserContext } from "../Contexts/UserContext";
import axiosClient from '../ApiConfig';
import { useNavigate } from 'react-router-dom';
import BsStarFill from "../CSS/star";
import AiFillHome from "../CSS/logo";

function DocAppoints() {
    let navigate = useNavigate();
    let { user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole } = useContext(UserContext);
    let [loading, setLoading] = useState(true);
    let [appoints, setAppoints] = useState([]);//"upcoming","completed","cancelled"

    useEffect(() => {
        if (user == null) {
            setUser(() => JSON.parse(localStorage.getItem("user_data")));
            setToken(() => localStorage.getItem("access_token"));
            setRefreshToken(() => localStorage.getItem("refresh_token"));
        }
        fetchData();
    }, [])

    async function fetchData() {
        let resp = await axiosClient.get("/appoint/doctor/632f92b97b29c625b94b26ae");
        setAppoints(() => resp.data);
        console.log(resp.data);
        setLoading(false);
    }

    return (
        <div className='phome-cont'>
            <div className="phome-top">
                <div className="phome-logo" onClick={() => { navigate(`/doctor/home`) }}>
                    DocSeek <AiFillHome />
                </div>
                <div className='bttn-cont'>
                    <button className='appoint-bttn' onClick={() => navigate(`/doctor/appoints`)}>Appointments</button>
                    <button className='logout-bttn' onClick={() => logout()}>Logout</button>
                </div>
            </div>
            <p className='u-appoint'>Your Appointments</p>
            {
                loading ? <h1 style={{ margin: "0 auto" }}>loading...</h1> :
                    <div className="appoint-bottom">
                        <div className="appoint-upcoming">
                            <div className="upcoming">UPCOMING</div>

                            <div className="upcoming-cont">
                                {appoints.map((elem, i) => {
                                    if (elem.status !== "upcoming") { return }
                                    return (
                                        <div className="up-ind" key={i}>
                                            <div className="up-c1">
                                                <img src={elem.patient.imageURL} alt="" />
                                            </div>
                                            <div className="up-c2">
                                                <p> <b>Patient: {elem.patient.name}</b> </p>
                                                <p><b>Patients' note:</b>  {elem.prenote}</p>
                                            </div>
                                            <div className="up-c3">
                                                <div className="up-c3r1">Time: {elem.time}</div>
                                                <div className="up-c3r2">Date: {elem.date}</div>
                                            </div>
                                            <button className='done-appoint'>Done</button>
                                        </div>
                                        
                                    )
                                })}
                            </div>
                        </div>
                        <div className="appoint-completed">
                            <div className="completed">COMPLETED</div>
                            <div className="completed-cont">
                                {appoints.map((elem, i) => {
                                    if (elem.status !== "completed") { return }
                                    return (
                                        <div className="com-ind" key={i}>
                                            <div className="up-c1">
                                                <img src={elem.patient.imageURL} alt="" />
                                            </div>
                                            <div className="up-c2">
                                                <p> <b>Patient: {elem.patient.name}</b> </p>
                                                <p><b>Your note:</b>  {elem.presciption}</p>
                                            </div>
                                            <div className="up-c3">
                                                <div className="up-c3r1">Time: {elem.time}</div>
                                                <div className="up-c3r2">Date: {elem.date}</div>
                                            </div>
                                            
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default DocAppoints