
import Exposure from '../../lib/exposure'

const exposureSingleTon =  new Exposure({
  visivleRatio: 0,
})

const doms = Array.from(document.querySelectorAll('.myDiv'))

doms.forEach(dom => {
  exposureSingleTon.add(dom, function(exposureItem) {
    console.log('曝光了',exposureItem)
  },function(exposureItem) {
    console.log('隐藏了',exposureItem)
  })
})