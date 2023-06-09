//import { getAllRooms } from "../actions/roomActions";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
//import Error from "../components/Error";
import 'antd/dist/antd.min.css';
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const user = JSON.parse(localStorage.getItem("currentuser"));

function Homescreen() {
  const { roomtype } = useParams();
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [formdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [searchkey, setsearchkey] = useState('');
  const [type, settype] = useState('all');
  // const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);

        // const data = dispatch(getAllRooms)
        const data = (await api.get("/api/rooms/getallrooms")).data;

        setrooms(data);
        setduplicaterooms(data);
        setloading(false);

      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    }
    fetchData();
  }, []);

  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))

    var temprooms = []
    var availablity = false;

    for (const room of duplicaterooms) {

      if (room.currentbookings.length > 0) {
        for (var booking of room.currentbookings) {
          if (!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
            && !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
          ) {

            if (
              moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
            ) {
              availablity = true;
            }
          }
          setrooms(temprooms)
        }
      }

      if (availablity === true || room.currentbookings.length === 0) {
        temprooms.push(room)
      }

    }
  }

  function filterBySearch() {
    const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()))
    setrooms(temprooms);
  }

  function filterByType(e) {

    settype(e);

    if (e !== 'all') {
      const temprooms = duplicaterooms.filter(room => room.venuetype.includes(e.toString()))
      setrooms(temprooms);
    }
    else {
      setrooms(duplicaterooms)
    }
  }
  return (
    <div className="container">

      <div className="row mt-3 bs">

        <div className="col-md-3">
          <select className="form-control" value={type} onChange={(e) => { filterByType(e.target.value) }}>
            <option value="all">All Venues</option>
            <option value="Marriage Hall">Marriage Hall</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Pool Party">Party Hall</option>

          </select>
        </div>


        <div className="col-md-5">
          <input type="text" className="form-control" placeholder="Search Venue"
            value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBySearch} />
        </div>
        <div className="col-md-3">
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
        </div>
      </div>


      {user ? (
        <>
          {error ? (<h1>Error in screen</h1>) : (
            <div className="row justify-content-center mt-5">
              {loading ? (
                <Loader />
              ) : (

                rooms.map((room) => {
                  return <div className="col-md-9 mt-1 mb-2" >
                    {roomtype}
                    <Room room={room} fromdate={formdate} todate={todate} />
                    
                  </div>;
                  
                })
              )}
            </div>
          )}
        </>
      ) : (
        <>
        <Room room={
                      {
                        name:"OSR Royal Green Resort",
                        maxguest:"200",
                        phonenumber:"XXXX XXXX XXX",
                        venuetype:"Wedding Venue",
                        imageurls:[
                        "https://image.wedmegood.com/resized/450X/uploads/member/1229022/1588235348_Screenshot_from_2020_04_30_13_58_34.png"
                      ],
                        venuedetails:"The idol Venue place to take care of your part and its delicacies"
                      }
                    }/>
          <div className="row justify-content-center">
            <div className="col-md-5">
            
              <div className='bs forms'>
              <h4>Login or Register to MyVenue</h4>
              
              <div className="homebuttons">
              
                
                
                  <Link to="/login">
                    <button className="btn btn-primary">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-primary">
                      Register Now
                    </button>
                  </Link>
                </div>

              </div>
            </div>


          </div>
        </>
      )}



    </div>
  );
}

export default Homescreen;