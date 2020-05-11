import React from 'react';
import './Styles/global.css';
import Foods from './models/food';
import {
  Main,
  TitleContainer,
  FoodBox,
  Informations,
  SecondFoodBox,
  WorksTitle,
  Menu,
  MenuFood,
  AboutTheCreator,
  Footer,
} from './Styles/styled';

export default function App() {
  return (
    <div className="App">
      <Main>
        <TitleContainer>
          <h1>Foodie</h1>
          <div className="title-container-box">
            <svg
              className="wave"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="30 0 180 310"
            >
              <path
                fill="#f5941b"
                fillOpacity="1000"
                d="M0, 30L30,5C30,160,120,96,180,90.7C240,85,300,139,360,149.3C420,160,480,128,540,101.3C600,75,660,53,720,69.3C780,85,840,139,900,170.7C960,203,1020,213,1080,213.3C1140,213,1200,203,1260,181.3C1320,160,1380,128,1410,112L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              />
            </svg>
            <img src={require('./Assets/FirstFood.png')} alt="" />
            <span className="title-container-items">Home</span>
            <span className="title-container-items">Packpages</span>
            <span className="title-container-items">About us</span>
            <span className="title-container-items">Contact us</span>
            <i className="fas fa-shopping-cart title-container-items" />
            <button className="title-container-button" type="submit">
              Booking now
            </button>
          </div>
        </TitleContainer>
        <FoodBox>
          <div className="food-box-title">
            <span>Your favorite food</span>
            <span>Delivered Hot &</span>
            <span>Fresh</span>
          </div>
          <div className="food-box-subtitle">
            <span>
              Healtly switcher chefs fo all the prep work, like peeding,
            </span>
            <span>chopping & marinating, so you can cook a fresh food.</span>
            <button className="food-box-button" type="submit">
              Order now
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </FoodBox>
        <Informations>
          <div className="item-box">
            <div className="box-column">
              <div className="yellow-circe">
                <i className="far fa-clock fa-2x" />
              </div>
              <span>Today 10:00 am - 7:00 pm</span>
              <p>Working hours</p>
            </div>
          </div>
          <div className="item-box">
            <div className="box-column">
              <div className="yellow-circe">
                <i className="fas fa-map-marker-alt fa-2x" />
              </div>
              <span>Velyka vasylkivska 100</span>
              <p>Get Directions</p>
            </div>
          </div>
          <div className="item-box">
            <div className="box-column">
              <div className="yellow-circe">
                <i className="fas fa-phone-alt fa-2x" />
              </div>
              <span>+38 (063)833 24 15</span>
              <p>Call Online</p>
            </div>
          </div>
        </Informations>
        <SecondFoodBox>
          <div className="food-box-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 500 100">
              <path
                fill="#f5941b"
                fillOpacity="1000"
                d="M0,0L0,0.3C0,0,0,0,00,-280.7C1900,-300,180,6,576,0.7C672,8,768,5,864,15.3C360,6,1056,128,1152,165.3C248,203,1344,245,1392,266.7L1440,288L1440,320L1392,30C1344,320,148,320,1152,20C156,320,960,320,864,320C768,320,672,320,576,0C420,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          <img src={require('./Assets/FirstFood.png')} alt="" />
          <div className="right-box">
            <div className="right-title-box">
              <span className="right-box-afterword">About</span>
              <span className="right-box-title">Food is An important Part</span>
              <span className="right-box-title">of a Balanced Diet</span>
              <div className="right-box-subtitle-box">
                <span className="right-box-subtitle">
                  They actually assured me over and over that take
                </span>
                <span className="right-box-subtitle">
                  little time off and come back and work. Fast
                </span>
                <span className="right-box-subtitle">
                  forward tow weeks after
                </span>
                <span className="right-box-subtitle">
                  we are going for a new project.
                </span>
                <div className="right-box-subtitle-box">
                  <span className="right-box-subtitle">
                    I wrote to let them know ready to come back they
                  </span>
                  <span className="right-box-subtitle">kicked</span>
                  <span className="right-box-subtitle">
                    me of their team slack of all of us are make company
                  </span>
                  <span className="right-box-subtitle">email.</span>
                </div>
              </div>
              <div className="right-box-button-box">
                <button className="right-box-button" type="submit">
                  Learn more
                </button>
                <div className="right-box-video-player">
                  <i className="fas fa-play" />
                </div>
                <span>Wacth video</span>
              </div>
            </div>
          </div>
        </SecondFoodBox>
        <WorksTitle>
          <div className="workstitle-box">
            <span className="workstitle-first-title">Work</span>
            <h1 className="workstitle-title">How it Works</h1>
            <span className="workstitle-first-subtitle">
              Its through mistakes that you actually can grow you get rid of
            </span>
            <span className="workstitle-first-subtitle">
              everything that is not essential to makihave to get bad.
            </span>
            <div className="workstitle-services-box">
              <div className="workstitle-services-items-box">
                <i className="fas fa-drumstick-bite fa-4x" />
                <h1 className="workstitle-services-items-title">Pick Meals</h1>
                <span>Choose Your meals our</span>
                <span>diverse weekly menu. Find gluten</span>
                <span>or dairy free, low carb & veggie</span>
                <span>options</span>
              </div>
              <div className="workstitle-services-items-box">
                <i className="fas fa-hand-pointer fa-4x" />
                <h1 className="workstitle-services-items-title">
                  Choose How often
                </h1>
                <span>Our team of chefs do the prep</span>
                <span>work no more chopping,</span>
                <span>measuring, or sink of full of dishes</span>
              </div>
              <div className="workstitle-services-items-box">
                <i className="fas fa-truck fa-4x"></i>
                <h1 className="workstitle-services-items-title">
                  Fast Deliveries
                </h1>
                <span>your freshly prepped 15-min dinner</span>
                <span>kits arrive on your doorstep in a</span>
                <span>refrigerated box.</span>
              </div>
            </div>
          </div>
        </WorksTitle>
        <Menu>
          <div className="menu-box">
            <div className="menu-title-box">
              <span className="menu-title">Menu</span>
              <h1>Explore Our Best Menu</h1>
              <span className="menu-items">
                It's through mistakes that you actually can grow you get rid of
              </span>
              <span className="menu-items">
                everything that isn't essential to makihave to get have.
              </span>
            </div>
            <MenuFood>
              {Foods.map((Foods, index) => (
                <div key={index}>
                  <img src={Foods.image} alt="" />
                  <div className="menu-food-title">
                    <span>{Foods.name}</span>
                    <span>{Foods.price}$</span>
                  </div>
                  <span className="menu-food-subtitle">
                    Served with french fries + drink
                  </span>
                  <div className="menu-food-description">
                    <p>Choice of: Coke, fanta, sprite, upgrate to large</p>
                    <p>fries, Add whopper patty, Add Tender crisp patty</p>
                    <p>and more...</p>
                    <div className="icons-box">
                      <div className="icons-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="yellow-corner">
                        <i className="fas fa-plus fa-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </MenuFood>
            <div className="menu-food-button">
              <button>Load more</button>
            </div>
          </div>
        </Menu>
        <AboutTheCreator>
          <span className="mini-title">Testimonial</span>
          <div className="about-box">
            <h1>What They Are Saying</h1>
            <span className="about-drescription">
              It's through mistakes that you actually can grow you get rid of
            </span>
            <span className="about-drescription">
              everything that isn't essential to makihave to get have.
            </span>
          </div>
          <img
            className="img"
            height={100}
            src={require('./Assets/dude.svg')}
            alt=""
          />
          <div className="image-box">
            <span>
              They are engaged communicators and dedicated problem-solvers
            </span>
            <span>
              regardless of time constraints. The team manage projet them.
            </span>
            <div className="stars-box">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div>
              <span className="myname-container">Maark</span>
              <span className="mycountry-container">Brazil</span>
            </div>
          </div>
          <div className="input-box">
            <h1>Have Question in mind ?</h1>
            <h1>Let us help you</h1>
            <div className="button-box">
              <input placeholder="yourmail@gmail.com" />
              <button
                onClick={() =>
                  alert("You can't send an email, this is a prototype.")
                }
              >
                Send
              </button>
            </div>
          </div>
        </AboutTheCreator>
        <Footer>
          <div className="footer-box-container">
            <h1>Foodie</h1>
            <div className="footer-box">
              <span className="footer-box-items">Home</span>
              <span className="footer-box-items">Packpages</span>
              <span className="footer-box-items">About us</span>
              <span className="footer-box-items">Contact us</span>
            </div>
          </div>
          <div className="last-box">
            <div className="last-box-icons">
              <i className="fab fa-facebook-f fa-2x" />
              <i className="fab fa-youtube fa-2x yellow" />
              <i className="fab fa-vimeo-v fa-2x" />
              <i className="fab fa-twitter fa-2x" />
            </div>
            <div className="column-info-box">
              <div className="column-info">
                <span className="column-info-items">Quality</span>
                <span className="column-info-items">Help</span>
                <span className="column-info-items">Share</span>
              </div>
              <div className="column-info">
                <span className="column-info-items">244-522-1542</span>
                <span className="column-info-items">hello@food.com</span>
                <span className="column-info-items">press@food.com</span>
              </div>
              <div className="column-info">
                <span className="column-info-items">Terms & conditions</span>
                <span className="column-info-items">Privacy policy</span>
              </div>
            </div>
          </div>
          <span className="credits">
            <p>2020</p>
            All rights reserved.
          </span>
          <div className="last-wave-box">
            <svg
              className="last-wave"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="10 0 1200 200"
            >
              <path
                fill="#ff5500"
                fillOpacity="1"
                d="M1,224L30,192C60,160,120,96,180,90.7C240,85,300,139,360,149.3C420,160,480,128,540,101.3C600,75,660,53,720,69.3C780,85,840,139,900,170.7C960,203,1020,213,1080,213.3C1140,213,1200,203,1260,181.3C1320,160,1380,128,1410,112L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              />
            </svg>
          </div>
        </Footer>
      </Main>
    </div>
  );
}
