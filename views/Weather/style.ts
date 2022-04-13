import styled from "styled-components";

export const Div = styled.div`
width:100%;
height:100%;
padding:100px 0 0 ;
::before{
  content:'';
  position:absolute ;
  top:0 ;
  bottom: ;
  width:100% ;
  height:100%;
  left:0px;
  right:0px ;
  z-index:-1;
  background: linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at left top, rgba(209, 219, 255, 0.87), rgba(255, 255, 255, 0) 25%), radial-gradient(at center top, rgb(203, 234, 255), rgb(255, 255, 255)) 50% 0px / 5000px 100% no-repeat;
}
.content{
  margin:0 0 20px 0 ;
  font-size: 23px ;
}
.box{
  width:45% ;
  height:400px ;
  margin:100px auto ;
  text-align: center;
  position: relative;
  border-radius: 10% ;
}
.card{
  display:flex;
  flex-direction: column;
  margin:20px 0 0 0;
  
}
.cardcontent{
  display:flex;
  flex-direction:column;
  padding:10px ;
  margin-right:30px ;
  border:1px solid #000;
  border-radius:10px ;
}
.cardBox{
  display:flex ;
}
@media only screen and (max-width:700px){
  .box {
    width:100% ;
    padding: 10px ;
  }
  .cardBox{
  display:flex ;
  flex-wrap: wrap;
  justify-content: space-around;
}
  .cardcontent{
    width:25% ;
    margin:0 10px 15px ;
  }

}

`