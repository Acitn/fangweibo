<template name="microBlog">
	<view>
		<view class="blog" v-for="(item,index) in blogData" :key="item.id"> 
			<view class="blogTop">
				<view class="userBox">
					<image class="userIcon" :src="item.icon" mode="aspectFit"></image>
					<view class="userText">
						<view class="userName">{{item.userName}}</view>
						<view class="userMessage">
							<text class="date">2小时前</text>
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
				<view class="operate">
					<i class="iconfont icon-icon--"></i>
					<text>{{item.transpond}}</text>
				</view>
				<view class="operate">
					<i class="iconfont icon-xiaoxi1"></i>
					<text>{{item.comment}}</text>
				</view>
				<view class="operate">
					<i class="iconfont icon-z-like"></i>
					<text>{{item.like}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// props 可以是数组或对象，用于接收来自父组件的数据
		props: ['blogData']
	}
</script>

<style lang="scss" scoped>
@import "/static/iconfont/iconfont.css";

/* 代替*全选选择器 */
:not(not) {  
  box-sizing: border-box;
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
}
</style>
