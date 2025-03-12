const assets = {
    backgrounds: [
        { img: new URL("../assets/bg1.jpg", import.meta.url).href, text: "Reliable Cargo Transport" },
            { img: new URL("../assets/bg2.jpg", import.meta.url).href, text: "Fast & Secure Deliveries" },
            { img: new URL("../assets/bg3.jpg", import.meta.url).href, text: "Global Freight Solutions" },
    ],
    services: [
      { title: "Air Freight", img: "/images/air-freight.png" },
      { title: "Sea Freight", img: "/images/sea-freight.png" },
      { title: "Road Transport", img: "/images/road-transport.png" },
      { title: "Warehousing", img: "/images/warehousing.png" },
      { title: "Customs Clearance", img: "/images/customs-clearance.png" },
      { title: "E-commerce Logistics", img: "/images/ecommerce-logistics.png" },
    ],
    aboutUsImg: "/images/about-us.jpg",
    globalShippingImg: "/images/global-shipping.png",
  };
  
  export default assets;
  