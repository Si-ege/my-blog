import { useEffect } from "react"
import { Section } from "./style"

const AboutMe = () => {

  return (
    <Section>
      <div className="main" style={{padding:'220px 0 0 0 ',width:'100%'}}>
        <div className="Avatar" style={{display:'flex',flexDirection:'column',width:'30%',margin:' 0 auto',padding:'100px',backgroundColor:'rgb(219, 191, 204)',borderRadius:'30px',boxShadow:'10px 22px 10px 10px rgb(140 105 227 / 20%)',transform: 'translate(0%, 0.5928%) translate3d(0px, 0px, 0px); */)'}}>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'20px',fontSize:'26px'}}><h1>关于我</h1></div>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>姓名:张培国</div>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>邮箱:c357xo@gmail.com</div>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>地址:广东省深圳市宝安区</div>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>GitHub: <a href="https://github.com/Si-ege">https://github.com/Si-ege</a></div>
        </div>
        

      </div>
    </Section>
  )
}

export default AboutMe
