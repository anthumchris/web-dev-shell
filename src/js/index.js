import welcome from './components/Welcome'

init()

function init() {
  document.querySelector('#root').innerText = welcome
  console.log(welcome)
}
