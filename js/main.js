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
  1. 获取屏幕宽度
  2. 根据屏幕宽度获取图片
  3. 设置背景图片
  4. 监听屏幕旋转事件
  5. 监听点击事件 
*/
const changebackground = async () => {
  let width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )
  let imageURL = ''
  let client_id =
    '6e3c5ffab97c94d538c5e7db541cad4a23d9759158e2afc71dc00a60cb0b04ee'
  let baseurl = 'https://api.unsplash.com/photos/random'
  let image
  if (width > 768) {
    imageURL = `${baseurl}/?orientation=landscape&client_id=${client_id}`
  } else {
    imageURL = `${baseurl}/?orientation=portrait&client_id=${client_id}`
  }
  const res = await fetch(imageURL)
  const data = await res.json()
  image = data.urls.regular.replace('q=80', 'q=100') // 图片质量不压缩
  document.body.style.backgroundImage = `url(${image})`
}

// 默认加载背景
changebackground()

// 监听屏幕旋转
window.addEventListener('orientationchange', (e) => {
  e.preventDefault()
  changebackground()
})

// 监听点击事件
contents.addEventListener('click', (e) => {
  e.preventDefault()
  changebackground()
})

/*
 读取页面图片前等待
*/
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const imagesLoaded = async (backgroundImage) => {
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = image.onerror = () => {
      resolve()
    }
    image.src = backgroundImage.replace(/url\(['"]?([^'"]*)['"]?\)/g, '$1')
  })
}

const main = async () => {
  await wait(0) // 等待下一轮事件循环开始，确保 DOMContentLoaded 事件已经触发

  let isReady = false
  const preloader = document.getElementById('preloader')

  await imagesLoaded(document.body.style.backgroundImage)

  preloader.classList.remove('loading')
  isReady = true
  await wait(800)
  preloader.parentNode.removeChild(preloader)

  const holdReady = (value) => {
    if (value === true && !isReady) {
      return
    } else if (value === false && isReady) {
      return
    }
    isReady = value
  }

  holdReady(true)
}

document.addEventListener('DOMContentLoaded', main)

/*
  禁止右键
*/
const stop = () => {
  return false
}
document.oncontextmenu = stop
