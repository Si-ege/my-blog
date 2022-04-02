import styles from '../styles/Home.module.css'

export default function Home() {
  const home = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/home.jpeg';
  const home1 = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/home.jpg';
  const article = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/article.jpg';
  const back = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/back.jpg';
  const thumb1920562449 = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/thumb-1920-562449.jpeg'
  const thumb1920329544 = "https://peiguo.oss-cn-beijing.aliyuncs.com/blog/thumb-1920-329544.jpeg"
  const thumbphoto417074 = "https://peiguo.oss-cn-beijing.aliyuncs.com/blog/pexels-photo-417074.jpeg"
  const pexelsphoto167699 = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/pexels-photo-167699.webp'
  const pexelsphoto1323550 = 'https://peiguo.oss-cn-beijing.aliyuncs.com/blog/pexels-photo-1323550.webp'

  const imgArr=[home,home1,article,back,thumb1920562449,thumb1920329544,thumbphoto417074,pexelsphoto167699,pexelsphoto1323550]
  const imgA  = imgArr[Math.floor(Math.random() * imgArr.length)]
  const Text =['春江潮水連海平，海上明月共潮生。','灩灩隨波千萬裏，何處春江無月明!','江流宛轉繞芳甸，月照花林皆似霰。',
               '誰家今夜扁舟子？何處相思明月樓。','江畔何人初見月？江月何年初照人。','空裏流霜不覺飛，汀上白沙看不見',
               '江天一色無纖塵，皎皎空中孤月輪。','人生代代無窮已，江月年年望相似。','白雲一片去悠悠，青楓浦上不勝愁。',
               '可憐樓上月徘徊，應照離人妝鏡臺。','玉戶簾中卷不去，搗衣砧上拂還來。','不知乘月幾人歸，落月搖情滿江樹。',
               '斜月沉沉藏海霧，碣石瀟湘無限路。','江水流春去欲盡，江潭落月復西斜。']
  const  TextA  = Text[Math.floor(Math.random() * Text.length)]
  return (
    <>
      <div className={styles.main} id='div'>
        <img className={styles.animate} src={imgA} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Live For Code</h1>
          <h2>{TextA}</h2>
          <p>《春江花月夜》 - 唐代 - 张若虚</p>
        </div>
      </div>
    </>
  )
}
