<template>
	<view class="content">
		<view class="mask" @touchmove.stop.prevent v-show="showGroup" @click="showGrouping"></view>
		<view class="top">
			<view class="topTip">
				<i class="iconfont icon-xiangji"></i>
				<view class="tipText">
					<view v-if="tip == 1" class="item" @click="showGrouping">
						<text style="color:#000;font-size:34rpx">关注</text>
						<i :class="['iconfont',showGroup ? 'icon--shanglajiantou' : 'icon-xiala'] "></i>
					</view>
					<view v-else class="item2" @click="switchTip(1)">
						关注
					</view>
					<text class="tip2" :style="{color:tip == 1 ? '#999' : '#000',fontSize:tip == 1 ? '30rpx' : '34rpx'}" @click="switchTip(2)">推荐</text>
				</view>
				<i class="iconfont icon-jia"></i>
				<view :class="[tip == 1 ? 'topLine' : 'topLine2']"></view>
			</view>
			<view class="groupingList" v-show="showGroup"> 
				<view class="grouping">
					<view class="groupingTop">
						<text class="groupingTitle">默认分组</text>
						<text class="orange">编辑</text>
					</view>
					<view class="groupingContent">
						<view v-for="(item3,index3) in group" :key="item3.id" :class="{groupingItem:true,orange:clickGroup==item3.id}" @click="selectGroup(item3.id)">{{item3.text}}</view>
					</view>
				</view>
				<view class="grouping">
					<view class="groupingTop">
						<text class="groupingTitle">我的分组</text>
					</view>
					<view class="groupingContent">
						<view v-for="(item4,index4) in group2" :key="item4.id" :class="{groupingItem:true,orange:clickGroup==item4.id}" @click="selectGroup(item4.id)">{{item4.text}}</view>
						<view class="groupingItem virtual">
							<i class="iconfont icon-jia1"></i>
							新建分组
						</view>
					</view>
				</view>
			</view>
			<view class="topList">
				<view class="listItem">
					<view class="viaBox">
						<view class="via"></view>
						<view class="viaIcon" v-if="false"></view>
					</view>
					<view class="itemText">我的故事</view>
				</view>
				<view class="listItem">
					<view class="viaBox">
						<view class="via"></view>
						<view class="viaIcon" v-if="false"></view>
					</view>
					<view class="itemText">直播广场</view>
				</view>
				<view class="listItem">
					<view class="viaBox">
						<view class="via"></view>
						<view class="viaIcon" v-if="false"></view>
					</view>
					<view class="itemText">低收费</view>
				</view>
				<view class="listItem">
					<view class="viaBox">
						<view class="via"></view>
						<view class="viaIcon" v-if="false"></view>
					</view>
					<view class="itemText">而大是大非</view>
				</view>
			</view>
		</view>
		<microBlog :blogData="blog"></microBlog>
	</view>
</template>

<script>
	import microBlog from "../../components/microBlog/microBlog.vue"
	export default {
		components: {
			microBlog
		},
		data() {
			return {
				blog: "",
				showGroup: false,
				tip: 1,
				clickGroup: 1,
				group: [
					{"id":1,"text":"全部关注"},
					{"id":2,"text":"最新微博"},
					{"id":3,"text":"特别关注"},
					{"id":4,"text":"好友圈"},
					{"id":5,"text":"原创"},
					{"id":6,"text":"视频"},
					{"id":7,"text":"V+微博"},
					{"id":8,"text":"群微博"},
				],
				group2: ""
			}
		},
		onLoad() {
			//登录判断
			// var res = global.isLogin();
			var res = true
			console.log(res)
			if(!res){
			    uni.showModal({
					title:'请登录',
					content:"请登录",
					success:function(){
						if (res.confirm) {
						    console.log('用户点击确定');
							uni.navigateTo({
								url:"/pages/login/login"
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}else {
				//获取关注人的微博
				uni.request({
				    url: 'https://www.fastmock.site/mock/5be1a5131b5cf07cd613ef5c49c0d5e9/blog/microBlog',
				    success: (res) => {
				        console.log("微博数据",res.data);
						this.blog = this.blog == "" ? res.data.data : this.blog.push(res.data.data)
				    },
					fail: (err) => {
						console.log("失败",err)
					}
				});
			}	
		},
		methods: {
			showGrouping() {
				//获取我的分组
				uni.request({
				    url: 'https://www.fastmock.site/mock/5be1a5131b5cf07cd613ef5c49c0d5e9/blog/group',
				    success: (res) => {
				        console.log("我的分组",res.data);
						this.group2 = res.data.data
						this.showGroup = !this.showGroup
				    },
					fail: (err) => {
						console.log("失败",err)
					}
				});	
			},
			selectGroup(id) {
				this.clickGroup = id
				this.showGroup = false
			},
			//关注和推荐界面切换
			switchTip(tip){
				if(tip == 1) {
					this.tip = 1
				}else {
					this.tip = 2
				}
			}
		}
	}
</script>

<style lang='scss' scoped>
@import "/static/iconfont/iconfont.css";

/* 代替*全选选择器 */
:not(not) {  
  box-sizing: border-box;

}
page {
	background-color: #eeeeee;
	color: $uni-text-color;
}
.content {
	.mask {
		position: absolute;
		top: 90rpx;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.4);
		z-index: 2;
	}
	.top {
		 background-color: #fafafa;
		 position: relative;
		.topTip {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 90rpx;
			padding: 16rpx;
			border-bottom: 1rpx solid #e2e2e2;
			.topLine {
				position: absolute;
				bottom: 0;
				left: 275rpx;
				width: 80rpx;
				height: 6rpx;
				background-color: #fb8e1f;
				transition: all ease .5s;
			}
			.topLine2 {
				position: absolute;
				bottom: 0;
				left: 387rpx;
				width: 80rpx;
				height: 6rpx;
				background-color: #fb8e1f;
				transition: all ease .5s;
			}
			.icon-xiangji {
				font-size: 44rpx;
				color: #757575;
			}
			.tipText {
				display: flex;
				align-items: center;
				
				.item {
					display: flex;
					align-items: center;
					width: 110rpx;					
					.iconfont {
						font-size: 8rpx;
						font-weight: normal;
						padding-left: 6rpx;
					}
				}
				.item2 {
					color:#999;
					font-size:30rpx;
					width: 90rpx;
				}
				.tip2 {
					padding-left: 20rpx;
				}
			}
			.icon-jia {
				font-size: 44rpx;
				color: #fb8e1f;
			}
		}
		.groupingList {
			position: absolute;
			top: 90rpx;
			left: 0;
			z-index: 3;
			background-color: #fff;
			width: 750rpx;
			padding: 20rpx;
			.grouping {
				
				.groupingTop {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 26rpx;
					padding: 20rpx 0;
					.groupingTitle {
						color: #999;
					}
				}
				.groupingContent {
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-items: center;
					.virtual {
						background-color: #fff !important;
						border: 4rpx dashed #f2f2f2 !important;
						.icon-jia1 {
							color: #717171;
							font-size: 26rpx;
							margin-right: 5rpx;
						}
					}
					.groupingItem {
						width: 162.5rpx;
						height: 80rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-right: 20rpx;
						margin-bottom: 20rpx;
						font-size: 26rpx;
						background-color: #f2f2f2;
						&:nth-child(4n) {
							margin-right: 0;
						}
					}
				}
			}
		}
		.topList {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			height: 200rpx;
			width: 100%;
			.listItem {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 140rpx;
				.viaBox {
					.via {
						background-color: red;
						border-radius: 50%;
						width: 120rpx;
						height: 120rpx;
					}
				}
				.itemText {
					font-size: 24rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text-align: center;
					width: 118rpx;
				}
			}
		}
	}
}
.orange {
	color: #fb8e1f;
}
</style>
