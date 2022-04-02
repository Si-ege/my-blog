import styled from "styled-components";

export const Section =styled.div`
  width:100%;
  height:100% ;
  padding:100px 0 0 0;
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
  @media only screen and(max-width:600px){
    .data{
      position:absolute ;
      top:0 ;
      bottom:0;

    }
  }

`