import React,{useState,useEffect} from 'react'
import api from "../axios";
import { useParams } from "react-router-dom";
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';

function Bookingscreen({match}) {
    const [room, setroom] = useState();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();    
    const { roomid } = useParams();
    const { fromdate } = useParams();
    const { todate } = useParams();
    const fromdates = moment(fromdate , 'DD-MM-YYYY')
    const todates = moment(todate , 'DD-MM-YYYY')
    const totaldays = moment.duration(todates.diff(fromdates)).asDays()+1
    const [totalamount , settotalamount] = useState();

    useEffect(() => {
      async function fetchData() {
        if(!localStorage.getItem('currentuser')){
          window.location.reload = '/login';
        }
        try {
            setloading(true);
            const data = (await api.post("/api/rooms/getroombyid" , {roomid})).data;
            settotalamount(data.venuecost * totaldays);
            setroom(data);
            setloading(false);
        } catch (error) {
            setloading(false);
            seterror(true);
        }
      }
      fetchData();
    }, []);

    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        
        script.onload = () => {
          resolve(true)
        }
        script.onerror = () => {
          resolve(false)
        }
        document.body.appendChild(script)
      })

    }
    
    const displayRazorpay = async (amount) => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if (!res) {
        alert('You are Offline... Failed to load Razorpay SDK')
        return

      }

      const options = {
        key: "rzp_test_H63g1IgCeYlsC3",
        currency: "INR",
        amount: totalamount *100,
        name: "MyVenue",
        description: "payment of the venue",
        image: '',
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert("Payment Successfully")
        },
        prefill:{
          name: "MyVenue"
        }

      };
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }
    
    async function onToken(token){
      console.log(token);
      const bookingDetail ={
        room,
        userid:JSON.parse(localStorage.getItem('currentuser'))._id,
        fromdate,
        todate,
        totalamount,
        totaldays,
      
      };

      try {
        const result = await api.post('/api/bookings/bookroom',bookingDetail );
        window.location.href = '/profile'
      } catch (error) {
        console.log(error);
      }
    }

    


  return (
    <div className='m-5' data-aos="flip-left">
      {loading ? (<h1><Loader/></h1>) : room ? (<div>
        <div className="row justify-content-center my-3 bs">
            <div className="col-md-6 my-2">
                <h1>{room.name}</h1>
                <img src={room.imageurls[0]} alt="something" className='bigimgs'/>
            </div>
            <div className="col-md-4 ">
              <div style={{textAlign : 'right'}}>
                <h1>Booking details</h1>
                <hr />
                <b>
                  <p>Name: {JSON.parse(localStorage.getItem('currentuser')).name}</p>
                  <p>From date: {fromdate}</p>
                  <p>To date: {todate}</p>
                  <p>Max count: {room.maxguest}</p>
                </b>
                </div>
                <div style={{textAlign : 'right'}}>
                  <h1>Amount</h1>
                  <hr />
                  <b>
                    <p>Total days: {totaldays} </p>
                    <p>Rent per day: {room.venuecost}</p>
                    <p>Total amount: {(room.venuecost * totaldays)} </p>
                  </b>
                </div>
                <div style={{float : 'right'}}>
                  
                    <button className='btn btn-primary' onClick={() => displayRazorpay(totalamount)}>
                      Pay now{" "}
                    </button>

                </div>
            </div>
        </div>
      </div>) : (<Error/>) }
    </div>
  )
}

export default Bookingscreen