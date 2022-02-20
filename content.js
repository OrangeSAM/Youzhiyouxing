// 图标区模板
const iconTemplate = `
<div>
  <img id="personal" src="./img/geren.png" alt="个人">
</div>
<div>
  <img id="hot" src="./img/remen.png" alt="热门">
</div>
`

const panelTemplate = `
  <div>
    
  </div>  
`

function init () {
  const url = window.location.href
  if (url.indexOf('materials')) {
    createIcon()
  }
}

function createIcon () {
  const iconWrap = document.createElement('div')
  iconWrap.innerHTML = iconTemplate
  iconWrap.classList.add('icon-wrap')
  document.body.appendChild(iconWrap)
}

const ul = document.createElement('ul')

function createPanel (sentence) {
  let panelWrap = document.createElement('div')
  createHotContent(sentence)
  createCopyBtn()
  panelWrap.appendChild(ul)
  panelWrap.classList.add('panel-wrap')
  document.body.appendChild(panelWrap)
}

function createHotContent(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    const li =document.createElement('li')
    li.innerText = sentence[i].innerText
    li.classList.add('single-sentence')
    ul.appendChild(li)
  }
}

function createCopyBtn(){
  
}

init()

personal.addEventListener('click', function () {
  const hotSentence = document.querySelectorAll('.zx-rangy-hot')
  createPanel(hotSentence)
  console.log(hotSentence)
})
