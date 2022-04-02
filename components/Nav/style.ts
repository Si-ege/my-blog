import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  padding: 0;
  justify-content: center;
  position:fixed;
  left:0 ;
  opacity:0.5 ;
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
      border:#FFF solid 1px;
      border-radius:4px;
      display:none ;
  }
  .btn button{
    position:repeat;
    left:30px ;
    bottom:-23px ;
    background: transparent;
    color: #fff;
    padding:10px ;
    display:flex ;
    align-items: center;
    border: none;
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
  }
  .btn{
    display:block ;
  }
  .nav1{
    display:block ;
    background-color: black;
    width:50%;
    height:100%;
    border-radius:0 0 10px 0 ;
    z-index:18;

  }
  .nav{
    display:none ;
    background-color: #010101;
    width:50%;
    height:100%;
    border-radius:0 0 10px 0 ;
    opacity:1 ;
  }
  ul svg{
    background-color:white ;
  }
  
  ul li{
    color:white ;
    width:100%;
    background-color: #010101;
    margin:60px 0 40px 0 ; 
    border-bottom:1px solid white ;
  }
  ul li:nth-child(5){
    margin-bottom:40px ;
  }
}


`