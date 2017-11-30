<template>
  <div class="container">
   <mt-swipe :show-indicators="false" class="swipe">
     <mt-swipe-item><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4158117619,2767325886&fm=11&gp=0.jpg" alt=""></mt-swipe-item>
     <mt-swipe-item><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=668745565,695290075&fm=11&gp=0.jpg" alt=""></mt-swipe-item>
     <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3472428522,2344396246&fm=27&gp=0.jpg" alt=""></mt-swipe-item>
   </mt-swipe>
   <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4">
                 <router-link to="/home/comList">
                   <img src="../../images/menu1.png" alt="">
                   <div class="mui-media-body">新闻资讯</div>
                 </router-link>
              </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                  <img src="../../images/menu2.png" alt="">
                  <div class="mui-media-body">图片分享</div>
                </a>
               </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                 <a href="#">
                  <img src="../../images/menu3.png" alt="">
                  <div class="mui-media-body">商品购买</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4">
                 <a href="#">
                   <img src="../../images/menu4.png" alt="">
                   <div class="mui-media-body">留言反馈</div>
                 </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                  <img src="../../images/menu5.png" alt="">
                  <div class="mui-media-body">视频专区</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <a href="#">
                   <img src="../../images/menu6.png" alt="">
                   <div class="mui-media-body">联系我们</div>
                </a>
              </li>
		        </ul> 
		</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
html,body{
 padding: 0;
 margin: 0;
 height: 100%;
}
 .swipe{
  height: 200px;
 }
 .swipe img{
  height: 100%;
 }
 .mui-content .mui-table-view{
  background-color: #fff;
  border:none;
 }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
 }
 .mui-table-view-cell a img{
  width: 50%;
 }
</style>


