import './app2.css'
import $ from 'jquery'

const $tabBar = $('.tab-bar') 
const $content= $('.content')

$tabBar.on('click','li',(e)=>{
  
  const $li = $(e.currentTarget)
  $li.addClass('active').siblings().removeClass('active')
  const index= $li.index()
  console.log(index)
 
  $content.children().eq(index).addClass('active').siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')