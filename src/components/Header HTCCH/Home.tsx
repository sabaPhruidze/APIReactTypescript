import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../images/zotac.jpg";
import slider2 from "../../images/viper.jpg";
import slider3 from "../../images/laptop.jpg";
import slider4 from "../../images/microlabJustListen.jpg";
import slider5 from "../../images/acme.jpg";
function CarouselFade(props: any) {
  const { cSM } = props;
  return (
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
  );
}

export default CarouselFade;
