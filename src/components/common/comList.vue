<template>
  <div class="container">
   <ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in comList" :key="index">
					<router-link class="mui-navigate-right" :to="'/home/comInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4 class="mui-ellipsis">{{item.title}}</h4>
       <P class="picImg"><span>发表时间:{{item.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span><span class="mui-pull-right">点击:{{item.click}}</span></P>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
import axios from "axios"
import dateformatter from "../../filters/dateformatter.js"

export default {
  data () {
   return {
    comList:[]
   }
  },
  created () {
   axios({
    url:"http://vue.studyit.io/api/getnewslist"
   }).then(res=>{
    if(res.data.status==0){
     this.comList=res.data.message
    }
   })
  },
  filters: {
   dateformatter
  }
}
</script>

<style>
.picImg{
 font-size:10px
}
.mui-table-view-cell{
 padding: 10px
}
</style>


