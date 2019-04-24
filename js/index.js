;(function (){
	 $(document).ready(function () {
	 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '  .swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  speed:2000,
  autoplay :{
  	delay:2000,
  	disableOnInteraction:false
  	
  },
   
  })
	
	})


	$(document).ready(function() {
				var mySwiper = new Swiper('.swiper-container-two', {
					 slidesPerView:3.42,
					direction: 'horizontal',
					pagination: {
						el: '.swiper-pagination', // 如果需要分页器
					},
				

					
				})
			})

var vm = new Vue({
	
	el:"#warp",
	data: function(){
		return {
			zhoubianyou:"周边游",
			shanghaizhan:"上海站",
			zhoubianmiaosha:"周边秒杀",
			gengduo:"更多>",
			hangzhou:"杭州",
			lijian:"立减100元",
			span1message:"【自助晚餐】浙江开元萧山宾馆1晚+双人自助早...",
			price:"￥400",
			suzhou:"苏州",
			kunshan:"昆山",
			mudi:"热门目的地",
			zijia:"自驾游",
			qingming:"清明不涨价",
			gentuan:"周边跟团",
			yiriyou:"一日游",
			jingdian:"景点门票",
			qinzi:"亲子游",
			taqing:"春游踏青",
			wenquan:"温泉度假",
			gentuanyou:"跟团游",
			shanghaichufa:"上海出发",
			gentuantext:"上海+苏州+杭州+乌镇5日4晚跟团游（5钻）携程自营。招牌热卖【非常5A印象】",
		    gentuanprices:"4.9分 4739人出游",
		    spanprice:"￥2799",
		    chakan:"查看更多的跟团游>",
		    riyou:"一日游",
		    dongfang:"上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【海陆空游上海 导游贴心陪同 日夜游随心选】",
		    pingfen:"4.9分 4739人出游",
		    priceone:"￥175",
		    chakanyi:"查看更多的一日游>",
		}
		
		
	},
	
	
	
	
	
	
	
	
	
	
	
})
	
	
	
	
	
	///////////////////
	
	$(function() {
        $(window).scroll(function() {
            if($(document).scrollTop() >1700) {
                $(".tuanyou-top").addClass("f")
               
            }else{
            	 $(".tuanyou-top").removeClass("f")
                
            }
        });
    });

	
})();