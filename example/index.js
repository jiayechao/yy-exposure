
console.log(Exposure)
const exposureSingleTon =  new Exposure({
  visivleRatio: 0.5,
})

const doms = Array.from(document.querySelectorAll('.myDiv'))

doms.forEach(dom => {
  exposureSingleTon.add(dom, function() {
    console.log(arguments)
  })
})