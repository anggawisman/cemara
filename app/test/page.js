// import Image from "next/image";
"use client"
import ComingSoon from "@/Components/ComingSoon";
import Destination from "@/Components/Destination";
import Hero from "@/Components/Hero";
import Service from "@/Components/Service";
import Sticky from "@/Components/Sticky";

export default function Home() {
    useEffect(() => {
        console.log("TAIK try");
        getData();
      }, []);
    
      const getData = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Cookie", "_cfuvid=3MlSjZb3_x5EbRnFvzmLeoqnXkuoBLUefJzzydjR1mw-1716105665233-0.0.1.1-604800000");
            
            const requestOptions = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow"
            };
            
            fetch("https://www.topuniversities.com/rankings/endpoint?nid=3897789&page=&items_per_page=10&tab=indicators&region=Oceania&countries=&cities=&search=&star=&sort_by=&order_by=&program_type=", requestOptions)
              .then((response) => response.text())
              .then((result) => console.log("TAIK",result))
              .catch((error) => console.error("TAIK",error));
        } catch {
          console.log("TAIK ANYING LAH");
        }
      };
  return (
    <>
      {/* <ComingSoon /> */}
      <Hero />
      <Service />
      {/* <Sticky /> */}
      {/* <Destination /> */}
      {/* <></> */}
    </>
  );
}
