<template>
	<view>
		<view class="topCard">
			<view class="search">
				<i class="iconfont icon-sousuo"></i>
				大家正在搜：我国夜间灯光指数提升近200%
			</view>
			<view class="hotBox">
				<view class="hotTitle">
					<i class="iconfont icon-huabanfuben1"></i>
					微博热搜
				</view>
				<view class="hotContent">
					<view class="hotItem">
						<text>士大夫打发点发士大夫打发点发</text>
						<view class="icon orange">热</view>
					</view>
					<view class="hotItem">
						<text>士大夫打发</text>
						<view class="icon red">新</view>
					</view>
					<view class="hotItem">
						<text>打发打发发</text>
						<view class="icon blue">荐</view>
					</view>
					<view class="hotItem">
						<text>士大夫打发点发</text>
						<view class="icon orange">热</view>
					</view>
					<view class="hotItem">
						<text>士我有哦那你发</text>
					</view>
					<view class="hotItem orange2">
						<text>更多热搜</text>
						<i class="iconfont icon-xiangyou"></i>
					</view>
				</view>
			</view>
		</view>
		<view class="functionCard">
			<view class="funBox">
				<view class="funItem">
					<i class="iconfont icon-recruitment"></i>
					找人
				</view>
				<view class="funItem">
					<i class="iconfont icon-chengshi"></i>
					同城
				</view>
				<view class="funItem">
					<i class="iconfont icon-icon_luntan-mian"></i>
					超话
				</view>
				<view class="funItem">
					<i class="iconfont icon-xinpinrenqiwang"></i>
					新品发布
				</view>
				<view class="funItem">
					<i class="iconfont icon-zhibo"></i>
					直播
				</view>
				<view class="funItem">
					<i class="iconfont icon-lvzhou_gengduo"></i>
					更多
				</view>
			</view>
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" autoplay indicator-dots indicator-color="#fff" indicator-active-color="#d7d7d7">
			                <swiper-item>
								<image class="swiperImg" src="../../static/image/swiper.jpg"></image>
			                    <view class="swiper-item ">A</view>
			                </swiper-item>
			                <swiper-item>
								<image class="swiperImg" src="../../static/image/swiper2.jpg"></image>
			                    <view class="swiper-item orange">B</view>
			                </swiper-item>
			                <swiper-item>
								<image class="swiperImg" src="../../static/image/swiper3.jpg"></image>
			                    <view class="swiper-item blue">C</view>
			                </swiper-item>
			            </swiper>
			        </view>
			    </view>
			</view>
		</view>
	
		<microBlog :blogData="blog" @show="showTranSpond"></microBlog>
		<loading :text="loadingText"></loading>
	</view>
</template>

<script>
	import microBlog from "../../components/microBlog/microBlog.vue"
	import loading from "../../components/loading/loading.vue"
	const apiPromise = require('../../static/utils/Promise.js');
	
	export default {
		components: {
			microBlog,
			loading
		},
		data() {
			return {
				blog: "",					//别人发的微博
				loadingText: "加载中...", 	//加载组件显示的文本
			}
		},
		onReachBottom() {
			console.log("到底了")
			//获取关注人的微博
			apiPromise.Post('/microBlog').then((res) => {
				console.log("微博数据",res.data);
				this.blog = this.blog.concat(res.data)
			}).catch((err) => {
				console.log("失败",err)
			})
		},
		onLoad() {
			//登录判断
			// var res = global.isLogin();
			var res = true
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
				apiPromise.Post('/microBlog').then((res) => {
					console.log("微博数据",res.data);
					this.blog = res.data
				}).catch((err) => {
					console.log("失败",err)
				})
			}	
		},
		methods: {
			showTranSpond(params) {
			    this.blog[params].showTranspond = true
			},
		}
	}
</script>

<style lang="scss">
	.topCard {
		width: 100%;
		padding: 20rpx 10rpx;
		background-color: #fff;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: calc(var(--status-bar-height) + 20rpx);
		/* #endif */
		margin-bottom: 20rpx;
		.search {
			background-color: #eaeaea;
			height: 60rpx;
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
		.hotTitle {
			font-size: 28rpx;
			color: #545454;
			padding: 20rpx 10rpx;
			.icon-huabanfuben1 {
				color: #e15a61;
				font-size: 40rpx;
				margin-right: 10rpx;
			}
		}
		.hotContent {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			padding: 0 10rpx;
			.hotItem {
				width: 50%;
				height: 60rpx;
				font-size: 32rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				text {
					max-width: 260rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.icon {	
					width: 38rpx;
					height: 38rpx;
					line-height: 38rpx;
					text-align: center;
					font-size: 24rpx;
					font-weight: bold;
					border-radius: 10rpx;
					color: #fff;
					margin-left: 10rpx;
				}
				.icon-xiangyou {
					margin-left: 10rpx;
				}
			}
		}
	}
	.functionCard {
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 20rpx;
		.funBox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.funItem {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				margin-bottom: 20rpx;
				.iconfont {
					font-size: 50rpx;
					margin-bottom: 10rpx;
				}
				.icon-recruitment {color: #febd3e;}
				.icon-chengshi {color: #3298ed;}
				.icon-icon_luntan-mian {color: #f2931d;}
				.icon-xinpinrenqiwang {color: #ff642e;}
				.icon-lvzhou_gengduo {color: #a4aac2;}
			}
		}
		.swiperImg {
			width: 100%;
			height: 100%;
		}
	}
	.orange {
		background-color: #fd9d19;
	}
	.orange2 {
		color: #fd9d19;
	}
	.red {
		background-color: #f54c61;
	}
	.blue {
		background-color: #45abfe;
	}
</style>
