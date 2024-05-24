// make the page move up when reload the page
window.onload = () => {
  window.scrollTo(0, 0)
}

// set active class to the nav li 
document.querySelectorAll('.navbar-nav li a').forEach((li) => {
  li.onclick = (e) => {
    document.querySelectorAll('.navbar-nav li a').forEach(li => {
      li.classList.remove('active')
    })
    e.target.classList.add('active')
  }
}
)
// set active-1 class to the nav li 
document.querySelectorAll('.our-work .ul li').forEach((li) => {
  li.onclick = (e) => {
    document.querySelectorAll('.our-work .ul li').forEach(li => {
      li.classList.remove('active-1')
    })
    e.target.classList.add('active-1')
  }
}
)
