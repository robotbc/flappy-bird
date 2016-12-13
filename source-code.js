
const pipeUrl =
  'http://brownie.blog.br/wp-content/uploads/2016/08/cano-mario.png'

const powUrl =
  'http://www.clipartkid.com/images/364/mini-comic-sound-effect-decals-boom-zam-ka-pow-LEYAGq-clipart.jpg'

const backgroundUrl =
  'https://cdn.rawgit.com/bhauman/flappy-bird-demo/master/resources/public/imgs/background.png'

const gameOverUrl =
  'http://www.ruwhim.com/wp-content/uploads/2014/02/flappybird_fulmer.jpg'

const pipe1 = new Image({
  url: pipeUrl ,
  width: 70,
  height: 150,
  x:738,
  y:-100
})

const pipe2 = new Image({
  url: pipeUrl ,
  width: 70,
  height: 150,
  x:738,
  y:380
})

const bird = new Image({
  url: "http://i.imgur.com/VnRkpf1.png",
  width: 60,
  height: 40,
})

const jump = () => bird.y += 85;

const reset = () => {
  setBackdropURL(backgroundUrl)
  return (bird.y = 50)
}

ready(() => {
  reset()

  forever(() => {
    pipe1.x += -7
    pipe2.x += -7
  })

  forever(() => {
    if (bird.y <= minY) {
      setBackdropURL(gameOverUrl)
      pipe1.x = maxX
      return pipe2.x = maxX;
    } else if (bird.y >= maxY) {
      setBackdropURL(powUrl)
    } else {
      setBackdropURL(backgroundUrl)
    }

    return bird.y += -12
  })
})

onKeyDown(key => {
  switch (key) {
    case 'ESCAPE':
      return reset();

    case 'SPACE':
      return jump();

    default:
      return
  }
})

onMouseDown(jump)
