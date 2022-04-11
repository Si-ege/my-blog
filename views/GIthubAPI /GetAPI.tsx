import React, { useEffect, useState } from "react";
import { Div } from './style'

type Props = [
  data?:data
]
type data ={
  name:string;
  login:string;
  avatar_url:string;
  html_url:string
}


export default function App() {

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

    initPageData()
   
 
  })


  const initPageData = () => {
    var usename = obj?.id
    {
      usename === undefined
        ? []
        :
        fetch(`https://api.github.com/users/${usename}`, {
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
          .catch(error => {
            if (error.status === 404) {
              // do something about 404
            }
          })
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
          { 
            obj?.id !== undefined ?
            <div className="text" style={{ display: "flex", alignItems: 'center', justifyContent: ' center', margin: '50px  0 0' }}>
            <div className="image" style={{borderRadius:'50%', margin: '0 40px 0 0', backgroundColor: '#000' }}>
              <img src={data.avatar_url} alt="" width='70px' />
            </div>
            <div >
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0'  }}>ID:</p>
                <p>{data.login}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0' }}>name:</p>
                <p>{data.name}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '0 10px 0 0' }}>仓库链接:</p>
                <a href={data.html_url}>点击跳转</a>
              </div>
            </div>
          </div>
          : null
            
          }
          

        </div>

      </div>
    </Div>

  )

}

function data(data: any) {
  throw new Error("Function not implemented.");
}
