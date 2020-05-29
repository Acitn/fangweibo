<template>
	<view>
		<!-- 顶部栏 -->
		<view class="top">
			<i class="iconfont icon-add-friends_icon"></i>
			<text>我</text>
			<view class="iconBox">
				<i class="iconfont icon-saoma"></i>
				<i class="iconfont icon-24"></i>
			</view>
		</view>
		<!-- 顶部栏 -->
		<view class="container">
			<!-- 用户信息 -->
			<view class="userCard">
				<view class="userTop">
					<view class="userMessage">
						<view class="img"></view>
						<view class="userText">
							<view class="userName">Xoen</view>
							<view class="introduce">简介:暂无介绍</view>
						</view>
					</view>
					<view class="userMembers">
						<i class="iconfont icon-huiyuan"></i>
						<text>会员</text>
					</view>
				</view>
				<view class="userGrid">
					<view class="gridItem">
						<text class="gridNum">562</text>
						<text class="gridText">微博</text>
					</view>
					<view class="gridItem">
						<text class="gridNum">52</text>
						<text class="gridText">关注</text>
					</view>
					<view class="gridItem">
						<text class="gridNum">123</text>
						<text class="gridText">粉丝</text>
					</view>
				</view>
			</view>
			<!-- 用户信息 -->
			<!-- 功能卡片 -->
			<view class="functionCard">
				<view class="functionItem">
					<i class="iconfont icon-xiangce"></i>
					<text>我的相册</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-iconset0116"></i>
					<text>我的故事</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-icon_dianzan"></i>
					<text>我的赞</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-dingdan"></i>
					<text>粉丝服务</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-ai-wallet"></i>
					<text>微博钱包</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-icon-"></i>
					<text>微博优选</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-toutiao"></i>
					<text>粉丝头条</text>
				</view>
				<view class="functionItem">
					<i class="iconfont icon-kefu"></i>
					<text>客服中心</text>
				</view>
			</view>
			<!-- 功能卡片 -->
			<!-- 超话社区 -->
			<view class="box">
				<view class="boxTop">
					<view class="boxTitle">
						<i class="iconfont icon-icon_luntan-mian"></i>
						<text>超话社区</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<i class="iconfont icon-xiangyou"></i>
					</view>
				</view>
				<view class="communityBox">
					<view class="img"></view>
					<view class="communityItem">
						<view class="communityName">Xoen超话</view>
						<view class="communityText">画师 Xoen超话</view>
					</view>
				</view>
			</view>
			<!-- 超话社区 -->
			<!-- 访问记录 -->
			<view class="box">
				<view class="boxTop">
					<view class="boxTitle">
						<i class="iconfont icon-lishizhangdan"></i>
						<text>我的经常访问</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<i class="iconfont icon-xiangyou"></i>
					</view>
				</view>
				<view class="recordBox">
					<view class="recordItem">
						<view class="img2"></view>
						<text class="text">Aftin</text>
					</view>
					<view class="recordItem">
						<view class="img2"></view>
						<text class="text">Bddle</text>	
					</view>
					<view class="recordItem">
						<view class="img2"></view>
						<text class="text">的塑料袋四大声道</text>	
					</view>
					<view class="recordItem">
						<view class="img2"></view>
						<text class="text">啊啊的方法</text>		
					</view>
					<view class="recordItem">
						<view class="img2"></view>
						<text class="text">大发放是是是</text>	
					</view>
				</view>
			</view>
			<!-- 访问记录 -->
			<!-- 关注检测 -->
			<view class="box">
				<view class="boxTop">
					<view class="boxTitle">
						<i class="iconfont icon-iconfontzhizuobiaozhun023107"></i>
						<text>微博关注检测</text>
					</view>
					<view class="more">
						<text>立即查看</text>
						<i class="iconfont icon-xiangyou"></i>
					</view>
				</view>
				<view class="detectionBox">
					<view class="detectionItem">
						<i class="iconfont icon-zhiliangjiance"></i>
						<text>微博关注检测</text>
					</view>
					<view class="detectionItem">
						<i class="iconfont icon-huiyuanchaxun"></i>
						<text>查看沉寂用户</text>
					</view>
					<view class="detectionItem">
						<i class="iconfont icon-redu1"></i>
						<text>全站最热博主</text>
					</view>
				</view>
			</view>
			<!-- 关注检测 -->
			<!-- 其他 -->
			<view class="box2">
				<view class="boxItem">
					<view class="itemLeft">
						<i class="iconfont icon-sd-card-fill"></i>
						<text class="text">免流量</text>
						<text class="text2">流量免费任性玩</text>
					</view>
					<i class="iconfont icon-xiangyou"></i>
				</view>
				<view class="boxItem">
					<view class="itemLeft">
						<i class="iconfont icon-yundong"></i>
						<text class="text">微博运动</text>
						<text class="text2">运动红包天天抽</text>
					</view>
					<i class="iconfont icon-xiangyou"></i>
				</view>
				<view class="boxItem">
					<view class="itemLeft">
						<i class="iconfont icon-lishizhangdan"></i>
						<text class="text">草稿箱</text>
					</view>
					<i class="iconfont icon-xiangyou"></i>
				</view>
			</view>
			<!-- 其他 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
	.top {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		padding: 0 20rpx;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fafafa;
		border-bottom: 0.5px solid #e2e2e2;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: var(--status-bar-height);
			height: calc(90rpx + var(--status-bar-height));
		/* #endif */
		font-size: 34rpx;
		.iconfont {
			font-size: 40rpx;
		}
		.iconBox {
			display: flex;
			.icon-saoma {
				margin-right: 30rpx;
			}
		}
		
	}
	.container {
		padding-top: 110rpx;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: calc(var(--status-bar-height) + 110rpx);
		/* #endif */
		.userCard {
			width: 100%;
			margin-bottom: 20rpx;
			background-color: #fff;
			position: sticky;
			top: 90rpx;
			.userTop {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 0.5px solid #e2e2e2;
				padding: 20rpx;
				.userMessage {
					display: flex;
					align-items: center;
					.img {
						border-radius: 50%;
						width: 140rpx;
						height: 140rpx;
						background-color: red;
						margin-right: 20rpx;
					}
					.userText {
						.userName {
							font-size: 34rpx;
							margin-bottom: 15rpx;
						}
						.introduce {
							font-size: 28rpx;
							color: #999999;
						}
					}
				}
				.userMembers {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					color: #f0a956;
					.iconfont {
						color: #c7c7c7;
						font-size: 40rpx;
						margin-right: 10rpx;
					}
				}
			}
			.userGrid {
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 110rpx;
				.gridItem {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.gridNum {
						font-size: 28rpx;
					}
					.gridText {
						font-size: 32rpx;
						color: #999999;
					}
				}			
			}
		}
		.functionCard {
			/* display: grid;
			grid-template-columns: repeat(4,1fr);
			grid-template-rows: 1fr 1fr; */
			display: flex;
			flex-wrap: wrap;
			background-color: #fff;
			margin-bottom: 20rpx;
			.functionItem {
				width: 25vw;
				font-size: 24rpx;
				padding: 20rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.iconfont {
					font-size: 60rpx;
					margin-bottom: 20rpx;
				}
				.icon-xiangce, .icon-kefu {
					color: #5ecf74;
				}
				.icon-iconset0116, .icon-toutiao {
					color: #f7a51b;
				}
				.icon-icon_dianzan, .icon-ai-wallet, .icon-icon- {
					color:#ff6079;
				}
				.icon-dingdan {
					color: #2b90eb;
				}
			}
		}
		.box {
			margin-bottom: 20rpx;
			padding: 0 20rpx;
			background-color: #fff;
			.boxTop {
				height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.boxTitle {
					font-size: 34rpx;
					.iconfont {
						font-size: 44rpx;
						color: #fec00d;
						margin-right: 10rpx;
					}
					.icon-iconfontzhizuobiaozhun023107 {
						color: #64bbff;
					}
				}
				.more {
					font-size: 26rpx;
					display: flex;
					align-items: center;
					color: #999;
					.icon-xiangyou {
						color: #999;
						font-size: 32rpx;
					}
				}
				
			}
			.communityBox {
				display: flex;
				padding-bottom: 20rpx;
				.img {
					width: 130rpx;
					height: 130rpx;
					background-color: #B3D4FC;
					margin-right: 10rpx;
				}
				.communityItem {
					display: flex;
					flex-direction: column;
					justify-content: center;
					.communityName {
						font-size: 30rpx;
						margin-bottom: 15rpx;
					}
					.communityText {
						font-size: 24rpx;
						color: #999;
					}
				}
			}
			.recordBox {
				display: flex;
				padding-bottom: 20rpx;
				.recordItem {				
					margin-right: 10rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					&:last-child {
						margin-right: 0;
					}
					.text {
						width: 130rpx;
						font-size: 26rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						text-align: center;
					}
					.img2 {
						width: 130rpx;
						height: 130rpx;
						background-color: #434d8a;
						margin-bottom: 20rpx;
						border-radius: 50%;
					}
				}
			}
			.detectionBox {
				display: flex;
				justify-content: center;
				padding-top: 20rpx;
				padding-bottom: 20rpx;
				.detectionItem {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
					margin-right: 30rpx;
					.icon-zhiliangjiance, .icon-huiyuanchaxun {
						font-size: 70rpx;
						color: #3ea2fe;
					}
					.icon-redu1 {
						font-size: 70rpx;
						color: #fe6212;
					}
				}
			}
		}
		.box2 {
			background-color: #fff;
			margin-bottom: 20rpx;
			padding: 0 20rpx;
			.boxItem {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 90rpx;
				.itemLeft {
					.iconfont {
						font-size: 48rpx;
						margin-right: 20rpx;
					}
					.icon-sd-card-fill {
						color: #ffa200;
					}
					.icon-yundong {
						color: #ffa200;
					}
					.icon-lishizhangdan {
						color: #5b99ee;
					}
					.text {
						font-size: 32rpx;
					}
					.text2 {
						margin-left: 20rpx;
						font-size: 24rpx;
						color: #999;
					}
				}
				.icon-xiangyou {
					font: 32rpx;
					color: #999;
				}
			}
		}
	}
</style>
