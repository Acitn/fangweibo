<template name="microBlog">
	<view>
		<view class="blog" v-for="(item,index) in blogData2" :key="index" v-if="item.type == 1 || item.type == 2"> 
			<view class="blogTop">
				<view class="userBox">
					<image class="userIcon" :src="item.icon" mode="aspectFit"></image>
					<view class="userText">
						<view class="userName">{{item.userName}}</view>
						<view class="userMessage">
							<text class="text" v-if="item.date">{{item.date}}</text>
							<text class="text" v-else>来自</text>
							<text>{{item.source}}</text>
						</view>
					</view>
				</view>
				<i class="iconfont icon-xiala" @click="show2(item.id)" v-if="item.attention && item.type == 1"></i>
				<view class="attentionBox" v-else-if="item.type == 2" @click="attention(index)">
					<view class="fillet">
						<i class="iconfont icon-jia1"></i>
						关注
					</view>
					<i class="iconfont icon-close"></i>
				</view>
				<view class="attentionBox" v-else>
					<view class="fillet2">
						<i class="iconfont icon-dui"></i>
						已关注
					</view>
					<i class="iconfont icon-close"></i>
				</view>
			</view>
			<view class="blogContent">
				<view class="contentText">{{item.text2}}</view>
				<view class="contentImg" v-if="item.img">
					<image v-for="(item2,index2) in item.img" :key="index2" :src="item2" lazy-load></image>
				</view>
			</view>
			<view class="blogOperate">
				<view class="operate" @click="show($event,index)">
					<i class="iconfont icon-icon--"></i>
					<text>{{item.transpond}}</text>
				</view>
				<view class="operate" @click="show3(index)">
					<i class="iconfont icon-xiaoxi1"></i>
					<text>{{item.comment}}</text>
				</view>
				<view class="operate" v-if="!item.Clike" @click="like(index)">
					<i class="iconfont icon-z-like"></i>
					<text>{{item.like}}</text>
				</view>
				<view class="operate" v-else @click="like(index)">
					<i class="iconfont icon-iconkuozhan_dianzannor red"></i>
					<text class="red">{{item.like}}</text>
				</view>
			</view>
			<view :class="{transpondBox: true,absolute: showPosition, absolute2: !showPosition}" v-if="item.showTranspond">
				<view class="transpondItem" @click="transpond(1)">
					<i class="iconfont icon-zhuanfa"></i>
					<text>快转</text>
				</view>
				<view class="transpondItem" @click="transpond(2)">
					<i class="iconfont icon-icon--"></i>
					<text>转发</text>
				</view>
				<!-- 转发弹出层 -->
				<view class="transpondItem" style="justify-content: space-between;" @click="transpond(3)">
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
				<!-- 转发弹出层 -->
			</view>
		</view>
		<!-- 遮罩层 -->
		<view class="mask" @touchmove.stop.prevent v-if="showMask" @click="hide"></view>
		<!-- 遮罩层 -->
		<!-- 底部弹出层 -->
		<view class="popUp" v-if="showPopUp">
			<view class="line"></view>
			<view class="popUpBox">
				<view class="popUpItem">
					<view class="iconfont icon-shoucang"></view>
					<view class="popUpRight">
						<view class="popUpText">收藏</view>
					</view>
				</view>
				<view class="popUpItem">
					<view class="iconfont icon-tupian"></view>
					<view class="popUpRight">
						<view class="popUpText">用此卡片背景</view>
					</view>
				</view>
				<view class="popUpItem">
					<view class="iconfont icon-zhanwaituiguangguanggaoshuju"></view>
					<view class="popUpRight">
						<view class="popUpText">帮上头条</view>
						<view class="popUpMessage">
							将这条微博投放到博文头条
						</view>
					</view>
				</view>
				<view class="popUpItem">
					<view class="iconfont icon-yincangmima"></view>
					<view class="popUpRight">
						<view class="popUpText">取消关注</view>
						<view class="popUpMessage">
							不在关注TA
						</view>
					</view>
				</view>
				<view class="popUpItem">
					<view class="iconfont icon-huabanfuben"></view>
					<view class="popUpRight">
						<view class="popUpText">设为特别关注</view>
						<view class="popUpMessage">
							首页优先显示TA的内容
						</view>
					</view>
				</view>
				<view class="popUpItem">
					<view class="iconfont icon-icon-test"></view>
					<view class="popUpRight">
						<view class="popUpText">屏蔽</view>
						<view class="popUpMessage">
							屏蔽这条微博、关键词或博主
						</view>
					</view>
				</view>
				<view class="popUpItem">
					<view class="iconfont icon-jinggao"></view>
					<view class="popUpRight" style="border-bottom: none;">
						<view class="popUpText">投诉</view>
						<view class="popUpMessage">
							投诉观看视频时遇到的问题
						</view>
					</view>
				</view>
			</view>
			<view class="popUpBtn" @click="hide">取消</view>
		</view>
		<!-- 底部弹出层 -->
		<!-- 编辑评论层 -->
		<view class="editorBox" @touchmove.stop.prevent v-if="showTextarea">
			<view class="container2">
				<textarea class="content" placeholder="写评论…" placeholder-class="placeholderStyle" v-model="text" :focus="showTextarea"></textarea>
				<view class="right">
					<i class="iconfont icon-icon--1"></i>
					<view class="send" @click="send">发送</view>
				</view>
			</view>
			<view class="funBox">
				<checkbox-group class="itemBox" @change="checkboxChange">
					 <checkbox value="cb" checked="true" />同时转发
				</checkbox-group>
				<i class="iconfont icon-tupian"></i>
				<i class="iconfont icon-aite"></i>
				<i class="iconfont icon-GIF"></i>
				<i class="iconfont icon-biaoqing"></i>
				<i class="iconfont icon-tianjia"></i>
			</view>
		</view>
		<!-- 编辑评论层 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				showMask: false,		//显示遮罩层
				nowIndex: '',			//显示转发的index
				showPosition: true,		//默认向下显示转发弹窗
				showTranspond: false, 	//转发弹窗
				showPopUp: false,		//底部弹窗
				showTextarea: false,	//评论编辑
				placeholder: '写评论…',
				blogData2: ''
			};
		},
		// props 可以是数组或对象，用于接收来自父组件的数据
		props: ['blogData'],
		watch: {
		    blogData: function(newVal,oldVal){
				//vue不推荐直接改变props应在父组件改变传入，
				//但为了组件的便利性,在data定义个本地数据
		        this.blogData2 = newVal; 
		    }
		},
		methods: {
			show(e,index) {	//显示转发
				
				uni.getSystemInfo({
				　　success: (res) => {
					
						const screenH = res.screenHeight,	// 屏幕的宽度
						domH = e.touches[0].clientY,		//元素位于顶部距离
						position = screenH/2 >= domH ? true : false
						
						this.showPosition = position
						this.showMask = true
						this.blogData2[index].showTranspond = true
						this.showTranspond = true
						this.nowIndex = index	
						
						console.log('位置',this.showPosition)
						console.log('显示',this.showTranspond)
				    }
				});
			},	
			show2(id){	//点击下拉图标显示弹窗
				this.showMask = true
				this.showPopUp = true
			},
			show3(id){	//点击下拉图标显示弹窗
				this.showMask = true
				this.showTextarea = true
			},
			hide() { //点击遮罩层隐藏
				if(this.showTranspond) {
					this.blogData2[this.nowIndex].showTranspond = false
					this.showTranspond = false
					this.nowIndex = ''
				} else if(this.showPopUp) {
					this.showPopUp = false
				} else {
					this.showTextarea = false
				}
				this.showMask = false				
			},
			transpond(index){  //点击转发
				if(index == 1) {
					
				}else if(index == 2) {
					
				}else {
					
				}	
				this.blogData2[this.nowIndex].showTranspond = false
				this.nowIndex = ''
				this.showTranspond = false
				this.showMask = false
			},
			like(index) {
				this.blogData2[index].Clike = !this.blogData2[index].Clike
			},
			send(index) {
				if(this.text == '') {
					uni.showToast({
						title: "内容不能为空",
						icon: "none",
						duration: 2000
					})
				} else {
					uni.showToast({
						title: "评论成功",
						duration: 2000
					})
					this.showTextarea = false
					this.showMask = false
				}
			},
			attention(index) {
				this.blogData2[index].type = 1
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
	position: fixed;
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
					font-size: 28rpx;
				}
				.userMessage {
					font-size: 24rpx;
					color: $uni-text-color-grey;
					display: flex;
					.text {
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
		.attentionBox {
			display: flex;
			align-items: flex-start;
			.icon-close {
				margin-left: 20rpx;
				color: #c3c3c3;
			}
			.fillet {
				padding: 10rpx 20rpx;
				font-size: 28rpx;
				color: #eb8418;
				border: 1rpx solid ;
				border-radius: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.iconfont {
					font-size: 34rpx;
					margin-right: 5rpx;
				}
			}
			.fillet2 {
				padding: 10rpx 20rpx;
				font-size: 28rpx;
				color: #545454;
				border: 1rpx solid #d3d3d3;
				border-radius: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.iconfont {
					font-size: 34rpx;
					margin-right: 5rpx;
				}
			}
		}
	}
	.blogContent {
		margin: 20rpx 0;
		.contentText {
			font-size: 28rpx;
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
		font-size: 24rpx;
		.operate {
			display: flex;
			align-items: center;
		}
		.iconfont{
			font-size: 34rpx;
			margin-right: 10rpx;
		}
	}
	.transpondBox {
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
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
			.left {
				display: flex;
				align-items: center;
			}
			.right {
				display: flex;
				align-items: center;
				.iconfont {
					color: #e5e5e5;
				}
			}
		}
	}
}
.absolute {
	position: absolute;
	bottom: -290rpx;
	left: 0;
	z-index: 3;
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
.absolute2 {
	position: absolute;
	bottom: 80rpx;
	left: 0;
	z-index: 3;
	&::after {
		content: '';
		position: absolute;
		bottom: -35rpx;
		left: 110rpx;
		width: 0;
		height: 0;
		border: 20rpx solid transparent;
		border-top: 20rpx solid #fff;
		background-color: transparent;
	}
}
.red {
	color: $uni-color-error;
}
.popUp {
	position: fixed;
	bottom: 100rpx;
	left: 0;
	/* #ifndef H5 */
		bottom: 0;
	/* #endif */
	z-index: 3;
	width: 100%;
	border-top-left-radius: 40rpx;
	border-top-right-radius: 40rpx;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10rpx 20rpx;
	transition: all 1.2s ease;
	.line {
		width: 100rpx;
		height: 8rpx;
		border-radius: 4rpx;
		background-color: #cccccc;
	}
	.popUpBox {
		width: 100%;
		margin-top: 20rpx;
		.popUpItem {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100rpx;
			.iconfont {
				color: #757575;
				font-size: 40rpx;
				margin-right: 20rpx;
			}
			.popUpRight {
				display: flex;
				flex-direction: column;
				justify-content: center;	
				height: 100%;
				border-bottom: 1rpx solid #e6e6e6;
				.popUpText {
					font-size: 28rpx;
					font-weight: bold;
					margin-bottom: 10rpx;
				}
				.popUpMessage {
					font-size: 24rpx;
					color: #aaaaaa;	
				}
			}
		}
	}
	.popUpBtn {
		width: 100%;
		height: 80rpx;
		border-radius: 50rpx;
		background-color: #f6f6f6;
		font-size: 32rpx;
		text-align: center;
		line-height: 80rpx;
		margin: 20rpx 0;
	}
}
.editorBox {
	position: fixed;
	//#ifndef H5
		bottom: 0;
	//#endif
	//#ifdef H5
		bottom: 50px;
	//#endif
	
	left: 0;
	width: 750rpx;
	background-color: #fff;
	padding: 20rpx;
	z-index: 99;
	.container2 {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		.content {
			flex: 1;
			height: 180rpx;
			background-color: #f3f3f3;
			border-radius: 15rpx;
			padding: 15rpx;
		}
		.right {
			margin-left: 20rpx;
			color: #f7cda6;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.icon-icon--1 {
				color: #909090;
				font-size: 40rpx;
			}
		}
	}
	.funBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 20rpx;
		.itemBox {
			display: flex;
			align-items: center;
			font-size: 32rpx;
		}
		.iconfont{
			font-size: 40rpx;
		}
	}
}
.placeholderStyle {
	color: #929292;
	font-size: 26rpx;
}
</style>
