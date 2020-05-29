<template>
	<view>
		<view class="top">
			<view class="switch">
				<text class="text orange">推荐</text>
				<text class="text">热门</text>
				<text class="text">小视频</text>
			</view>
			<view class="searchBox">
				<view class="search">
					<i class="iconfont icon-sousuo"></i>
					搜你想看的视频
				</view>
				<i class="iconfont icon-huaban"></i>
			</view>
		</view>
		<view class="container">
			<view class="videoCard" v-for=" (item,index) in 10" :key="index">
				<view class="videoTop">
					<view class="userBox">
						<view class="img"></view>
						<view class="textBox">
							<view class="userName">朱一旦的枯燥生活</view>
							<view class="describe">知名搞笑幽默博主</view>
						</view>
					</view>
					<view class="attention">
						<i class="iconfont icon-jia1"></i>
						关注
					</view>
				</view>
				<view class="content" @click="showDetail()">
					<view class="cover"></view>
					<i class="iconfont icon-ziyuan"></i>
					<view class="coverText">
						<view class="coverItem">315万次观看</view>
						<view class="coverItem">2:11</view>
					</view>
					<image mode="aspectFit" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"></image>
				</view>
				<view class="videoBottom">
					<view class="message">“有钱人”的出行方式</view>
					<view class="message2">搞笑幽默·戏精恶搞</view>
					<view class="messageBox">
						<view class="messageItem">全站日榜最高第3名</view>
						<i class="iconfont icon-gengduo"></i>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const apiPromise = require('../../static/utils/Promise.js');
	export default {
		data() {
			return {
				videos: ""
			}
		},
		onLoad() {
			//获取推荐视频
			apiPromise.Get('/videos').then((res) => {
				console.log("推荐视频数据",res.data);
				let data = res.data,i ;
				for(i = 0; i < data.length; i++) {
					data[i].showTranspond = false
				}
				this.blog = data
			}).catch((err) => {
				console.log("获取推荐视频超时",err)
				uni.showToast({
				    title: '获取超时,请刷新重试',
				    duration: 2000
				});
			})
		},
		methods: {
			showDetail(e) {
				uni.navigateTo({
					url: './videoDetail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.top {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		padding: 0 20rpx;
		width: 100%;
		height: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #fafafa;
		border-bottom: 0.5px solid #e2e2e2;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: var(--status-bar-height);
			height: calc(160rpx + var(--status-bar-height));
		/* #endif */
		.switch {
			height: 70rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32rpx;
			.orange {
				color: #fe7f00;
				font-size: 34rpx;
			}
			.text {
				margin-right: 32rpx;
				font-weight: bold;
				&:last-child {
					margin-right: 0;
				}
			}
		}
		.searchBox {
			display: flex;
			flex: 1;
			align-items: center;
			padding-bottom: 20rpx;
			.search {
				background-color: #eaeaea;
				flex: 1;
				height: 70rpx;
				border-radius: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #999;
				.icon-sousuo {
					margin-right: 10rpx;
					font-size: 34rpx;
				}
			}
			.icon-huaban {
				font-size: 50rpx;
				margin-left: 20rpx;
			}
		}
	}
	.container {
		padding-top: 180rpx;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: calc(var(--status-bar-height) + 180rpx);
		/* #endif */
		.videoCard {
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			.videoTop {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100rpx;
				.userBox {
					display: flex;
					.img {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						background-color: red;
						margin-right: 15rpx;
					}
					.textBox {
						display: flex;
						flex-direction: column;
						font-size: 28rpx;	
						.describe {
							font-size: 24rpx;
							color: #999;
							margin-top: 15rpx;
						}
					}
				}
				.attention {
					color: #f59429;
					height: 60rpx;
					padding: 0 20rpx;
					border-radius: 30rpx;
					border: 1rpx solid #f59429;
					font-size: 26rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					.iconfont {
						font-size: 28rpx;
						margin-right: 8rpx;
					}
				}
			}
			.content {
				width: 100%;
				height: 350rpx;
				background-color: #000000;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				.cover {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 350rpx;
					background-color: rgba(0,0,0,.6);
					z-index: 1;
				}
				.icon-ziyuan {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-size: 50rpx;
					color: #fff;
					z-index: 2;
				}
				.coverText {
					position: absolute;
					bottom: 20rpx;
					left: 0;
					width: 100%;
					padding: 0 20rpx;
					display: flex;
					justify-content: space-between;
					color: #fff;
					font-size: 24rpx;
					z-index: 2;
				}
			}
			.videoBottom {
				margin-top: 15rpx;
				.message {
					font-size: 32rpx;
				}
				.message2 {
					font-size: 24rpx;
					color: #999;
					margin: 10rpx 0;
				}
				.messageBox {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.messageItem {
						background-color: #fdf6e8;
						color: #fe7f00;
						font-size: 24rpx;
						padding: 8rpx;
					}
					.iconfont {
						font-size: 44rpx;
					}
				}
			}
		}
	}
</style>
