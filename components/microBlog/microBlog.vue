<template name="microBlog">
	<view>
		<view class="mask" @touchmove.stop.prevent v-if="showMask"></view>
		<view class="blog" v-for="(item,index) in blogData" :key="index"> 
			<view class="blogTop">
				<view class="userBox">
					<image class="userIcon" :src="item.icon" mode="aspectFit"></image>
					<view class="userText">
						<view class="userName">{{item.userName}}</view>
						<view class="userMessage">
							<text class="date">{{item.date}}</text>
							<text>{{item.source}}</text>
						</view>
					</view>
				</view>
				<i class="iconfont icon-xiala"></i>
			</view>
			<view class="blogContent">
				<view class="contentText">{{item.text2}}</view>
				<view class="contentImg" v-if="item.img">
					<image v-for="(item2,index2) in item.img" :key="index2" :src="item2" lazy-load></image>
				</view>
			</view>
			<view class="blogOperate">
				<view class="operate" @click="show(index)">
					<i class="iconfont icon-icon--"></i>
					<text>{{item.transpond}}</text>
				</view>
				<view class="operate">
					<i class="iconfont icon-xiaoxi1"></i>
					<text>{{item.comment}}</text>
				</view>
				<view class="operate" v-if="item.Clike">
					<i class="iconfont icon-z-like"></i>
					<text>{{item.like}}</text>
				</view>
				<view class="operate" v-else>
					<i class="iconfont icon-iconkuozhan_dianzannor red"></i>
					<text class="red">{{item.like}}</text>
				</view>
			</view>
			<view class="transpondBox" v-if="item.showTranspond">
				<view class="transpondItem">
					<i class="iconfont icon-zhuanfa"></i>
					<text>快转</text>
				</view>
				<view class="transpondItem">
					<i class="iconfont icon-icon--"></i>
					<text>转发</text>
				</view>
				<view class="transpondItem" style="justify-content: space-between;">
					<view class="left">
						<i class="iconfont icon-fenxiang"></i>
						<text style="border-bottom: none;">分享</text>
					</view>
					<view class="right">
						<i class="iconfont icon-weixin"></i>
						<i class="iconfont icon-tubiaozhizuo-"></i>
						<i class="iconfont icon-qq"></i>
						<i class="iconfont icon-QQkongjian"></i>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMask: false
			};
		},
		// props 可以是数组或对象，用于接收来自父组件的数据
		props: ['blogData'],
		methods: {
			show(index) {
				this.blogData[index].showTranspond = true
				this.showMask = true
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "/static/iconfont/iconfont.css";

/* 代替*全选选择器 */
:not(not) {  
  box-sizing: border-box;
}
.mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,.4);
	z-index: 2;
}
.blog {
	background-color: #fff;
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	padding-bottom: 0;
	border-top: 1rpx solid #e2e2e2;
	border-bottom: 1rpx solid #e2e2e2;
	margin-bottom: 20rpx;
	position: relative;
	.blogTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.userBox {
			display: flex;
			align-items: center;
			.userIcon {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50rpx;
				margin-right: 20rpx;
			}
			.userText {
				.userName {
					font-size: 30rpx;
				}
				.userMessage {
					font-size: 24rpx;
					color: $uni-text-color-grey;
					display: flex;
					.date {
						margin-right: 10rpx;
					}
				}
			}
		}
		.icon-xiala {
			font-size: 24rpx;
			color: #d0d0d0;
			align-self: flex-start;
		}
	}
	.blogContent {
		margin: 20rpx 0;
		.contentText {
			font-size: 30rpx;
		}
		.contentImg {
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				margin-left: 20rpx;
				&:nth-child(3n + 1) {
					margin-left: 0;
				}
			}
		}
	}
	.blogOperate {
		border-top: 1rpx solid #e2e2e2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 80rpx;
		width: 100%;
		font-size: 26rpx;
		.iconfont{
			font-size: 34rpx;
			margin-right: 10rpx;
		}
	}
	.transpondBox {
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
		position: absolute;
		bottom: -290rpx;
		left: 0;
		z-index: 3;
		background-color: #fff;
		width: 100%;
		filter: drop-shadow(5rpx 5rpx 8rpx rgba(0, 0, 0, 0.4));
		.transpondItem {
			width: 100%;
			display: flex;
			align-items: center;
			font-size: 32rpx;
			text {
				height: 90rpx;
				line-height: 90rpx;
				flex: 1;
				border-bottom: 1rpx solid #e2e2e2;
			}
			
			.iconfont {
				font-size: 36rpx;
				margin-right: 10rpx;
			}
			.right {
				.iconfont {
					color: #e5e5e5;
				}
			}
		}
		&::after {
			content: '';
			position: absolute;
			top: -35rpx;
			left: 110rpx;
			width: 0;
			height: 0;
			border: 20rpx solid transparent;
			border-bottom: 20rpx solid #fff;
			background-color: transparent;
		}
	}
}
.red {
	color: $uni-color-error;
}
</style>
