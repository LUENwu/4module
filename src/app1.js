import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $result = $('.result')

let n = localStorage.getItem('n')
$result.text(n||100)

$button1.on('click',()=>{
  let n = parseInt($result.text());
  n+=1
  localStorage.setItem('n',n)
  $result.text(n)
})
$button2.on('click',()=>{
  let n = parseInt($result.text())
  n-=1
  localStorage.setItem('n',n)
  $result.text(n)
})
$button3.on('click',()=>{
  let n = parseInt($result.text())
  n*=2
  localStorage.setItem('n',n)
  $result.text(n)
})
$button4.on('click',()=>{
  let n = parseInt($result.text())
  n/=2
  localStorage.setItem('n',n)
  $result.text(n)
  
})