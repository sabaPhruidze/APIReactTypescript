import { Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// I am going to use boostrap Scrollspy.Even trough there is no compilited version for react typescript I will do it using AI ,which is my first try but
// I think it will become an important tool in the future. After that I will correct it by myself
export default function Help(props: any) {
  const { cSM } = props;
  return (
    <div className="row" style={{ position: "relative" }}>
      <div
        style={{
          width: "12%",
          height: "100%",
          position: "fixed",
          top: "50px",
          left: "5px",
        }}
        className="nav-pills"
      >
        <Nav
          id="navbar-example3"
          className="h-100 flex-column align-items-stretch border-end"
        >
          <Nav.Item>
            <Nav.Link
              href="#item-1"
              style={{ fontSize: "18px" }}
              className="mt-3"
            >
              What we sell
            </Nav.Link>
            <Nav>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-1">
                  Laptop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-2">
                  Processor
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-3">
                  TV
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-4">
                  Android
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-5">
                  Apple
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-6">
                  Mouse
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-7">
                  Keyboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="ms-3 my-1" href="#item-1-8">
                  SmartWatch
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#item-2"
              style={{ fontSize: "18px" }}
              className="nav-pills"
            >
              Best selling items
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#item-3"
              style={{ fontSize: "18px" }}
              className="nav-pills"
            >
              For more info
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div
        style={{ width: "85%", marginLeft: "12%" }}
        className={cSM ? "mt-3 text-black" : "mt-3 text-white"}
      >
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          className="scrollspy-example-2"
          tabIndex={0}
        >
          <div id="item-1">
            <h4>What we sell</h4>
            <p>
              As a technology company, our primary focus is to create innovative
              and cutting-edge products that help solve problems, make life
              easier, and enhance the overall experience for our customers. We
              offer a wide range of technology solutions that are tailored to
              meet the unique needs of individuals and businesses across various
              industries. One of our core product lines is software development,
              where we specialize in creating custom software solutions for
              clients. Our team of experienced developers works closely with
              clients to understand their unique business requirements and
              create software that meets those needs. Whether it's a custom web
              application, mobile app, or desktop software, we have the
              expertise to deliver high-quality solutions that are both
              functional and user-friendly. In addition to software development,
              we also offer a range of IT services to help businesses streamline
              their operations and improve efficiency. This includes network
              management, cloud services, cybersecurity, and data backup and
              recovery. Our team of IT experts works with clients to assess
              their technology needs and provide tailored solutions that are
              both scalable and cost-effective. Another area of focus for us is
              hardware and electronics, where we design and develop new products
              that are designed to improve people's lives. From wearables and
              IoT devices to smart home automation systems, we are always
              exploring new and exciting ways to leverage technology to make
              life easier and more convenient for people. Finally, we also offer
              technology consulting services to help businesses develop and
              execute effective technology strategies. This includes everything
              from technology roadmapping and planning to project management and
              implementation. Overall, as a technology company, we are committed
              to helping our clients stay ahead of the curve by leveraging the
              latest technologies and trends to deliver innovative solutions
              that drive business growth and enhance the customer experience.
            </p>
          </div>
          <div id="item-1-1">
            <h5>Laptop</h5>
            <p>
              Introducing our latest laptop models - designed to elevate your
              productivity and creativity to the next level! With cutting-edge
              features and sleek designs, our laptops are built to meet the
              demands of modern work and play. From blazing-fast processors to
              immersive displays, our laptops deliver an exceptional experience
              that keeps you connected and inspired wherever you go. Whether
              you're a student, a professional, or a creative, our new models
              offer the perfect balance of performance and style to help you
              achieve your goals. Upgrade to the future of computing today with
              our latest laptop lineup!
            </p>
          </div>
          <div id="item-1-2">
            <h5>Processor</h5>
            <p>
              Experience lightning-fast performance and seamless multitasking
              like never before with our latest processor models. From advanced
              gaming to complex content creation, our processors are engineered
              to elevate your computing experience to the next level. With
              unmatched speed, power, and efficiency, you can unleash your full
              potential and achieve more in less time. Upgrade to our newest
              processor models today and unleash the true power of your device.
            </p>
          </div>
          <div id="item-1-3">
            <h5>TV</h5>
            <p>
              • Screen size - Larger screen sizes have become more popular and
              affordable. Things like 55 inches, 65 inches, 75 inches and more
              can make for an immersive viewing experience. Larger size TVs are
              good for larger audiences or those who want a theater-like
              experience at home.
            </p>
            <p>
              • 4K resolution - 4K has become the standard for high-quality TVs
              and is expected now. 4K delivers 4 times the resolution of regular
              1080p HD. This results in stunning, sharp and detailed images. 4K
              TVs are great for gaming, viewing 4K content or just having a more
              screen real estate.
            </p>
            <p>
              • High dynamic range - HDR provides better contrast, brighter
              highlights and richer colors. HDR10 and Dolby Vision are the main
              HDR formats. HDR10 is an open standard while Dolby Vision is
              licensed by Dolby. Either can provide major improvements in
              picture quality.{" "}
            </p>
            <p>
              • Wide color gamut - A wide color gamut allows a TV to produce a
              wider range of colors and more vibrant, lifelike images. Almost
              all TVs nowadays support 100% of the DCI-P3 wide color space.{" "}
            </p>
            <p>
              • Advanced refresh rates - Higher refresh rates of 120Hz or more
              can reduce motion blur in sports and action movies. Some high-end
              TVs offer rates of 240Hz or 480Hz for super-smooth motion.
              Variable refresh rates like NVIDIA G-SYNC are also now available
              on some TVs to eliminate stuttering and tearing.{" "}
            </p>
            <p>
              • Smart features - Nearly every TV now has built-in smart
              platforms with apps, streaming services and more. Things like
              Netflix, Hulu, Amazon Prime Video, YouTube and major apps are all
              available. Wi-Fi and Bluetooth connectivity as well as voice
              assistants like Amazon Alexa are also common.
            </p>
            <p>
              • Gaming features - For gamers, features like low input lag,
              variable refresh rates (for PC gaming), HDMI 2.1 ports (for new
              consoles), game modes and NVIDIA Reflex Latency Analysis
              compatibility would be good to highlight
            </p>
          </div>
          <div id="item-1-4">
            <h5>Android</h5>
            <p>
              • The latest version of Android - New Android phones will be
              running the latest release of Android, currently Android 11. This
              provides enhancements in performance, battery life, privacy and
              security, and new features across the interface, APIs and more.
            </p>

            <p>
              • Fast processors - Top Android phones now feature the latest
              octa-core processors from Qualcomm (Snapdragon 8 Series) and
              others. These provide incredible speeds for gaming, multitasking
              and running demanding apps with no lag.
            </p>

            <p>
              • Premium designs - High-end Android phones offer premium metal
              and glass builds, beautiful OLED displays, small cutout notches or
              punch-hole cameras and expansive screen-to-body ratios for an
              immersive experience. Some also have IP68 ratings for dust and
              water resistance.
            </p>

            <p>
              • Revolutionary displays - LTPO OLED screens, higher refresh rates
              up to 120Hz, HDR10+ for wider color ranges, higher contrast
              ratios, and more advanced screen features providing radically
              better visuals than ever before.
            </p>

            <p>
              • Advanced photography - Android phones now have multi-lens camera
              systems with up to 5 lenses including ultra-wide, wide angle,
              telephoto and macro. Night mode, 4K video up to 8K, 3D depth
              sensing, and enhanced computational photography provide
              professional-level photos.
            </p>

            <p>
              • Large batteries and fast charging - Most new Android phones have
              large 4000 mAh or more batteries for multi-day battery life. Fast
              charging up to 30 or even 50W provides quick recharging along with
              USB Power Delivery and wireless charging.
            </p>

            <p>
              • 5G connectivity - Nearly all flagship Android phones support the
              latest 5G cellular connectivity, including mmWave and sub-6 GHz
              5G. This provides download speeds 100-200 times faster than 4G
              devices.
            </p>

            <p>
              • Speaker audio - High-end phones often have advanced speakers
              with features like Dolby Atmos surround sound, Dirac can improve
              sound depths, amplifiers that provide louder volume and enhance
              sound quality.
            </p>

            <p>
              • Enhanced security - Options like in-display fingerprint readers,
              3D facial recognition, and on-screen fingerprint sensors provide
              convenient yet secure ways to unlock phones and set permissions.
            </p>
          </div>
          <div id="item-1-5">
            <h5>Apple</h5>
            <p>
              Apple revolutionized the smartphone with the introduction of the
              iPhone. Their sleek, elegant devices provide an unparalleled user
              experience powered by iOS, the world's most advanced mobile
              operating system. Each new generation of iPhones features faster
              processors, better cameras, more advanced displays and innovative
              new features that enrich and enhance life's moments. iPhone 14,
              iPhone 14 Pro and iPhone 14 Pro Max were recently released,
              delivering incredible new capabilities. The high-performance A13
              Bionic chip is the fastest chip in a smartphone and provides
              blazing-fast speed and responsiveness for playing games, editing
              4K video and more. An advanced dual-lens system lets you take
              wider landscape photos and stunning pro-quality portraits in
              tightly controlled studio lighting conditions. Night mode brings
              lost details and brighter textures to your night shots, while
              QuickTake allows impromptu video recording without launching the
              camera app first. Powerful enhanced security features like Face ID
              unlock your phone instantly while keeping it safe from intruders.
              Pro models take photography to the next level with a triple-lens
              system that provides an ultra-wide lens for those sweeping
              landscape shots and a telephoto lens for tighter crops and more
              dramatic close-ups, even in low light.The expansive,
              high-resolution Super Retina XDR displays come to life with a
              billion colors and HDR video playback with Dolby Vision and HDR10.
              With the A13 Bionic chip as the most powerful chip ever in a
              smartphone and advanced machine learning, augmented reality
              experiences are more natural, immersive and compelling than ever
              before. Everyone can enjoy augmented reality with AR Quick Look, a
              fast and easy way to place and resize AR objects in the real world
              around you. Apple is dedicated to building trustworthy software,
              services and devices that provide user privacy. All data and
              content on iPhones is encrypted and protected with the powerful
              encryption of AES-256. Users maintain full control over their
              personal information at every step of the experience. iPhones are
              designed to keep user data private and secure. Apple continues to
              push the envelope of smartphone capabilities while refining their
              graceful, sophisticated design. iPhones deliver an unmatched
              combination of power, style and privacy in a device that is safe,
              secure and optimized to keep your life better connected, protected
              and enjoyed every single day. Bite into the future with iPhone.
            </p>
          </div>
          <div id="item-1-6">
            <h5>Mouse</h5>
            <p>
              Mice have been humankind's faithful computing companions for
              decades. These versatile input devices allow you to control your
              computer, laptop or tablet with speed, precision and
              responsiveness. Whether you spend hours gaming, editing video,
              designing graphics or browsing the web, a high-quality mouse can
              enhance your productivity and open up more possibilities for
              creativity. Gaming mice are engineered specifically for gamers who
              demand flawless control and lightning-quick reaction times.
              Premium mechanical switches, programmable buttons and ergonomic
              designs provide comfort and reduced fatigue even during marathon
              gaming sessions. Wireless mice offer cord-free freedom of movement
              without any lag or signal loss for an unparalleled gaming
              experience. Optical mice use light sensors instead of mechanical
              ones for more accurate motion tracking, especially at high speeds.
              They can register more moves per second than a basic mouse, giving
              you an edge in competitive and fast-paced games. Sensor types like
              PixArt PAW3335 and Sony 3310 provide true 1:1 tracking at up to
              10,000dpi for lifelike control and precision. Streamlined mice are
              the perfect shape and size to control your computer elegantly and
              intuitively. They glide effortlessly across your desk mat or other
              surface with minimal friction for seamless navigation. Modern mice
              also have customizable buttons, scroll wheels and weights.
              Programmable buttons allow shortcuts for common actions. For
              serious multitasking, extra buttons provide shortcuts to launch
              apps, switch between screens and more. Vertical scrolling wheels
              prevent slipping and keep webpages neatly scrolled line by line.
              Mouse weights can be added to or removed from the bottom to adjust
              balance and make the mouse feel like an extension of your hand.
              Ergonomic mice reduce strain on your wrist and arm with a
              contoured shape that keeps them aligned properly. Vertical scroll
              wheels keep you scrolling comfortably. Thicker, grippier side
              grips provide more stability and control. Mice with adjustable
              height help keep your wrist in a neutral position. The latest
              optical, wireless and ergonomic mice offer innovative new features
              like remote controls, illuminated lights, heat controls and more.
              No matter your preferences for style, function or gaming, there is
              a high-performance mouse tailored to your exact needs for seamless
              computing control and maximum productivity. Mice are the versatile
              input devices that help bring your ideas to life on screen with
              speed, precision and responsiveness.
            </p>
          </div>
          <div id="item-1-7">
            <h5>Keyboard</h5>
            <p>
              Keyboards translate your thoughts into text, code or commands. A
              high-quality keyboard allows you to work faster, more precisely
              and with reduced strain. Whether you spend your days typing
              documents, coding software or gaming, the right keyboard can make
              a huge difference in your productivity, comfort and enjoyment.
              Gaming keyboards combine dedicated macro keys, customizable
              backlighting and mechanical switches built to withstand millions
              of keypresses without failing. Mechanical switches provide tactile
              feedback and audible confirmation of each keypress for a gaming
              experience unlike any other. Programmable macro keys allow
              shortcuts for common in-game actions, weapons or spells. Premium
              mechanical keyboards use high-quality Cherry MX or similar
              mechanical switches. Red, Blue and Brown switches offer different
              levels of tactile feedback and actuation force. Red switches have
              no bump and are ideal for rapid keypresses. Blue switches provide
              tactile feedback for every press. Brown switches offer a medium,
              tactile bump. Ergonomic keyboards prevent pain and injury from
              repetitive strain or awkward hand positioning. They have a split,
              contoured design that keeps wrists in a neutral aligned position.
              Thicker, cushioned keys provide extra comfort. Built-in wrist
              rests provide support. Some even feature height adjustment, key
              rollovers and disable keys for reduced strain. Tenkeyless
              keyboards remove the number pad for a more compact profile but
              retain the function row of keys. They are ideal if you do not need
              the number pad regularly. 60% keyboards shrink the layout even
              further while retaining most key functionality. They are perfect
              for limited desk space or if you prefer using alt+f key
              combinations. Mechanical keyboards offer superior keypress
              response, durability and customization over standard rubber dome
              keyboards. In addition to different switch types, they have
              customizable backlighting with per-key control, programmable macro
              keys, dedicated volume controls, USB pass-through ports and more.
              Silent mechanical keyboards have rubber o-rings or damping rings
              installed under each keycap to muffle the audible typing noise.
              They provide the responsiveness of mechanical switches with
              minimal distracting sounds. Some keyboards offer hotswap sockets
              so you can switch switches out easily. Whether you want a gaming
              keyboard, ergonomic keyboard, mechanical keyboard, 60% keyboard or
              tenkeyless keyboard, there is an option with the features and
              quality you need to work faster, more comfortably and for longer.
              A high-performance keyboard can transform your computing
              experience and open up new possibilities for creativity or
              entertainment.
            </p>
          </div>
          <div id="item-1-8">
            <h5>SmartWatch</h5>
            <p>
              Smartwatches are revolutionary wrist-worn devices that keep you
              connected and provide useful information at a glance. They
              function as smartphones on your wrist, allowing you to receive
              calls, texts, notifications and more using just your voice or the
              tap of a button. The Apple Watch is one of the most advanced
              smartwatches available. It features an elegant aluminum or
              stainless steel design, Retina display and innovative features
              like an ECG app, fall detection and international emergency
              calling. The Apple Watch Series 6 introduces an updated processor,
              faster charging and an Always-On Retina display that is 2.5 times
              brighter outdoors. Fossil Hybrid HR smartwatches provide stylish
              design with high-tech functionality. They offer heart rate
              tracking, GPS, notifications, apps and more. Built-in fitness
              tracking tracks your steps taken, distance traveled, calories
              burned and sleep. An always-on display keeps key information
              visible at a glimpse and heart rate monitoring provides insights
              into your activity and exercise intensity. Garmin smartwatches are
              rugged, features-packed devices designed for active lifestyles.
              Models like the fēnix series, Vivosmart and Vivomove 3 offer
              rugged, durable construction, long battery life, contactless
              payments, music control and safety features. GPS tracks location,
              distance, pace and other metrics. Additional features include
              heart rate monitoring, stress tracking, respiration tracking,
              blood oxygen monitoring, menstrual cycle tracking and golf
              features. The Fitbit Versa 3 and Charge 4 provide helpful insights
              to improve your health and fitness. They track steps taken,
              distance traveled, calories burned and sleep stages. Innovative
              features include on-device GPS, heart rate tracking, smartphone
              notification alerts, stress management tools and menstrual health
              tracking. Spotify controls allows you to control music playback
              right from your wrist. Smartwatches with built-in NFC allow
              contactless payments using services like Apple Pay, Samsung Pay or
              Fitbit Pay. Simply tap to pay for coffee, lunch, transit fares and
              other quick purchases. Many smartwatches also allow music
              controls, allowing you to switch tracks, adjust volume and get
              notifications about incoming calls, texts, calendar alerts and
              more. With fitness tracking, apps, mobile payments, notifications
              and health monitoring features, a smartwatch can become an
              extension of yourself. They provide information at a glance to
              help you live a healthier, more connected and productive life. No
              matter your style, needs or activity level, there is a smartwatch
              with the capabilities to keep up with you every step of the way.
              Smartwatches bring convenience, connectivity and insight right to
              your wrist. They make it easier to stay active, motivated,
              informed and in control of your day. This highly advanced yet
              accessible technology helps you gain a deeper understanding of
              yourself to achieve goals and succeed at life.
            </p>
          </div>
          <div id="item-2">
            <h4>Best selling items</h4>
            <p>
              Apple iPhone 12 - Apple's latest smartphone featuring an A14
              Bionic chip, OLED display, 5G connectivity and advanced dual
              camera system. The iPhone 12 has been hailed as one of the most
              powerful and capable smartphones on the market. It continues to be
              one of the hottest smartphones for those wanting the latest
              features and seamless Apple experience.
            </p>

            <p>
              Apple Magic Keyboard - Apple's premium wireless keyboard is the
              perfect complement to the new iMac and iPad Pro. It features a
              sleek, compact design with a built-in trackpad and backlit keys
              for comfortable typing in any environment. It has become the go-to
              keyboard for Mac customers and creative professionals.
            </p>

            <p>
              NVIDIA GeForce RTX 3080 Ti - NVIDIA's latest and most advanced
              graphics card offers exceptional performance for gaming, content
              creation, virtual reality and real-time ray tracing. The RTX 3080
              Ti is considered by many as possibly the best graphics card in the
              world, setting new standards for gaming fidelity and capabilities
              which is driving strong demand.
            </p>

            <p>
              Samsung Odyssey G9 Series Gaming Monitor - Samsung's new Odyssey
              gaming monitor series brings cutting-edge features for PC and
              console gaming to the mainstream. The Odyssey G9 series offers
              G-SYNC, NVIDIA G-SYNC compatible and low latency for incredibly
              smooth gameplay. With its combination of performance, design and
              value, the Odyssey G9 series has swiftly become one of the most
              desired gaming monitors on the market.
            </p>

            <p>
              Logitech MX Master 3 Advanced Wireless Mouse - Logitech's latest
              premium wireless mouse provides world-class performance and design
              for content creators and professionals. The MX Master 3 offers up
              to 70 days of battery life, highly contoured shape, advanced
              dual-mode scroll, and FastSpeed wireless connectivity. It has
              established itself as possibly the best wireless mouse for
              productivity and design workflows, fueling sustained sales
              success.
            </p>

            <p>
              Does this help give you some ideas and examples of top selling or
              best selling products in different categories? Let me know if you
              would like any additional suggestions or details. I can provide
              more product examples and descriptions if needed.
            </p>
          </div>
          <div id="item-3">
            <h4>For more info</h4>
            <p>
              To make the sentence grammatically correct and clearer, you can
              say: "For more information, please contact me by email at
              sabaphruidze01@gmail.com or by clicking on the 'contact' button in
              the navigation bar you can fill the contact form."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
