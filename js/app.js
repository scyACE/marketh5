var app = {
	tab:function(){
  $('.tab>div').on('click',function(e){
    $(this).addClass('active').siblings().removeClass('active')
  })
},
 tabBar:function(){
	  let tabBar=`  <div class="tabbar">
    <a href=".././home/home.html" exact activeclass="current">
      <div class="icon icon-Home"></div>
      首页
    </a>
    <a href="../../order/order.html" activeclass="current">
      <div class="icon icon-Document"></div>
      订单
    </a>
    <a href="../../member/member.html" activeclass="current">
      <div class="icon icon-User" ></div>我
    </a>
  </div>`
		$("body").append(tabBar);
		console.log('ss')
  }
}
