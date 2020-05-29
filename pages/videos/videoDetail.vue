<template>
	<view class="container">
		<video
			class="videoBox"
			id="myVideo"
			:poster="videoDetail.img"
			:src="videoDetail.url"
			controls
		></video>
			<!-- @error="videoErrorCallback" -->
		<view class="list">
			<text class="comment active">简介</text>
			<view class="comment">
				<text>评论</text>
				<text class="num">{{videoDetail.comment}}</text>
			</view>
		</view>
		<view class="content">
			<view class="infoBox">
				<view class="userItem">
					<view class="icon"></view>
					<view class="userMessage">
						<view class="name">
							{{videoDetail.userName}}
							<text class="icon2">作者</text>
						</view>
						<view class="text">87万粉丝 - {{videoDetail.userType}}</view>
					</view>
				</view>
				<view class="titleItem">
					{{videoDetail.title}}
					<i class="iconfont icon-xiangxia"></i>
				</view>
				<view class="rankItem">
					<view class="rankName">
						<i class="iconfont icon-paiming"></i>
						生活日榜最高第8名
					</view>
					<view class="rankMore">
						点击查看
						<i class="iconfont icon-xiangyou"></i>
					</view>	
				</view>
				<view class="infoText">3月27日 - 176万次观看</view>
				<view class="btnItem">
					<view class="fun">
						<i class="iconfont icon-zhuanfa1"></i>
						{{videoDetail.transpond}}
					</view>
					<view class="fun">
						<i class="iconfont icon-pinglun"></i>
						{{videoDetail.comment}}
					</view>
					<view class="fun">
						<i class="iconfont icon-dianzan"></i>
						{{videoDetail.like}}
					</view>
					<view class="fun">
						<i class="iconfont icon-fenxiang1"></i>
						分享
					</view>
				</view>
				<view :class="show2 ? 'show':'hidde'" class="tag" ref="tag">
					<view class="tag2" ref="tag2">
						<view class="tagItem" style="margin-right: 15rpx;" v-for="(item,index) in videoDetail.tags" :key="index">{{item}}</view>
					</view>
					<view class="moreBox" v-show="show&&!show2" @click="showMore()" ref="showBtn">
						更多{{moreNum}}个
						<i class="iconfont icon-xiangxia"></i>
					</view>
					<view class="iconfont icon-shang" v-show="show2" @click="showMore()"></view>
				</view>
			</view>
			<view class="videoList">
				<view class="video2" v-for="(item,i) in list" :key="i">
					<image class="videoImg2" :src="item.icon" mode="scaleToFill"></image>
					<view class="videoMessage2">
						<view class="videoTitle2">{{item.title}}</view>
						<view class="videoText2">{{item.userName}} - {{item.play}}次观看</view>
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
				list: [],
				tagHeight: '33',
				show: false,
				show2: false,
				moreNum: 5,
				videoDetail: {url:''}
			};
		},
		mounted(){
			//获取视频详细信息
			apiPromise.Post('/videoDetail').then((res) => {
				console.log("视频信息",res.data);
				let data = res.data,i ;
				for(i = 0; i < data.length; i++) {
					data[i].showTranspond = false
				}
				this.videoDetail = data
				//获取推荐视频
				apiPromise.Get('/videos').then((res) => {
					console.log("推荐视频数据",res.data);
					this.list = res.data
				}).catch((err) => {
					console.log("获取推荐视频超时",err)
					uni.showToast({
					    title: '获取超时,请刷新重试',
					    duration: 2000
					});
				})
				//延迟等待数据更新完再执行
				this.$nextTick(function(){
					let tag = this.$refs.tag.$el.offsetHeight,
						tag2 = this.$refs.tag2.$el.offsetHeight,
						childrenArray = this.$refs.tag2.$children,
						parentWidth = this.$refs.tag2.$el.clientWidth,
						childWidth = 0,
						length = childrenArray.length
					//如果子元素高度高过父元素说明一行显示不全
					if(tag < tag2) {
						this.show = true
						for (let i = 0; i < length; i++) {
							let str = childrenArray[i].$el.style.marginRight
								str=Number(str.replace(/[^0-9]/ig, ""));
								childWidth += childrenArray[i].$el.offsetWidth + str
							// 计算出第几个开始换行
							if(childWidth > parentWidth) {
								
								let a = childWidth + this.$refs.showBtn.$el.clientWidth-childrenArray[i].$el.offsetWidth - str
								if(a>parentWidth) {
									this.moreNum = length - i + 2
								} else{
									this.moreNum = length - i + 1
								}
								break
							}
						}
					} else {
						this.show = false
					}
				})
			}).catch((err) => {
				console.log("获取视频信息超时",err)
				uni.showToast({
					title: '获取视频超时,请刷新重试',
					duration: 2000
				});
			})	
		},
		methods: {
			showMore() {
				this.show2 = !this.show2
			}
		}
	};
</script>

<style lang="scss">
.container {
	display: flex;
	flex-direction: column;
	background-color: #fff;
	.videoBox {
		width: 100vw;
		height: 400rpx;
	}
	.list {
		width: 100vw;
		height: 80rpx;
		border-top: 1rpx solid #e8e8e8;
		border-bottom: 1rpx solid #e8e8e8;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #8e8e8e;
		.comment {
			display: flex;
			padding: 0 40rpx;
			.num {
				font-size: 24rpx;
			}
		}
		.active {
			color: #000 !important;
			font-weight: bold;
		}
	}
	.content {
		padding: 0 30rpx;
		.infoBox {
			padding-top: 30rpx;
			.userItem {
				display: flex;
				align-items: center;
				.icon {
					width: 100rpx;
					height: 100rpx;
					background-color: red;
					border-radius: 50%;
					margin-right: 20rpx;
				}
				.userMessage {
					.name{
						font-size: 28rpx;
						.icon2 {
							font-size: 24rpx;
							border: 1rpx solid #636363;
							padding: 5rpx 10rpx;
							border-radius: 25rpx;
							margin-left: 5rpx;
						}
					}
					.text {
						color: #969696;
						font-size: 24rpx;
						margin-top: 10rpx;
					}
				}
			}
			.titleItem {
				font-size: 32rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
			}
			.rankItem {
				background-color: #fff3f5;
				margin-top: 20rpx;
				height: 70rpx;
				padding: 0 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #ec414b;
				.icon-paiming {
					font-size: 44rpx;
					margin-right: 10rpx;
				}
				.icon-xiangyou {
					font-size: 20rpx;
					margin-left: 5rpx;
				}
				.rankName {
					display: flex;
					align-items: center;
					font-size: 28rpx;	
				}
				.rankMore {
					font-size: 24rpx;
				}
			}
			.infoText {
				margin-top: 20rpx;
				color: #acacac;
				font-size: 26rpx;
			}
			.btnItem {
				height: 150rpx;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;
				.fun {
					display: flex;
					flex-direction: column;
					font-size: 24rpx;
					.iconfont {
						color: #939393;
						font-size: 50rpx;
						margin-bottom: 8rpx;
					}
				}
			}
			.tag {	
				display: flex;
				align-items: baseline;
				.tag2 {
					flex: 1;
					display: flex;
					flex-wrap: wrap;
					.tagItem {
						height: 66rpx;
						padding: 0 15rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #f6f6f6;
						margin-bottom: 15rpx;
					}
				}
				.moreBox {
					// display: flex;
					// align-items: center;
				}
			}
		}
		.videoList {
			
			.video2{
				display: flex;
				margin-bottom: 30rpx;
				.videoImg2 {
					width: 300rpx;
					height: 180rpx;
				}
				.videoMessage2 {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					margin-left: 30rpx;
					.videoTitle2 {
						font-size: 28rpx;
					}
					.videoText2 {
						font-size: 24rpx;
						color: #8e8e8e;
					}
				}
			}
		}
	}
}
.show {
	height: 100%;
	margin-bottom: 5rpx;
}
.hidde {
	height: 66rpx;
	overflow: hidden;
	margin-bottom: 20rpx;
}
</style>
