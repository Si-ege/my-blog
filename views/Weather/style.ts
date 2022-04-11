import styled from "styled-components";

export const Div = styled.div`
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

`