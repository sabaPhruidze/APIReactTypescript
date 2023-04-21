import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../images/zotac.jpg";
import slider2 from "../../images/viper.jpg";
import slider3 from "../../images/laptop.jpg";
import slider4 from "../../images/microlabJustListen.jpg";
import slider5 from "../../images/acme.jpg";
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
