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
  const { cSM } = props;
  return (
    <div className={styles.homeContainer}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Zotac</h3>
            <p>
              graphics cards, mini PCs, and other gaming and computing devices.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Patriot memory</h3>
            <p>computer memory modules and solid-state drives (SSDs) </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>DELL</h3>
            <p>Choose your favorite laptop</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Third slide"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Microlab</h3>
            <p>Best headphones and earphones</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider5}
            alt="Third slide"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Acme</h3>
            <p>AppleWatch,AR,VR and lots of more amazing things</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "30px 0 0 25px",
        }}
        className={styles.cardContainer}
      >
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            variant="top"
            src={cSM ? cardWhite1 : cardBlack1}
            style={{ width: "100%", height: "200px" }}
          />
          {/* s */}
          <Card.Body
            className={cSM ? styles.cardBgcWhite : styles.cardBgcBlack}
          >
            <Card.Title
              className={cSM ? styles.cardTitleWhite : styles.cardTitleBlack}
            >
              Laptop
            </Card.Title>
            <Card.Text>
              Purpose: What will you be using the laptop for? If you need it for
              basic tasks such as web browsing, email, and word processing, a
              lower-end model will suffice.
            </Card.Text>
            <Button variant="primary">See more...</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            variant="top"
            src={cSM ? cardWhite1 : cardBlack1}
            style={{ width: "100%", height: "200px" }}
          />
          <Card.Body
            className={cSM ? styles.cardBgcWhite : styles.cardBgcBlack}
          >
            <Card.Title
              className={cSM ? styles.cardTitleWhite : styles.cardTitleBlack}
            >
              Laptop
            </Card.Title>
            <Card.Text>
              Purpose: What will you be using the laptop for? If you need it for
              basic tasks such as web browsing, email, and word processing, a
              lower-end model will suffice.
            </Card.Text>
            <Button variant="primary">See more...</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            variant="top"
            src={cSM ? cardWhite1 : cardBlack1}
            style={{ width: "100%", height: "200px" }}
          />
          <Card.Body
            className={cSM ? styles.cardBgcWhite : styles.cardBgcBlack}
          >
            <Card.Title
              className={cSM ? styles.cardTitleWhite : styles.cardTitleBlack}
            >
              Laptop
            </Card.Title>
            <Card.Text>
              Purpose: What will you be using the laptop for? If you need it for
              basic tasks such as web browsing, email, and word processing, a
              lower-end model will suffice.
            </Card.Text>
            <Button variant="primary">See more...</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            variant="top"
            src={cSM ? cardWhite1 : cardBlack1}
            style={{ width: "100%", height: "200px" }}
          />
          <Card.Body
            className={cSM ? styles.cardBgcWhite : styles.cardBgcBlack}
          >
            <Card.Title
              className={cSM ? styles.cardTitleWhite : styles.cardTitleBlack}
            >
              Laptop
            </Card.Title>
            <Card.Text>
              Purpose: What will you be using the laptop for? If you need it for
              basic tasks such as web browsing, email, and word processing, a
              lower-end model will suffice.
            </Card.Text>
            <Button variant="primary">See more...</Button>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "30px 0 30px 25px",
        }}
        className={styles.cardContainer}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CarouselFade;
