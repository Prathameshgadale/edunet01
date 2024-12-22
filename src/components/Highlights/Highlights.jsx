import React from "react";
import "./Highlights.css";

const Highlights = () => {
  const destinations = [
    {
      name: "Paris, France",
      description: "The city of lights and love.",
      price: "$1200",
      link: "https://en.parisinfo.com/",
    },
    {
      name: "Tokyo, Japan",
      image: "https://w0.peakpx.com/wallpaper/123/209/HD-wallpaper-tokyo-street-modern-buildings-night-asia-japan-thumbnail.jpg",
      description: "A perfect blend of tradition and technology.",
      price: "$1500",
      link: "https://www.gotokyo.org/en/",
    },
    {
      name: "New York, USA",
      image: "https://w0.peakpx.com/wallpaper/949/591/HD-wallpaper-statue-of-liberty-liberty-island-new-york-world-trade-center-1-new-york-cityscape-new-york-city-skyline-skyscrapers-liberty-enlightening-the-world-usa.jpg",
      description: "The city that never sleeps.",
      price: "$1000",
      link: "https://www.nycgo.com/",
    },
    {
      name: "Santorini, Greece",
      image: "https://w0.peakpx.com/wallpaper/483/57/HD-wallpaper-santorini-thira-island-aegean-sea-greece-romantic-place-sunset-evening-white-city-thumbnail.jpg",
      description: "Stunning sunsets and whitewashed buildings.",
      price: "$1400",
      link: "https://www.santorini.net/",
    },
    {
      name: "Sydney, Australia",
      image: "https://w0.peakpx.com/wallpaper/566/668/HD-wallpaper-sydney-harbour-sydney-opera-cityscapes-summer-pier-australia-thumbnail.jpg",
      description: "The iconic Sydney Opera House and beaches await.",
      price: "$1300",
      link: "https://www.sydney.com/",
    },
    {
        name: "Cape Town, South Africa",
        image: "https://w0.peakpx.com/wallpaper/396/657/HD-wallpaper-cape-town-panorama-coast-stadium-south-africa-thumbnail.jpg",
        description: "Breathtaking landscapes and a rich cultural heritage.",
        price: "$1100",
        link: "https://www.capetown.travel/",
      },
      {
        name: "Rio de Janeiro, Brazil",
        image: "https://w0.peakpx.com/wallpaper/515/847/HD-wallpaper-christ-the-redeemer-rio-brazil-nature-thumbnail.jpg",
        description: "Vibrant beaches and the iconic Christ the Redeemer.",
        price: "$1250",
        link: "https://www.visitbrasil.com/",
      },
      {
        name: "Dubai, UAE",
        image: "https://w0.peakpx.com/wallpaper/116/690/HD-wallpaper-dubai-2015-city-uae.jpg",
        description: "Luxury shopping and ultramodern architecture.",
        price: "$1600",
        link: "https://www.visitdubai.com/",
      },
  ];

  return (
    <section className="highlights">
      <div className="container">
        <h2 className="section__subtitle">Explore Our Top Destinations</h2>
        <div className="highlights__grid">
          {destinations.map((destination, index) => (
            <div className="highlight__card" key={index}>
              <img
                src={destination.image}
                alt={destination.name}
                className="highlight__image"
              />
              <div className="highlight__info">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <p className="highlight__price">{destination.price}</p>
                <button className="primary__btn">
                  <a href={destination.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;