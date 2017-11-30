<template>
  <div>
   <h4>发表评论</h4>
   <textarea name="" placeholder="请输入评论内容,最多输入120字" v-model="postContent"></textarea>
   <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
   <ul class="mui-table-view mui-table-view-chevron">
    <li class="mui-table-view-cell mui-media" v-for="(item,index) in comp" :key="index">
					<a href="javascript:;" class="link">
							<p> <span>第{{index+1}}楼</span>&nbsp;&nbsp;<span class="">用户:{{item.user_name}}</span>&nbsp;&nbsp;<span>发表时间:{{item.add_time|dateformatter("YYYY-MM-DD HH:mm:ss")}}</span> </p>
					</a>
     <div>{{item.content}}</div>
				</li>
    <mt-button type="danger" plain size="large"  @click="loadMore" v-if="isShowMoreBtn">加载更多</mt-button>
			</ul>
  </div>
</template>

<script>
import axios from "axios";
import dateformatter from "../../filters/dateformatter.js"
import { Toast } from "mint-ui";

export default {
 data () {
  return {
   comp:[],
   pageIndex:1,
   isShowMoreBtn:true,
   postContent:""
  }
 },
 created () {
  this.getData();
 },
 filters:{
  dateformatter
 },
 methods:{
  getData(){
   axios({
    url:"http://vue.studyit.io/api/getcomments/"+this.id+"?pageindex="+this.pageIndex
  }).then(res=>{
   if(res.data.status==0){
    if(res.data.message.length>0){
     this.comp=this.comp.concat(res.data.message);
    }else{
     this.isShowMoreBtn=false;
     Toast("没有更多数据了!")
    }
   }
  })
  },
  loadMore(){
   this.pageIndex++;
   this.getData();
  },
  postComment(){
   if(this.postContent.trim()){
    axios({
    url:"http://vue.studyit.io/api/postcomment/"+this.id,
    method:"post",
    data:"content="+this.postContent
   }).then(res=>{
    if(res.data.status==0){
     this.comp.unshift({
      user_name:"匿名用户",
      add_time:new Date(),
      content:this.postContent
     })
     this.postContent=""
    }
   })
   
   }
   
  }
 },
 props:["id"]
  
}
</script>

<style>

.mui-table-view-chevron .mui-table-view-cell{
 padding:5px;
}
textarea{
 width: 100%;
 height: 50px;
 padding: 10px;
 margin-bottom: 0;
}
.link{
 background-color: #ccc;
 margin: 0;
 width: 100%;
 height: 30px;
}
.mui-table-view-cell > a:not(.mui-btn){
 margin: 0
}
</style>
