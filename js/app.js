var app = {
	tab:function(){
		$(".tab-content>div").eq(0).show();
		$('.tab>div').on('click',function(e){
		  $(this).addClass('active').siblings().removeClass('active');
		  $(this).parent().siblings('.tab-content').children().eq($(this).index()).show().siblings().hide()
		})
	},
	panel:function(content,callback){
		$('body').append(`<div class="panel"> <div class="panel-content">`${content}`</div> <div class="panel-close icon icon-Clear close"></div></div>`);
		$('.panel-close').click(function(){
			$('.panel').hide()
		})
		callback || callback()
	},

 tabBar:function(index){
	  let tabBar=`  <div class="tabbar">
		  <a href="../index/index.html" exact activeclass="current">
		    <div class="icon icon-Home"></div>
		    首页
		  </a>
		  <a href="../order/order.html" activeclass="current">
		    <div class="icon icon-Document"></div>
		    订单
		  </a>
		  <a href="../member/member.html" activeclass="current">
		    <div class="icon icon-User" ></div>我
		  </a>
		</div>`;
		$("body").append(tabBar);
		$('.tabbar a').eq(index || 0).addClass('current');
  }
}
