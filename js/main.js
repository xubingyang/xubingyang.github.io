/*
 页面的交互效果
*/
const theater = theaterJS()
theater.addActor('title').addActor('sentence1').addActor('sentence2')
theater
  .addScene('title:徐', 200, ' 秉阳', 300)
  .addScene(
    'sentence1:溪流',
    100,
    '，',
    200,
    '高山',
    100,
    '，',
    200,
    '草地',
    100,
    '，',
    200,
    '林莽',
    100,
    '。',
    300
  )
  .addScene(
    'sentence2:苍穹',
    100,
    '之下',
    100,
    '随处',
    100,
    '可以',
    100,
    '安身',
    100,
    '。',
    200
  )

/*
 切换隐藏/显示状态
*/
const changeText = () => {
  const changetext = document.querySelector('#changetext')
  const showmore = document.querySelector('#showmore')
  const basic = document.querySelector('#basic')

  if (changetext.textContent === '更多') {
    changetext.textContent = '关闭'
    showmore.style.display = 'block'
    basic.style.display = 'none'
  } else {
    changetext.textContent = '更多'
    showmore.style.display = 'none'
    basic.style.display = 'block'
  }
}

/*
 读取页面图片前等待
*/
const removeLoader = async () => {
  const preloader = document.querySelector('#preloader')
  setTimeout(() => {
    preloader.parentNode.removeChild(preloader)
  }, 1000)
}

const restartLoader = async () => {
  const preloader = `
  <div class="loading" id="preloader">
    <div class="loader">
      <div class="loader-inner line-scale">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  `
  const main = document.querySelector('#main')
  main.style.zIndex = '100'
  document.body.insertAdjacentHTML('afterbegin', preloader)
}

imagesLoaded(document.querySelector('body'), () => {
  removeLoader()
})

/*
  1. 获取屏幕宽度
  2. 根据屏幕宽度获取图片
  3. 设置背景图片
  4. 监听屏幕旋转事件
  5. 监听点击事件 
*/
const changebackground = async (event) => {
  const main = document.querySelector('#main')
  if (event) {
    if (
      event.target.id === 'title' ||
      event.target.id === 'sentence1' ||
      event.target.id === 'sentence2'
    ) {
      main.style.zIndex = '100'
    } else {
      main.style.zIndex = '0'
    }
  }
  let width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )
  let imageURL = ''
  if (width > 768) {
    imageURL = 'https://api-proxy.xubingyang.vercel.app/unsplash/landscape'
  } else {
    imageURL = 'https://api-proxy.xubingyang.vercel.app/unsplash/portrait'
  }
  const res = await fetch(imageURL)
  const data = await res.json()
  document.body.style.backgroundImage = `url(${data.urls.regular})`
}

// 默认加载背景
imagesLoaded(changebackground({ target: { id: 'body' } }))

// 监听屏幕旋转
window.addEventListener('orientationchange', (e) => {
  e.preventDefault()
  imagesLoaded(changebackground(e))
  restartLoader()
  removeLoader()
})

// 监听屏幕宽度变化
const mediaQuery = window.matchMedia('(max-width: 768px)')
mediaQuery.addEventListener('change', changebackground())

// 监听点击事件
contents.addEventListener('click', (e) => {
  e.preventDefault()
  imagesLoaded(changebackground(e))
})

/*
  禁止右键
*/
const stop = () => {
  return false
}
document.oncontextmenu = stop
