
import Exposure from '../../lib/exposure'

const exposureSingleTon =  new Exposure({
  visivleRatio: 0.5,
  root: document.querySelector('#div1'),
  // 我们设置扩大重叠范围100，这样图片距离视口root 100px范围就开始计算重叠
  rootMargin: '0px 0px 100px 0px'
})

const myLazyImg = document.querySelectorAll('.myLazyImg')[0]

exposureSingleTon.add(myLazyImg, function(item) {
  console.log(item)
  myLazyImg.src = myLazyImg.getAttribute('data-src')
})