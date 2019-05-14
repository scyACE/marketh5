(funtion($){
  $('.tab>div').on('click',function(e){
    $(this).addClass('active').siblings().removeClass('active')
  })

  initTabbar(){
	  let tabBar=`  <div class="tabbar">
    <a href="/" exact activeclass="current">
      <div class="icon icon-Home"></div>
      首页
    </a>
    <a href="/order" activeclass="current">
      <div class="icon icon-Document"></div>
      订单
    </a>
    <a href="/cart" activeclass="current">
      <div class="icon icon-Cart"></div>
      购物车
    </a>
    <a href="/Member" activeclass="current">
      <div class="icon icon-User" ></div>我
    </a>
  </div>`
		$(document).before(tabBar())
  }

})(jQuery)
