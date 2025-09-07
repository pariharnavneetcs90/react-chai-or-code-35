//1st step
import { useEffect, useState } from "react";

//khud ka hook (useCurrencyInfo)
function useCurrencyInfo(currency ){
    //api calling

    //-----------------------------usestate
    const [data,setData] =useState({}) //deafault - empty object

    //useeffect - me 2 cheeze hoti hai 1st callback 2nd dependency -(is cheez me kuch change aye ga to mai wapsi api call karu ga)
    //useeffect(() => {},[])  // () => {} callback , [] dependency

    useEffect(()=>{
        // fech use hota hai api calling ke liye 
        //or fech me .this.this ki chaning bhi ho jati hai
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // currency ki jagha .inr or .usd bhi likh sakte hai 

        .then((responce)=> responce.json()) // jo fech ka responce aye ga usko json me conver kar liya 

        .then((jsonConvertedResponce) => setData(jsonConvertedResponce[currency])) // jsonConvertedResponce vo data hai jo orignal api ko json me conver kar ke aya hai 
        //jsonConvertedResponce ko regular variable me store kare ga to ui me upadate nahi ho ga to is liye useState le reha hai taki uska variable (setData) use kare sake 
        //[currency] kyo ki url ko acess karne ke lye(inr,usd likh ke acess kar sakte hai ) (https://latest.currency-api.pages.dev/v1/currencies/inr.json , https://latest.currency-api.pages.dev/v1/currencies/usd.json)

        console.log(data);//test
    } , [currency]) // ye dependancy hai iska matal ye hai kab kab api call ho gi , to [currency] diya hai to jab ye .inr ya .usd me change ho to api call ho (https://latest.currency-api.pages.dev/v1/currencies/inr.json , https://latest.currency-api.pages.dev/v1/currencies/usd.json)

    return data // ye data de raha hai matlab api de raha hai json Format me 
}
export default useCurrencyInfo;

// custom hook ban gaya hai jiska naam hai useCurrencyInfo
