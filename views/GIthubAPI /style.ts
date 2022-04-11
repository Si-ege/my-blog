import styled from "styled-components";

export const Div = styled.div`
width:100%;
height:100%;
padding:100px 0 0 ;


.main{
    margin:0 auto;
}
.main input{
    border: 1px solid #999;
}
.box{
    width:45% ;
    height:400px ;
    margin:150px auto ;
    text-align: center;
    position: relative;
    border-radius: 50% ;
}
.box:before{
    content:'';
    position:absolute ;
    top:0 ;
    bottom: ;
    width:100% ;
    height:100%;
    left:0px;
    right:0px ;
    border:1px solid #000 ;
    border-radius: 50% ;
    z-index:-1;
    background: linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at left top, rgba(209, 219, 255, 0.87), rgba(255, 255, 255, 0) 25%), radial-gradient(at center top, rgb(203, 234, 255), rgb(255, 255, 255)) 50% 0px / 5000px 100% no-repeat;
  }
.image img{
    border-radius:50% ;
}
@media only screen and (max-width:600px){
    .box{
    width:90% ;
    height:300px ;
    margin:100px auto ;
    text-align: center;
    position: relative;
    border-radius: 50% ;
}
.content {
    font-size:20px 
}
.content h1{
    font-size:20px ;
}
}
.content{
    padding: 20px 0 20px 0 ;
    font-size: 30px;
}

`