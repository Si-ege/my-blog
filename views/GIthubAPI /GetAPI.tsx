import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Div } from './style'

const App = () => {

  const [data, setData] = useState([])
  const [obj, setObj] = useState({});
 

  useEffect(() => {
    const url = decodeURIComponent(location.href)
    if (url.indexOf('id') !== -1) {
      const urlsplit = url.split('?')
      const pre = urlsplit[1].split('&')
      for (let i = 0; i < pre.length; i++) {
        let p = pre[i].split('=');
        obj[p[0]] = p[1]
        setObj(obj)
      }
    }
    initPageData();
  }, [])

  const initPageData = () => {
    const ID = eval('obj.' +'id')
    {
      ID !== undefined
        ?
        fetch(`https://api.github.com/users/${ID}`, {
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(Response => {
            if (Response.ok) {
              return Response.json()
            } else {
              return Promise.reject('something went wrong!')
            }
          })
          .then((data) => {
            setData(data),
              console.log(data)
          })
        : null
    }
  }

  return (
    <Div>
      <div className="main">
        <div className="box">
          <div className="content" >
            <h1>Github 用户查询</h1>
          </div>
          <div className="form">
            <form action="">
              <input type="text" name="id" style={{ margin: '0 20px 0 0', height: '30px', borderRadius: '4px' }} />
              <button type="submit" style={{ border: '1px solid #000', padding: '2px 10px', borderRadius: '5px' }}>搜索</button>
            </form>
            <p style={{ textAlign: 'left', display: 'inline-block' }}>请输入Git Hub ID</p>
          </div>
          <div className="text" style={{ display: "flex", alignItems: 'center', justifyContent: ' center', margin: '30px  0 0' }}>
            <div className="image" style={{ borderRadius: '50%', margin: '0 40px 0 0', backgroundColor: '#000' }}>
              <img src={eval('data.' +'avatar_url')} alt="" width='70px' />
            </div>
            <div >
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0' }}>ID:</p>
                <p>{eval('data.' +'login')}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0' }}>name:</p>
                <p>{eval('data.' +'name')}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0' }}>GitHub link:</p>
                <a target='_blank' href={eval('data.' +'html_url')}>点击跳转</a>
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0' }}>location:</p>
                <p>{eval('data.' +'location')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  )
}
export default App