
// 图标区模板
const iconTemplate = `
  <div>
    <img src="./img/geren.png" alt="个人">
  </div>
  <div>
    <img src="./img/remen.png" alt="热门">
  </div>
`
function createIcon() {
  const iconWrap = document.createElement('div')

  iconWrap.innerHTML = iconTemplate
  iconWrap.classList.add('icon-wrap')
  document.body.appendChild(iconWrap)
}

createIcon()
