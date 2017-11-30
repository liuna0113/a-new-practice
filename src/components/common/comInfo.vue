<template>
  <div class="container">
   <ul class="mui-table-view mui-table-view-chevron">
    <li class="mui-table-view-cell mui-media" v-for="(item,index) in comInfo" :key="index">
					<a href="javascript:;" class="">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p><span>发表时间:{{item.add_time|dateformatter("YYYY-MM-DD HH:mm:ss")}}</span> <span class="mui-pull-right">点击:{{item.click}}</span></p>
						</div>
					</a>
     <div class="content" v-html="item.content">
     </div>
     <div class="comment">
      <comp :id="$route.params.id"></comp>
     </div>
				</li>
			</ul>
  </div>
</template>

<script>
import axios from "axios";
import dateformatter from "../../filters/dateformatter"
import comp from "../family/comp.vue"

export default {
  data () {
   return {
    comInfo:[],
   }
  },
  created () {
   axios({
    url:"http://vue.studyit.io/api/getnew/"+this.$route.params.id,
   }).then(res=>{
    if(res.data.status==0){
     this.comInfo=res.data.message;
    }
   })
  },
  filters: {
   dateformatter
  },
  components: {
   comp
  }
}
</script>

<style>
.mui-table-view-chevron .mui-table-view-cell{
 padding: 10px 0 5px 15px;
}
.mui-media-body{
 border-bottom:1px solid #000;
}
.mui-table-view-cell a{
 width: 100%;
 display:block;
 box-sizing: border-box
}
.content{
 margin-top: 20px;
 padding-right:10px 
}
.comment{
 /* padding-left: 10px */
}
</style>
