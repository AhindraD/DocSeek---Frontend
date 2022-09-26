import React from 'react'
import "../CSS/book.css"
import { useEffect, useState, useContext, useRef } from 'react'
import { UserContext } from "../Contexts/UserContext";
import axiosClient from '../ApiConfig';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookFill() {
    const navigate = useNavigate();
    const { docID } = useParams();
    let { user, setUser, token, setToken, refreshToken, setRefreshToken, logout, role, setRole } = useContext(UserContext);
    let [loading, setLoading] = useState(true);
    let [doc, setDoc] = useState([]);
    let [preNote, setPreNote] = useState([]);
    let [slot, setSlot] = useState("");

    const [value, onChange] = useState(new Date());

    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const TIME_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

    useEffect(() => {
        if (user == null) {
            setUser(() => JSON.parse(localStorage.getItem("user_data")));
            setToken(() => localStorage.getItem("access_token"));
            setRefreshToken(() => localStorage.getItem("refresh_token"));
        }
        fetchData();
    }, [])

    async function fetchData() {
        let resp = await axiosClient.get(`/doctor/${docID}`);
        setDoc(() => resp.data[0]);
        console.log(resp.data[0]);
        setLoading(false);
    }

    function bookNow() {
        //console.log(value.getDay());//Mon Sep 26 2022 10:13:32 GMT+0530 (India Standard Time)
    }

    return (
        <div className='book-cont'>
            <div className="phome-top">
                <div className="phome-logo" onClick={() => { navigate("/home") }}>
                    DocSeek
                </div>
                <button className='logout-bttn' onClick={() => logout()}>Logout</button>
            </div>
            {loading ? <h1 style={{ margin: "0 auto" }}>loading...</h1> :
                <div className="book-bottom">
                    <div className="book-left">
                        <div className="calendar">
                            <Calendar onChange={onChange} value={value} minDate={new Date()} />
                        </div>
                    </div>

                    <div className="book-right">
                        <div className="row1">
                            <div className="r1c1">
                                <img src={doc.imageURL} alt="" />
                            </div>
                            <div className="r1c2">
                                <p className="doc-name">{doc.name}, &nbsp; <b>{doc.qualification}</b> </p>
                                <p className="doc-spec">{doc.speciality}, &nbsp; <b>{doc.hospital}</b></p>
                            </div>
                            <div className="r1c3">
                                <input type="text" placeholder='A brief about your condition' onChange={(e) => {
                                    setPreNote(() => e.target.value)
                                }} />
                            </div>
                            <button className='book-bttn' onClick={() => bookNow()}>Book</button>
                        </div>
                        <div className="row2">
                            <p className="chosen-day">{value.toDateString()}, Availability:</p>
                            <div className="all-slots">
                                {TIME_SLOTS.map((elem, index) => {
                                    return (
                                        <div
                                            className={`${(doc.time.includes(elem) && doc.days.includes(DAYS[value.getDay()])) ? slot === elem ? "selected-box" : "slot-box" : "disabled-box"}`}
                                            key={index}
                                            onClick={() => setSlot(elem)}>
                                            {elem}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BookFill