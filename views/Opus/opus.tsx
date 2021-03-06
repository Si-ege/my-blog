import Link from "next/link"
import { Section } from "./style"
const Opus = () => {
  const list = [
    {
      title: '便携式小空调',
      dec: 'Tip: 为你的夏日带去清凉!',
      href: '/ventilation',
      date: '2022.3.26'
    },
    {
      title: 'Github 用户查询',
      dec: 'Github 用户查询',
      href: '/githubAPI',
      date: '2022.4.2'
    },
    {
      title: '天气查询',
      dec: '可以查询当天的天气情况! ！！',
      href: '/weather',
      date: '2022.4.14'
    },
    {
      title: '毒鸡汤',
      dec: '非常真实，用最猛的刀，扎向昏沉的你。没事打开就可以打开瞅瞅，毕竟人生苦短都没苦笑过有什么意思！',
      href: '/dumbass',
      date: '2022.4.16'
    },

  ]
  return (
    <Section>
      <div className="main">
        <div className="centent">
          {
            list.map((item) => {
              return (
                <div className="opusbox">
                  <a href={item.href}>{item.title}</a>
                  <div className="opus">
                    <p>
                      <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="EmojiObjectsOutlinedIcon"><path d="M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28c.35.6.98 1 1.72 1s1.38-.4 1.72-1H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46C18.09 13.95 19 12.08 19 10c0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm-4 2v-1h4v1h-4zm5.31-5.26c-.09.08-.16.18-.24.26H8.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z"></path><path d="M11.5 11h1v3h-1z"></path><path d="m9.6724 9.5808.7071-.7071 2.1214 2.1213-.7071.7071z"></path><path d="m12.2081 11.7124-.707-.7071 2.1212-2.1214.7071.7072z"></path></svg>
                      {item.dec}
                    </p>
                    <p>{item.date}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </Section>
  )
}
export default Opus