import React, { useEffect, useState } from "react";
import { Div } from './style'

const Weather = () => {

  // const [newdata, setNewdata] = useState({})
  const [obj, setObj] = useState({})
  const [result, setResult] = useState({})

  useEffect(() => {
    const url = decodeURIComponent(location.href)
    if (url.indexOf('id') !== -1) {
      const urlsplit = url.split('?')
      const pre = urlsplit[1].split('&')
      for (let i = 0; i < pre.length; i++) {
        let p = pre[i].split('=');
        obj[p[0]] = p[1]
        setObj(obj)
        console.log('ogj:', obj)
      }
    }
    PageApi()
  }, [])
  const PageApi = () => {
    const escpe = encodeURI(eval('obj.' +'id'))
    const escape = 'query?city=' + escpe
    fetch(`http://jisutqybmf.market.alicloudapi.com/weather/${escape}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: "APPCODE " + '0f141ce45fc84ca1aa4906e1600091df'
      }
    })
      .then(response => response.json())
      .then(data => {
        const result = data.result
        setResult(result)
        console.log('data:', data)
      })
  }
  const daily = eval('result.' +'daily')
  const du = "°C"
  return (
    <Div>
      <div className="box">
        <div className="content" >
          <h1>实时天气查询</h1>
        </div>
        <div className="form" style={{marginBottom:'20px'}}>
          <form action="">
            <input type="text" name='id' style={{ border: '1px solid #000', margin: '0 20px 20px 0', height: '30px', borderRadius: '4px' }} />
            <button type="submit" style={{ border: '1px solid #000', padding: '2px 10px', borderRadius: '5px' }}>查询</button>
          </form>
        </div>
        {
          daily
            ?
            <div className="card">
              <div style={{ marginBottom: '20px', fontSize: '30px' }}>
                <h1>{result !== undefined ? eval('result.' +'city')  : null}</h1>
              </div>
              <div className='cardBox'>
                {
                  daily.map((item, idx) => {
                    return (
                      <div className="cardcontent" key={idx} >
                        <p>{item.date}</p>
                        <p style={{ margin: '10px 0 ' }}>{item.week}</p>
                        <div style={{ margin: '0 auto' }}>
                          {item.day.weather}
                        </div>
                        <h1 style={{ margin: '10px 0 ' }}>{item.night.templow}{du}～{item.day.temphigh}{du}</h1>
                      </div>
                    )

                  })}
              </div>
            </div>
            : 
            <div>
              <p>请输入您所要查询的城市</p>
              <p>未查询到该城市</p>
            </div>
        }
      </div>
    </Div >
  )
}
export default Weather
