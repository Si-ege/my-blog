import styled from "styled-components";

export const Section =styled.div`
  width:100%;
  height:100% ;
  padding:200px 0 0 0;
  .centent{
      margin:0 auto ;
      width:50% ;
      border-bottom: #999 solid 2px ;
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
  .opus{
      display:flex ;
      margin-bottom:20px ;
  }
  .date{
    position:absolute ;
    right:0px ;
    bottom:0 ;
    margin-right:20px ;
  }
  @media only screen and(max-width:600px){
    .data{
      position:absolute ;
      top:0 ;
      bottom:0;

    }
  }

`