import RestroCard from "./RestroCard";
import { useState } from "react";
import resList from "../utils/mockData";



const BodyComp = () => {
    //local state variables - superpowerful variables ---> maintains the state of your component
    const [restaurantList, setrestaurantList] = useState(resList);

    //Can also be written as below. This is called as array destructuring
    // const arr = useState(resList);
    // const [restaurantList, setrestaurantList] = arr;

    //Can also be written as below. This is called as array destructuring
    // const arr = useState(resList);
    // const restaurantList = arr[0];
    // const setrestaurantList = arr[1];

    //normal JS variable
    let restaurantListJS = [
        {
            data: {
                id: 1,
                name: "Meera Hotel",
                cuisines: ["Indian", "Continental", "Italian"],
                costForTwo: 40000,
                avgRating: 3.3,
                eta: 25,
                imgCode: 1279330,
                altText: "Meera Hotel Img",
            }
        },
        {
            data: {
                id: 2,
                name: "Mxyzeera Hotel",
                cuisines: ["Indian", "Continental", "Italian"],
                costForTwo: 40000,
                avgRating: 4.3,
                eta: 25,
                imgCode: 1279330,
                altText: "Meera Hotel Img",
            }
        },
        {
            data: {
                id: 3,
                name: "xyz Hotel",
                cuisines: ["Indian", "Continental", "Italian"],
                costForTwo: 40000,
                avgRating: 4.7,
                eta: 25,
                imgCode: 1279330,
                altText: "Meera Hotel Img",
            }
        },
    ];
    return (<div className="body">
        <div className="search-container">
            <input type="text" placeholder="Search"></input>
            <button>Search</button>
            <button className="filter-btn" onClick={() => {
                const updatedList = restaurantList.filter(
                    (restaurant) => restaurant.data.avgRating > 4
                );
                setrestaurantList(updatedList);
                // console.log(restaurantList);
            }}>

                Top Rated Restaurants</button>
        </div>

        <div className="restro-container">
            {
                restaurantList.map((restaurant) => (<RestroCard key={restaurant.data.id} resData={restaurant} />))
                // restaurantList.map((restaurant, index) => (<RestroCard key={index} resData={restaurant} />))
            }

            {/* <RestroCard resData = {resList[0]}/>
        <RestroCard resData = {resList[1]} />
        <RestroCard resData = {resList[2]}/>
        <RestroCard resData = {resList[3]} />
        <RestroCard resData = {resList[4]}/>
        <RestroCard resData = {resList[5]} />
        <RestroCard resData = {resList[6]}/> */}
        </div>
    </div>
    )
}

export default BodyComp;