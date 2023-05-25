
import React from "react";
import "./ImgCarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import balea from "../../assets/balea-lake.jpg";
import bigar from "../../assets/bigar-waterfall.jpg";
import bran from "../../assets/bran-castle.jpeg";
import Citadel from "../../assets/Citadel-Rasnov-Romania.jpg";
import peles from "../../assets/peles-castle.jpg";
import poenari from "../../assets/poenari-castle.jpg";
import sibiu from "../../assets/sibiu.jpg";
import sighisoara from "../../assets/sighisoara.jpg";
import transfagarasan from "../../assets/transfagarasan-highway.jpg";
import voronet from "../../assets/voronet-monastery.jpg";
import timisoara from "../../assets/timisoara.jpg";

function ImgCarousel() {
  return (
    <div className="container">
      <h2 className="hbold">Touristic Places!!!</h2>
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={balea} alt="/" />
          <p className="text">
            <b>Balea Lake</b> - Balea Lake is a glacier lake in the Fagaras
            Mountains (not too far away from Poenari Castle), located in the
            central area of Romania. Anyone can easily rent a car in Romania and
            drive on the Transfagarasan Highway during the summer, and for the
            colder months, by cable car from Balea. Well worth the drive,
            everyone who visits is blown away by the stunning scenery. Stay in
            one of the few hotels in the area and visit the restaurants that
            allow you to look out onto rolling mountains and gleaming lake.
          </p>
        </div>
        <div>
          <img src={bigar} alt="/" />
          <p classname="text">
            <b>Bigar Waterfall</b> - This is perhaps the most unique site to be
            seen in Romania. Located in Caras-Severin County, people all over
            the world come to see the amazing Bigar Waterfall with its unusual
            roaring falls. A popular landmark in Northern Romania, Bigar
            Waterfall flows over the peak of a large rounded stone where the
            water is then cut into small slivers and pushed off as miniature
            streams. A breathtaking place that is hard to step away from, this
            is a must see for any traveler!
          </p>
        </div>
        <div>
          <img src={bran} alt="/" />
          <p classname="text">
            <b>Bran Castle</b> - Commonly known as Dracula's Castle; narrow
            winding stairways lead through some of the storybook-like rooms,
            underground passages, old fashioned and antique furniture, weapons,
            and armor all from centuries ago. The castle overlooks the scenic
            village of Bran and is now a museum open to tourists, displaying art
            and sculptures collected by Queen Marie (the last queen of Romania).
          </p>
        </div>
        <div>
          <img src={Citadel} alt="/" />
          <p classname="text">
            +<b>Citedal Rasnov</b> - Situated on the Brasov-Rucar-Campulung
            road, Hotels in RasnovRasnov Citadel is one of the best preserved
            rustic citadels from Transylvania. Rasnov Citadel was at first
            called “Rustic Citadel”, because the main occupation of its
            constructors was agriculture.
          </p>
        </div>


        <div>
          <img src={peles} alt="/" />
          <p classname="text">
            <b>Peles Castle</b> - Travelers can find this unique castle in the
            city of Sinaia, at the end of a beautiful forest path and set atop a
            hill in the mountains. Peles Castle has everything to offer in
            ornate architecture design and detail oriented pieces throughout.
            Grand wooden spiral staircases, odd statues and strange art, hidden
            doors with secret rooms, and a stain-glass roof that can be opened
            up during the summer are all some of the magical things you'll come
            across while site seeing here.
          </p>
        </div>
        <div>
          <img src={poenari} alt="/" />
          <p classname="text">
            <b>Poenari Castle</b> - If climbing almost 1,500 concrete steps on
            the way* to a quixotic castle sounds appealing, then Peonari Castle
            is a must see while in Romania. Not only does it offer a little
            adventure and ancient architecture, the cliff-side ruined castle has
            quite the blood-stained history attached to it. Poenari Castle can
            be found on the right side of the Transfagarasan Highway on a rock
            face near the Carpathian Mountains. Part of the castle was actually
            destroyed during a landslide back in the 1800's, but has been
            restored and maintained so that visitors can see it in all of its
            glory today.
          </p>
        </div>
        <div>
          <img src={sibiu} alt="/" />
          <p classname="text">
            <b>Sibiu</b> - People come from all over the country come to see the
            distinguished architecture that is seen in Upper town and Lower
            town, Sibiu. Lined with colorful houses on cobblestone streets and
            defense towers overlooking the Cibin river; this Romanian city
            embodies the strength and beauty seen all over the country.
            Attractions in the city include three 15th century towers, multiple
            historical squares, Roman-Catholic churches (most famous being the
            Biserica Romano-Catolica), and the Brukenthal Palace.
          </p>
        </div>
        <div>
          <img src={sighisoara} alt="/" />
          <p classname="text">
            <b>Sighisoara</b> - Located in the historic region of Transylvania,
            Sighisoara still stands as one of the most beautiful medieval towns
            in Europe. Attractions include the birthplace of Vlad Dracula (the
            inspiration for Bram Stoker's fictional creation, Count Dracula),
            the Church on the Hill with its picturesque murals, the 13th century
            Venetian House, and the Church of the Dominican Monastery. Those
            looking for classical and romantic history will find it all here!
          </p>
        </div>
        <div>
          <img src={timisoara} alt="/" />
          <p classname="text">
            <b>Timisoara</b> - As the largest city in Western Romania, visiting
            Timisoara is a must and number 7 on our list of places to visit in
            Romania. The charm of this city, which is located on the northern
            bank of the Bega River, lies in its distinct architectural character
            and vibrant cultural life. Most visitors find the locals calling it
            'Little Vienna,' which makes sense if you've seen the glistening
            city in Austria. Timisoara is home to some of the best musical and
            theatrical performances in Romania, as well as art galleries,
            museums, and a buzzing nightlife.
          </p>
        </div>
        <div>
          <img src={transfagarasan} alt="/" />
          <p classname="text">
            <b>Transfagarasan Hihgway</b> - Winding roads, slightly terrifying
            hills, and breathtaking scenery all make up the Transfagarasan
            Highway. At number 3 on our list of places to visit in Romania,
            taking the time to travel on this amazing road is well worth it.
            There are numerous villages and towns on both sides of the highway
            offering hot meals and great views while you relax during your trip,
            as well as quaint hotels and many camp sites for the more slightly
            adventurous. Venerable motoring publication, Top Gear, called the
            Transfagarasan highway one of the best driving roads in the world,
            on par with Italy's famous Stelvio Pass, so if you're in the driving
            spirit, pick up a sports or luxury car rental and really let the
            valves open up the twists and turns of this famous roadway.
          </p>
        </div>

        {/* Rest of the carousel items */}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
