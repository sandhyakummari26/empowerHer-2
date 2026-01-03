import { useEffect,useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard";
import {grtRestaurants, saveRestaurants} from "../utils/storage";

export default functionAdminDashboard(){
    const [data, setData]=useState([]);
    const nameRef=useRef();
    const navigate=useNavigate();

    useEffect(()=>{
        setData(getRestaurants());
    },[]);

    const addRestaurant=()=>{
        if(!nameRef.current.value)return alert("Empty form");

        const newData={
            restaurantID:Date.now(),
            restaurantname: nameRef.current.value,
            address:"Jaipur",
            type:"Rahjasthan",
            parkingLot:true;
            image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
        };

        
    }
}