import Carousel from "react-bootstrap/Carousel";

import slider1 from "../../images/zotac.jpg";
import slider2 from "../../images/viper.jpg";
import slider3 from "../../images/laptop.jpg";
import slider4 from "../../images/microlabJustListen.jpg";
import slider5 from "../../images/acme.jpg";

import cardBlack1 from "../../images/cards/1. darkLaptop.jpg";
import cardWhite1 from "../../images/cards/1. lightLaptop.jpg";
import cardBlack2 from "../../images/cards/2.darkProcessor.jpg";
import cardWhite2 from "../../images/cards/2. whiteProcessor.jpg";
import cardBlack3 from "../../images/cards/3.TV black and white.png";
import cardWhite3 from "../../images/cards/3.TV black and white.png";
import cardBlack4 from "../../images/cards/4.androidblack.png";
import cardWhite4 from "../../images/cards/4.androidwhite.png";
import cardBlack5 from "../../images/cards/5.android.jpg";
import cardWhite5 from "../../images/cards/5.androidwhite.png";
import cardBlack6 from "../../images/cards/6.blackMouse.jpg";
import cardWhite6 from "../../images/cards/6. whiteMouse.png";
import cardBlack7 from "../../images/cards/7. keyboard.jpg";
import cardWhite7 from "../../images/cards/7.white keyboard.jpg";
import cardBlack8 from "../../images/cards/8.smartWatch.jpg";
import cardWhite8 from "../../images/cards/8.smartWatchWhite.png";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./HTCCH.module.css";
function CarouselFade(props: any) {
  const caruselData = [
    {
      image: slider1,
      alt: "first Slide",
      title: "Zotac",
      text: "graphics cards, mini PCs, and other gaming and computing devices.",
    },
    {
      image: slider2,
      alt: "second Slide",
      title: "Patriot memory",
      text: "computer memory modules and solid-state drives (SSDs)",
    },
    {
      image: slider3,
      alt: "third Slide",
      title: "DELL",
      text: "Choose your favorite laptop",
    },
    {
      image: slider4,
      alt: "fourth Slide",
      title: "Microlab",
      text: "Best headphones and earphones",
    },
    {
      image: slider5,
      alt: "five Slide",
      title: "Acme",
      text: "AppleWatch,AR,VR and lots of more amazing things",
    },
  ];
  const CardData = [
    {
      imgWhite: cardWhite1,
      imgBlack: cardBlack1,
      title: "Laptop",
      content:
        "Purpose: What will you be using the laptop for? If you need it for basic tasks such as web browsing, email, and word processing, a lower-end model will suffice.",
    },
    {
      imgWhite: cardWhite2,
      imgBlack: cardBlack2,
      title: "Processor",
      content:
        'A processor, also known as a Central Processing Unit (CPU), is an electronic component in a computer system that performs most of the processing tasks required by the system. It is often referred to as the "brain" of the computer.',
    },
    {
      imgWhite: cardWhite3,
      imgBlack: cardBlack3,
      title: "TV",
      content:
        "In 2021, some of the top brands of TVs included Samsung, LG, Sony, TCL, and Vizio, all of which are recognized for their high-quality displays, advanced features, and innovative technology. Among these brands, Samsung stood out as a leader in the TV market, offering a diverse range of models with cutting-edge features such as 8K resolution, Quantum Dot technology, and advanced upscaling capabilities. Samsung's QLED and Neo QLED TV models were especially popular in 2021, showcasing the company's commitment to delivering exceptional picture quality and performance.",
    },
    {
      imgWhite: cardWhite4,
      imgBlack: cardBlack4,
      title: "Androids",
      content:
        "Android is a mobile operating system created by Google and first released in 2008. It is designed primarily for use on smartphones and tablets, and has become the most widely used operating system in the world, powering billions of devices worldwide. Some notable features of Android include its intuitive user interface, customizable home screens, and access to a vast library of apps available for download from the Google Play Store. These features, along with its flexibility and open-source nature, make Android a popular choice among users and developers alike.",
    },
    {
      imgWhite: cardWhite5,
      imgBlack: cardBlack5,
      title: "Androids",
      content:
        "Android is a mobile operating system created by Google and first released in 2008. It is designed primarily for use on smartphones and tablets, and has become the most widely used operating system in the world, powering billions of devices worldwide. Some notable features of Android include its intuitive user interface, customizable home screens, and access to a vast library of apps available for download from the Google Play Store. These features, along with its flexibility and open-source nature, make Android a popular choice among users and developers alike.",
    },
    {
      imgWhite: cardWhite6,
      imgBlack: cardBlack6,
      title: "Mouse",
      content:
        "A mouse is an input device used to move a cursor or pointer on a computer screen. It typically consists of a small, handheld device with one or more buttons and a scrolling wheel. The mouse is moved across a surface to control the movement of the cursor on the screen. It is an essential component of most computer systems and is used for a wide range of tasks, from navigating menus to playing games.",
    },
    {
      imgWhite: cardWhite7,
      imgBlack: cardBlack7,
      title: "Keyboard",
      content:
        "A keyboard is an input device used to enter text and commands into a computer or other electronic device. It typically contains a set of alphanumeric keys, as well as function keys, arrow keys, and a numeric keypad. Keyboards can be wired or wireless, and may include additional features such as multimedia keys, programmable keys, and backlit keys. Keyboards are an essential component of most computer systems and are used for a wide range of tasks, from typing documents to playing games.",
    },
    {
      imgWhite: cardWhite8,
      imgBlack: cardBlack8,
      title: "SmartWatch",
      content:
        "A smartwatch is a wearable device that offers functionality beyond traditional timekeeping. It typically connects to a smartphone or other device via Bluetooth or Wi-Fi, allowing users to receive notifications, make calls, and access a range of apps and features directly from their wrist.",
    },
  ];
  const { cSM } = props;
  return (
    <div className={styles.homeContainer}>
      <Carousel fade>
        {caruselData.map((data) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={data.image}
              alt={data.alt}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        style={{
          width: "95%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        className={styles.cardContainer}
      >
        {CardData.map((data) => (
          <Card className={cSM ? styles.cardWhite : styles.cardBlack}>
            <Card.Img
              variant="top"
              src={cSM ? data.imgWhite : data.imgBlack}
              className={cSM ? styles.cardImgBgcWhite : styles.cardImgBgcBlack}
            />
            <Card.Body
              className={cSM ? styles.cardBgcWhite : styles.cardBgcBlack}
            >
              <Card.Title style={cSM ? { color: "black" } : { color: "white" }}>
                {data.title}
              </Card.Title>
              <Card.Text
                className={cSM ? styles.cardTextWhite : styles.cardTextBlack}
              >
                {data.content}
              </Card.Text>
              <Button variant="primary">See more...</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarouselFade;
