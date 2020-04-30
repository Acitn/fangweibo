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
					<text class="tip2" :style="{color:tip == 1 ? '#999' : '#000',fontSize:tip == 1 ? '32rpx' : '36rpx'}" @click="switchTip(2)">推荐</text>
				</view>
				<i class="iconfont icon-jia"></i>
				<view :class="[tip == 1 ? 'topLine' : 'topLine2']"></view>
			</view>
			<view class="groupingList" v-show="showGroup"> 
				<view class="grouping">
					<view class="groupingTop">
						<text class="groupingTitle">默认分组</text>
						<text class="orange" @click="edit" v-if="!editable">编辑</text>
						<text class="orange" @click="edit" v-if="editable">完成</text>
					</view>
					<view class="groupingContent">
						<view v-for="(item3,index3) in group" :key="item3.id" :class="{groupingItem:true,orange:clickGroup==item3.id && editable == false,grey:editable}" @click="selectGroup(item3.id)">{{item3.text}}</view>
					</view>
				</view>
				<view class="grouping">
					<view class="groupingTop">
						<text class="groupingTitle">我的分组</text>
					</view>
					<view class="groupingContent">
						<view v-for="(item4,index4) in group2" :key="item4.id" :class="{groupingItem:true,orange:clickGroup==item4.id && editable == false}" @click="selectGroup(item4.id)">
							{{item4.text}}
							<i v-if="editable" class="iconfont icon-guanbi" @click="deleteGroup(item4.id)"></i>
						</view>
						<view class="groupingItem virtual">
							<i class="iconfont icon-jia1"></i>
							新建分组
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="container" v-show="tip == 1">
			<view class="topList">
				<view class="listItem" v-for="(item5,index5) in promotional" :key="index5">
					<view class="viaBox">
						<image class="userIcon" :src="item5.icon" mode="aspectFit"></image>
						<view class="viaIcon" v-if="false"></view>
					</view>
					<view class="itemText">{{item5.userName}}</view>
				</view>
			</view>
			<microBlog :blogData="blog"></microBlog>
			<loading :text="loadingText"></loading>
		</view>
		<view class="container" v-show="tip == 2">
			<tabs></tabs>
			<microBlog :blogData="blog2"></microBlog>
		</view>
	</view>
	
</template>

<script>
	import microBlog from "../../components/microBlog/microBlog.vue"
	import loading from "../../components/loading/loading.vue"
	import tabs from "../../components/tabs/tabs.vue"
	const apiPromise = require('../../static/utils/Promise.js');
	
	export default {
		components: { microBlog, loading, tabs },
		data() {
			return {
				blog: "",					//别人发的微博
				blog2: "",
				promotional: "",			//推荐视频信息
				loadingText: "加载中...", 	//加载组件显示的文本
				showGroup: false,			//控制顶部分组的显示
				tip: 1,						//控制顶部分组和推荐按钮的切换
				editable: false,			//编辑分组开关
				clickGroup: 1,				//选中的分组的id
				group: [					//默认分组
					{"id":1,"text":"全部关注"},
					{"id":2,"text":"最新微博"},
					{"id":3,"text":"特别关注"},
					{"id":4,"text":"好友圈"},
					{"id":5,"text":"原创"},
					{"id":6,"text":"视频"},
					{"id":7,"text":"V+微博"},
					{"id":8,"text":"群微博"},
				],
				group2: ""					//自定义分组
			}
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
				//获取推荐视频信息
				apiPromise.Get('/promotionalVideo').then((res) => {
					console.log("推荐视频信息",res.data);
					this.promotional = res.data
				}).catch((err) => {
					console.log("获取推荐视频超时",err)
				})
				//获取关注人的微博
				apiPromise.Post('/microBlog').then((res) => {
					console.log("微博数据",res.data);
					let data = res.data,i ;
					for(i = 0; i < data.length; i++) {
						data[i].showTranspond = false
					}
					this.blog = data
				}).catch((err) => {
					console.log("获取微博超时",err)
					uni.showToast({
					    title: '获取微博超时,请刷新重试',
					    duration: 2000
					});
				})
			}	
		},
		onReachBottom() {
			console.log("到底了")
			if(this.tip == 1) {
				//获取关注人的微博
				apiPromise.Post('/microBlog').then((res) => {
					console.log("微博数据",res.data);
					this.blog = this.blog.concat(res.data)
				}).catch((err) => {
					console.log("失败",err)
				})
			} else {
				//获取关注人的微博
				apiPromise.Post('/microBlog2').then((res) => {
					console.log("微博数据",res.data);
					this.blog2 = this.blog2.concat(res.data)
				}).catch((err) => {
					console.log("失败",err)
				})
			}
		},
		methods: {
			showGrouping() {
				//获取我的分组
				if(!this.showGroup){
					if(this.group2 == "") {
						apiPromise.Post('/group').then((res) => {
							console.log("我的分组",res.data);
							this.group2 = res.data	
						}).catch((err) => {
							console.log("失败",err)
						})	
					}
					this.showGroup = true
				} else {
					this.showGroup = false
					this.editable = false
				}
				
			},
			selectGroup(id) {
				if(!this.editable) {
					this.clickGroup = id
					this.showGroup = false
					this.editable = false
				}		
			},
			//关注和推荐界面切换
			switchTip(tip){
				this.showGroup = false
				this.editable = false
				if(tip == 1) {
					this.tip = 1
				}else {
					if(this.blog2 == "") {
						//获取推荐的微博
						apiPromise.Post('/microBlog2').then((res) => {
							console.log("微博数据",res.data);
							let data = res.data,i ;
							for(i = 0; i < data.length; i++) {
								data[i].showTranspond = false
							}
							this.blog2 = data
						}).catch((err) => {
							console.log("获取微博超时",err)
							uni.showToast({
							    title: '获取微博超时,请刷新重试',
							    duration: 2000
							});
						})	
					}
					this.tip = 2
				}
			},
			//编辑分组
			edit() {
				this.editable = !this.editable
			},
			showTranSpond(params) {
			    this.blog[params].showTranspond = true
			},
			deleteGroup(id) {
				const that = this
				uni.showModal({			    
				    content: '确定删除该分组吗？',
					confirmColor: '#fb8e1f',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				                title: '删除中'
				            });
							let group = that.group2,
								len = group.length
							for (let i = 0; i<len; i++) {
								if(group[i].id == id) {
									group.splice(i,1);
									break
								}
							}
							setTimeout(function(){uni.hideLoading()}, 1000)							
				        }
				    }
				});
			}
		}
	}
</script>

<style lang='scss'>
.content {
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.4);
		z-index: 2;
	}
	.top {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		background-color: #fafafa;
		/*在app用fixed布局会顶到手机自带的状态栏*/
		/* #ifdef APP-PLUS */
			padding-top: var(--status-bar-height);
		/* #endif */
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
						font-size: 16rpx;
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
			/* #ifdef APP-PLUS */
				top: calc(var(--status-bar-height) + 90rpx);
			/* #endif */
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
						position: relative;
						&:nth-child(4n) {
							margin-right: 0;
						}
						.icon-guanbi {
							color: #abaaa8;
							position: absolute;
							top: -15rpx;
							right: -15rpx;
						}
					}
				}
			}
		}
	}
	.container {
		padding-top: 90rpx;
		/* #ifdef APP-PLUS */
			padding-top: calc(var(--status-bar-height) + 90rpx);
		/* #endif */
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
					.userIcon {
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
.grey {
	background-color: #fafafa;
	color: #adadad;
}
</style>
