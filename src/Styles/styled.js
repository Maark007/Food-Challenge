import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  .wave-box {
    direction: ltr;
    position: absolute;
  }
  .wave {
    direction: ltr;
    position: absolute;
    width: 50%;
    @media screen and (max-width: 1050px) {
      display: none;
    }
  }
  .last-wave {
    width: 50%;
    position: absolute;
  }
  .last-wave-box {
    width: 100%;
    direction: rtl;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  h1 {
    margin: 10px 0 0 10px;
    color: #2d2d2c;
  }
  .title-container-box {
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
    width: 100%;
    @media screen and (max-width: 852px) {
      margin: 0;
    }
    @media screen and (max-width: 695px) {
      display: none;
    }

    .title-container-items {
      align-self: center;
      margin: 1% 2% 0 3%;
      font-weight: 600;
      z-index: 1000;
      @media screen and (max-width: 852px) {
        font-size: 14px;
      }
    }
    .title-container-button {
      position: relative;
      margin: 1% 2% 0 3% !important;
      font-weight: 800;
      padding: 15px;
      border: none;
      margin: 0 0 0 2%;
      border-radius: 10px;
      color: #2d2d2c;
      background: #fff;
      cursor: pointer;
      @media screen and (max-width: 1050px) {
        background: #f5941b;
        color: #fff;
      }
    }
  }
  img {
    position: absolute;
    z-index: 1000;
    top: 30px;
    height: 500px;
    @media screen and (max-width: 1350px) {
      height: 450px;
      top: 30px;
    }
    @media screen and (max-width: 1250px) {
      height: 400px;
      top: 70px;
    }
    @media screen and (max-width: 1050px) {
      height: 300px;
    }
    @media screen and (max-width: 1051px) {
      display: none;
    }
  }
`;

export const FoodBox = styled.div`
  width: 100%;
  .food-box-title {
    display: flex;
    flex-direction: column;
    margin: 5% 0 0 5%;
    color: #2d2d2c;
    font-size: 50px;
    font-weight: 600;
    @media screen and (max-width: 695px) {
      align-items: center;
      font-size: 35px;
    }
    @media screen and (max-width: 1051px) {
      align-items: center;
    }
  }
  .food-box-subtitle {
    display: flex;
    flex-direction: column;
    margin: 1% 10px 0 5%;
    color: #615b54;
    font-size: 18px;
    @media screen and (max-width: 695px) {
      align-items: center;
      text-align: center;
      font-size: 16px;
      margin: 30px 10px 0 10px;
    }
    @media screen and (max-width: 1051px) {
      margin: 30px 10px 0 10px;
      align-items: center;
    }
  }
  .food-box-button {
    width: 160px;
    margin-top: 3%;
    height: 50px;
    border: none;
    background: #f5941b;
    font-weight: 600;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    z-index: 1000;
    i {
      align-self: center;
      margin-left: 5px;
    }
  }
  .fava-box {
    display: flex;
    justify-content: flex-start;
  }
  .fava-image {
    align-self: flex-start;
  }
`;

export const Informations = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0 0 0;
  width: 100%;
  @media screen and (max-width: 695px) {
    display: flex;
    flex-direction: column;
  }
  .box-column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .item-box {
    align-self: center;
    margin: 0 5% 0 5%;
    @media screen and (max-width: 852px) {
      margin: 2% 2% 2% 2%;
    }
  }
  p {
    text-align: center;
    margin-top: 3%;
    color: #615b54;
    font-weight: 500;
  }
  span {
    color: #31302f;
    font-weight: 900;
    @media screen and (max-width: 852px) {
      font-size: 15px;
    }
  }
  .yellow-circe {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: #f5941b;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    margin: 0 0 30px 0;
    @media screen and (max-width: 852px) {
      margin: 3% 0;
    }
    i {
      color: #fff;
    }
  }
`;

export const SecondFoodBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1040px) {
    justify-content: center;
    align-self: center;
    align-items: center;
  }
  svg {
    width: 100%;
    height: 500px;
    @media screen and (max-width: 1051px) {
      display: none;
    }
  }
  img {
    height: 450px;
    position: absolute;
    align-self: center;
    left: -110px;
    @media screen and (max-width: 1051px) {
      display: none;
    }
  }
  .food-box-svg {
  }
  .left-box {
    display: flex;
    justify-content: flex-start !important;
    align-self: center;
  }
  .right-box {
    display: flex;
    justify-content: flex-end;
    margin: 10% 10% 0 10%;
    .right-box-afterword {
      color: #f5941b;
      font-size: 21px;
      font-weight: 500initial;
      margin: 0 0 1% 0;
      font-weight: 600;
    }
  }
  .right-box-title {
    color: #272625;
    font-weight: 600;
    font-size: 35px;
  }
  .right-title-box {
    display: flex;
    flex-direction: column;
  }
  .right-box-subtitle-box {
    display: flex;
    flex-direction: column;
    margin: 5% 0;
  }
  .right-box-subtitle {
    color: #615b54;
    font-size: 17px;
    font-weight: 600;
  }
  .right-box-button-box {
    display: flex;
    span {
      color: #615b54;
      align-self: center;
      font-size: 19px;
      @media screen and (max-width: 852px) {
        font-size: 16px;
      }
    }
  }
  .right-box-button {
    width: 160px;
    height: 50px;
    border: none;
    background: #f5941b;
    font-weight: 600;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
  }
  .right-box-video-player {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: #272625;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    margin: 0 15px 0 30px;
    cursor: pointer;
    i {
      color: #fff;
    }
  }
`;

export const WorksTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .workstitle-first-title {
    margin: 15% 0 0 0;
    color: #f5941b;
    font-weight: 600;
  }
  .workstitle-box {
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    width: 100%;
    .workstitle-title {
      color: #2d2d2c;
      margin: 2% 0 2% 0;
    }
    .workstitle-first-subtitle {
      color: #615b54;
      margin: 5px 5px 0 5px;
      font-size: 19px;
      @media screen and (max-width: 695px) {
        font-size: 16px;
      }
    }
    .workstitle-services-box {
      display: flex;
      justify-content: space-around;
      margin: 10% 0 0 0;
      @media screen and (max-width: 845px) {
        flex-direction: column;
      }
    }
    .workstitle-services-items-box {
      display: flex;
      flex-direction: column;
      margin: 0 5px 0 5px;
      @media screen and (max-width: 845px) {
        margin: 2% 20px 3% 0;
      }
      span {
        color: #615b54;
        font-size: 18px;
        @media screen and (max-width: 845px) {
          font-size: 15px;
        }
      }
      i {
        color: #f5941b;
        margin: 0 0 5% 0;
      }
    }
    .workstitle-services-items-title {
      margin: 0 0 2% 0;
      color: #2d2d2c;
      @media screen and (max-width: 913px) {
        font-size: 17px;
      }
      @media screen and (max-width: 845px) {
        font-size: 21px;
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  .menu-box {
    width: 100%;
    .menu-food-button {
      display: flex;
      justify-content: center;
      margin: 5% 0 0 0;

      button {
        width: 160px;
        height: 50px;
        border: none;
        background: #f5941b;
        font-weight: 600;
        color: #fff;
        border-radius: 50px;
        font-size: 17px;
      }
    }
  }
  .menu-title {
    align-self: center;
    color: #f5941b;
    font-weight: 600;
  }
  .menu-title-box {
    margin: 7% 5px 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #2d2d2c;
      margin: 1% 0 2% 0;
    }
    .menu-items {
      color: #615b54;
      font-size: 18px;
      margin: 0 5px 0 5px;
      @media screen and (max-width: 845px) {
        font-size: 16px;
      }
      @media screen and (max-width: 695px) {
        font-size: 15px;
      }
    }
  }
`;

export const MenuFood = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 6% 5% 2% 5%;

  img {
    height: 220px;
    margin: 10% 0 0 0;
    border-radius: 13px 43px 0px 52px;
  }
  .menu-food-title {
    display: flex;
    justify-content: space-between;
    margin: 0 20px 0 15px;
    span {
      font-size: 25px;
      font-weight: 600;
      margin: 5% 0 0 0;
    }
  }
  .menu-food-subtitle {
    color: #0a0a0a;
    font-size: 12px;
    margin: 0 20px 0 15px;
  }
  .menu-food-description {
    margin: 0 20px 0 15px;
    font-size: 15px;
    margin-top: 5%;
    color: #615b54;
  }

  .icons-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4% 0 0 0;
    i {
      color: #f5941b;
      margin-right: 5px;
    }
  }
  .yellow-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5941b;
    height: 60px;
    width: 100px;
    border-radius: 14px 0 0 0;
    i {
      color: #fff;
    }
  }
`;

export const AboutTheCreator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10% 0 0 0;
  .mini-title {
    align-self: center;
    color: #f5941b;
    font-weight: 600;
  }
  .about-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 0 5px 0 5px;
    h1 {
      margin: 2% 0 3% 0;
      color: #2d2d2c;
    }
    .about-drescription {
      color: #615b54;
      font-size: 18px;
      @media screen and (max-width: 695px) {
        font-size: 15px;
      }
    }
  }
  .image-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 0 5px 0 5px;
    span {
      color: #2d2d2c;
      font-size: 19px;
      @media screen and (max-width: 695px) {
        font-size: 15px;
      }
    }
  }
  .img {
    margin: 5% 0 2% 0;
    border-radius: 100%;
    box-shadow: 0 0 11px 1px black;
  }
  .stars-box {
    margin: 2% 0 0 0;
    i {
      color: #f5941b;
    }
  }
  .myname-container {
    color: #000;
    font-weight: 600;
    margin: 0 5px 0 0;
  }
  .mycountry-container {
    color: #615b54;
    font-size: 14px !important;
  }
  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 5% 0 0 0;
    h1 {
      color: #2d2d2c;
      @media screen and (max-width: 695px) {
        font-size: 19px;
      }
    }
    input {
      width: 50%;
      padding: 0 10px 0 10px;
      border-radius: 50px;
      border: none;
    }
    button {
      cursor: pointer;
      width: 200px;
      height: 50px;
      border: none;
      background: #f5941b;
      font-weight: 600;
      color: #fff;
      border-radius: 50px;
      font-size: 17px;
    }
  }
  .button-box {
    margin: 2% 0 5% 0;
    display: flex;
    justify-content: center;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 100px;
  @media screen and (max-width: 695px) {
    margin: 0;
  }
  .footer-box-container {
    display: flex;
    width: 100%;
    @media screen and (max-width: 695px) {
      justify-content: center;
    }
    h1 {
      color: #2d2d2c;
      font-size: 25px;
    }
  }
  .footer-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 0 20% 0 0;
    @media screen and (max-width: 695px) {
      display: none;
    }
    .footer-box-items {
      align-self: center;
      margin: 0 3% 0 3%;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .column-info {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 10%;
  }
  .last-box {
    width: 100%;
    display: flex;
    @media screen and (max-width: 695px) {
      justify-content: center;
    }
  }
  .column-info-items {
    color: #615b54;
    font-size: 14px !important;
  }
  .last-box-icons {
    display: flex;
    i {
      margin: 10px 5px 0 5px;
      color: #2d2d2c;
    }
    .yellow {
      color: #f5941b !important;
    }
  }
  .column-info-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 0 22% 0 0;
    @media screen and (max-width: 695px) {
      display: none;
    }
  }
  .credits {
    display: flex;
    align-self: center;
    color: #615b54;
    margin: 50px 0 0 0;
    p {
      color: #f5941b !important;
      margin-right: 5px;
    }
  }
`;
