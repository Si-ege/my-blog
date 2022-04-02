import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  padding: 0;
  justify-content: center;
  position:fixed;
  left:0 ;
  z-index:11;
.titlesvg{
  width:40px ;
  height:40px ;
}
.btn{
      position:fixed ;
      top:10px ;
      right:-10px;
      margin:10px 20px;
      border:rgb(54, 54, 54) solid 1px;
      border-radius:4px;
      display:none ;
      z-index:auto;
  }
  .btn button{
    position:repeat;
    left:30px ;
    bottom:-23px ;
    background: transparent;
    color:rgbrgb(54, 54, 54) ;
    padding:10px ;
    display:flex ;
    align-items: center;
    border: none;
    z-index:auto;
  }
  .btn button:hover{
      opacity:0.3 ;
  }
  .btn button svg{
      width:20px ;
      height:20px ;
      margin-right:10px ;
  }
ul{
  margin: 0 ;
  padding: 0;
  overflow: hidden;
  display:flex ;
  opacity:0.5 ;
}
 ul li{
  width:20% ;
  background-color: rgb(177, 164, 164);
  text-align:center;
  padding: 10px 0 10px;
  cursor: pointer;
}
ul .svg:hover{
  background-color:rgb(177, 164, 164);
  opacity:1 ;

}
ul svg{
  width:30px ;
  display:inline-block ;
  height:30px ;
}
 ul li:hover{
  opacity: 0.6;
  background-color: aquamarine;
}
 ul li a{

   padding: 15px 40px ;
}
@media only screen and (max-width:600px){
  .btn button{
    padding:3px ;
    z-index:auto;
  }
  .btn{
    display:block ;
    z-index:auto;
  }
  .nav1{
    display:block ;
    background-color:rgb(54, 54, 54);
    width:100%;
    height:100%;
    z-index:1;
    overflow:hidden ;
    opacity:1 ;
  }
  .nav{
    display:none ;
  }  
  ul li{
    color:white ;
    width:100%;
    background-color: rgb(54, 54, 54); 
    border-bottom:1px solid white ;
  }



`