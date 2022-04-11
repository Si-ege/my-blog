import { useState } from 'react'
import { Section } from './style'

const Ventilation = () => {
  const [count, setCount] = useState(20)
  const [open, setOpen] = useState(false)
  const [warm, setWarm] = useState(false)
  const [cold, setCold] = useState(true)
  const SwitchingWarm = () => {
    setWarm(true);
    setCold(!true)
  }

  const Switchingcold = () => {
    if (warm === true) {
      setWarm(false);
      setCold(!false)
    }
  }
  const Open = () => {
    setOpen(open => !open)
  }

  const Add = () => {
    if (count < 31) {
      setCount(count + 1)
    }
  }

  const Less = () => {
    if (count > 16) {
      setCount(count - 1)
    }
  }
  return (
    <Section>
      <div className="main">
        <div className="centent">
          <p >便携式小空调</p>
          <div className="opus">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EmojiObjectsOutlinedIcon"><path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z"></path><path d="M11.5 11h1v3h-1z"></path><path d="m9.6724 9.5808.7071-.7071 2.1214 2.1213-.7071.7071z"></path><path d="m12.2081 11.7124-.707-.7071 2.1212-2.1214.7071.7072z"></path></svg>
            <p>Tip: 为你的夏日带去<span>清凉</span>！</p>
          </div>
        </div>
        <div className='box'>
          <div className='line'></div>
          <div className='image'>
            <img src="https://peiguo.oss-cn-beijing.aliyuncs.com/blog/yun-logo.svg" alt="" />
          </div>
          <div className={open ? 'mode' : 'modeoff'}>
            <span >{warm ? '☀️' : ''}</span>
            <span >{cold ? "❄️️" : ''}</span>
            <br />
            <span>{count}°C</span>
          </div>
          <div className='tag'>
            <div className='garden'>
              <div className='garden1'></div>
              <div className='garden1'></div>
              <div className='garden1'></div>
              <div className='garden1'></div>
              <div className='garden1'></div>
              <div className='garden1'></div>
            </div>
            <div className='tag1'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='mode1'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='mode1'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {<div className={open ? 'border' : 'borderoff'}>
          <div></div>
          <div></div>
          <div></div>
        </div>}
        {count > 30 ?
          <div className='alrte'><p>温度最高了!</p></div> : ''
        }
        {count < 17 ?
          <div className='alrte'><p>温度最低了!</p></div> : ''
        }
        <div className='btn'>
          <div className='btn1'>
            <button onClick={Switchingcold}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="AcUnitIcon"><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"></path></svg></button>
            <button onClick={Open}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="PowerSettingsNewIcon"><path d="M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></svg></button>
            <button onClick={SwitchingWarm}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="WbSunnyIcon"><path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></svg></button>
          </div>
          <div className='bottombtn'>
            <button className='btn2' onClick={Add}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ExpandLessIcon"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg></button>
            <button className='btn2' onClick={Less}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></button>
          </div>

        </div>
      </div>
      <video src="https://peiguo.oss-cn-beijing.aliyuncs.com/blog/air-extractor-fan.m4a" style={{ opacity: 0 }} preload="auto" controls loop hidden={true}></video>
    </Section>
  )
}
export default Ventilation