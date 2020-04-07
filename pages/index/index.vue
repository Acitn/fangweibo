<template>
	<view class="content">
		<view class="top">
			<view class="topTip">
				<i class="iconfont icon-xiangji"></i>
				<view class="tipText">
					<view class="item">
						<text>关注</text>
						<i class="iconfont icon-xiala"></i>
					</view>
					<text class="tip2">推荐</text>
				</view>
				<i class="iconfont icon-jia"></i>
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
				blog: ""
			}
		},
		onLoad() {
			var res = global.isLogin();
			console.log(res)
			if(!res){
			    uni.showModal({
					title:'请登录',
					content:"请登录",
					success:function(){
						uni.navigateTo({
							url:"/pages/login/login"
						});
					}
				})
			}
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
		},
		methods: {

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
	 
	.top {
		 background-color: #fafafa;
		.topTip {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 90rpx;
			padding: 16rpx;
			border-bottom: 1rpx solid #e2e2e2;
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
					color: #000;
					font-size: 34rpx;
					font-weight: bold;
					
					text {
						position: relative;
						&::before {
							content: '';
							position: absolute;
							bottom: -20rpx;
							left: 0;
							width: 100%;
							height: 6rpx;
							background-color: #fb8e1f;
						}
					}
					.icon-xiala {
						font-size: 8rpx;
						font-weight: normal;
						padding-left: 6rpx;
					}
				}
				.tip2 {
					padding-left: 20rpx;
					font-size: 30rpx;
					color: $uni-text-color-grey;
				}
			}
			.icon-jia {
				font-size: 44rpx;
				color: #fb8e1f;
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
</style>
