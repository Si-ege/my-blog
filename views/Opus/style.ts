import styled from "styled-components";

export const Section =styled.div`
  width:100%;
  height:100% ;
  padding:100px 0 0 0;
  :before{
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
  .centent{
      margin:0 auto ;
      width:50% ;
      position:relative;
      margin-bottom:40px ;
  }
  .centent a{
      cursor:pointer;
      margin-bottom:10px ;
      font-size:40px;  
  }
  .centent svg{
      width: 25px ;
      height:25xpx ;
  }
  .opusbox{
    border-bottom: #999 solid 2px ;
    margin-bottom: 40px;
  }
  .opus{
      display:flex ;
      justify-content: space-between;
      margin-bottom:10px ;
  } 
  .opus p:nth-child(1){
    display:flex ;
  }
  @media only screen and (max-width:600px){
    .centent{
      width:90%;
    }
    .opusbox{
      text-align:center;
    }
    .centent a{
      font-size:20px;  
  }
  .opus{
      display:flex ;
      flex-direction: column;
      align-items:center;
      margin:0 ;
  } 
  }

`