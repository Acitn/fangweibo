<template>
	<view>
		<view class="top">
			<view></view>
			<view class="switchBox">
				<view class="switch">动态</view>
				<view class="switch2">消息</view>
				<view :class="[tip == 1 ? 'topLine' : 'topLine2']"></view>
			</view>
			<i class="iconfont icon-24"></i>
		</view>
		<view class="dynamicBox">
			<view class="dynamicItem" v-for="(item, index) in 10" :key="index">
				<view class="dynamicIcon"></view>
				<view class="dynamicText">
					<view class="text">投票进行中，看看你是多数派还是少数派</view>
					<view class="text2">#看看你是多数派还是少数派##看看你是多数派还是少数派#发到手机反垄断法积分酸辣粉几点开始了佛教垃圾了的礼服京东是垦利街道反馈来得及看</view>
					<view class="other">
						<i class="iconfont icon-23_tongjileibie"></i>
						4-20
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
				tip: 1
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.top {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		padding: 0 20rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fafafa;
		border-bottom: 0.5px solid #e2e2e2;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: var(--status-bar-height);
		/* #endif */
		.switchBox {
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.switch {
				font-size: 34rpx;
				font-weight: bold;
				margin-right: 80rpx;
			}
			.switch2 {
				font-size: 32rpx;
				color: #999;
			}
			.topLine {
				position: absolute;
				bottom: 0;
				left: 248rpx;
				width: 80rpx;
				height: 6rpx;
				background-color: #fb8e1f;
				transition: all ease .5s;
			}
			.topLine2 {
				position: absolute;
				bottom: 0;
				left: 392rpx;
				width: 80rpx;
				height: 6rpx;
				background-color: #fb8e1f;
				transition: all ease .5s;
			}
		}	
		.icon-24 {

		}
	}
	.dynamicBox {
		padding-top: 110rpx;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: calc(var(--status-bar-height) + 110rpx);
		/* #endif */
		.dynamicItem {
			background-color: #fff;
			padding: 20rpx;
			display: flex;
			margin-bottom: 20rpx;
			.dynamicIcon {
				width: 90rpx;
				height: 90rpx;
				margin-right: 20rpx;
				background-color: #4CD964;
				border-radius: 50%;
			}
			.dynamicText {
				flex: 1;
				.text {
					font-size: 28rpx;
				}
				.text2 {
					font-size: 26rpx;
					color: #999;
					margin-top: 10rpx;
				}
				.other {
					display: flex;
					align-items: center;
					color: #999;
					font-size: 24rpx;
					margin-top: 10rpx;
				}
			}			
		}
	}
</style>
