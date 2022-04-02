import styled from "styled-components";

export const Section = styled.div` width:100%;
height:100%;
z-index:99;
padding:80px 0 0 0;

.centent {
  margin: 0 auto;
  width: 50%;
  position: relative;
  margin-bottom: 40px;
}

.centent p:nth-child(1) {
  text-align: center;
  margin-bottom: 10px;
  font-size: 40px;
  margin-bottom: 20px;
}

.centent svg {
  width: 25px;
  height: 25xpx;
}

.centent span {
  color: #63a5ef;
}

.opus {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
}

.date {
  position: absolute;
  top: 39px;
  right: 0;
  margin-right: 20px;
}

.box {
  position: relative;
  margin: 0 auto;
  width: 35%;
  border: 1px solid rgb(224, 224, 224);
  height: 150px;
  border-radius: 15px 15px 30px 30px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;

}

.line {
  width: 100%;
  height: 2px;
  background-color: rgb(224, 224, 224);
  position: absolute;
  bottom: 25px;
}

.image {
  position: absolute;
  bottom: 30px;
  left: 50%;
}

.image img {
  width: 12px;
  height: auto;
}

.mode {
  position: absolute;
  right: 40px;
  top: 20px;
}

.warm {
  display: none;
}

.warm1 {
  display: block;
}

.cold {
  display: none;
}

.cold1 {
  display: block;
}

.modeoff {
  position: absolute;
  right: 40px;
  top: 20px;
  display: none;
}

.mode span:nth-child(4) {
  font-size: 26px;
  color: #cccccc;
  text-shadow: 0 0 2px rgb(0 0 0 / 10%);
  font-family: Digital-7 Mono;
}

.alrte {
  position: absolute;
  left: 45%;
  background-color: #d32f2f;
  padding: 10px 40px 10px 20px;
  border-radius: 5px;
  margin: 20px 0 0 0;
}

.tag {
  width: 50px;
  height: 70px;
  border-radius: 5px;
  padding: 4px;
  background-color: #4ea5f5;
  position: absolute;
  top: 10px;
  left: 10px;

}

.garden {
  display: flex;
}

.garden1 {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 2px;
  background-color: white;
}

.tag1 {
  width: 100%;
  height: 28px;
  background-color: white;
  margin: 3px 0;
  padding: 2px 8px;
}

.tag1 div:nth-child(1) {
  display: flex;
  background-color: green;
  width: 40%;
  height: 3px;
  margin-bottom: 2px;
}

.tag1 div:nth-child(2) {
  display: flex;
  background-color: lightgreen;
  width: 50%;
  height: 3px;
  margin-bottom: 2px;
}

.tag1 div:nth-child(3) {
  display: flex;
  background-color: rgb(255, 193, 7);
  width: 60%;
  height: 3px;
  margin-bottom: 2px;
}

.tag1 div:nth-child(4) {
  display: flex;
  background-color: orange;
  width: 70%;
  height: 3px;
  margin-bottom: 2px;
}

.tag1 div:nth-child(5) {
  display: flex;
  background-color: red;
  width: 80%;
  height: 3px;
  margin-bottom: 2px;
}

.mode1 {
  background-color: white;
  width: 42px;
  height: 10px;
  margin-bottom: 2px;
  display: flex;

}

.mode1 div {
  width: 3px;
  height: 3px;
  background-color: black;
  border-radius: 50%;
  margin: 2px .8px 0 0;
}

.border {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  position: absolute;
  left: 45%;

}

.borderoff {
  display: none;
}

.border div {
  width: 8px;
  height: 50px;
  margin-right: 60px;
  background-color: #bbbbbb;
}

.border div:nth-child(1) {
  transform: rotate(10deg)
}

.border div:nth-child(3) {
  transform: rotate(-15deg)
}

.btn {
  margin-top: 130px;
  text-align: center;
}

.btn1 {
  margin-bottom: 20px;
}

.btn svg {
  width: 25px;
  height: 25px;
  color: #fff;
  fill: currentcolor;
}

.btn1 button:nth-child(1) {
  width: 56px;
  height: 56px;
  background-color: #1976d2;
  text-align: -webkit-center;
  border-radius: 50%;
  margin-right: 30px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
}

.btn1 button:nth-child(2) {
  width: 56px;
  height: 56px;
  background-color: rgb(229, 57, 53);
  text-align: -webkit-center;
  border-radius: 50%;
  margin-right: 30px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
}

.btn1 button:nth-child(3) {
  width: 56px;
  height: 56px;
  background-color: orange;
  text-align: -webkit-center;
  border-radius: 50%;
  margin-right: 30px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
}

.btn2 {
  width: 56px;
  height: 56px;
  background-color: #e0e0e0;
  text-align: -webkit-center;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
}


`
