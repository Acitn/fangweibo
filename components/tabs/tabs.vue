<template>
<!-- 吸顶 -->
<view class="sticky-box">
	<!-- 滑动区域 -->
	<scroll-view class="scroll-view_H" scroll-x scroll-with-animation>
		<view class="tab" id="tab_list">
			<view id="tab_item" :class="{ 'active': listActive == index,'tab__item':true}" v-for="(item, index) in listArr" :key="index" @click="clickSort(index)">
				{{item}}
			</view>
		</view>
	</scroll-view>
	<i class="iconfont icon-jia1"></i>
</view>

</template>
<script>

export default {
  data () {
    return {
		listArr: ['热门','同城','榜单','音乐','游戏','股票','校园','摄影','国际','数码'],
		listActive: 0,   // 当前选中项
	}
  },
  methods: {
	clickSort (index) {
		this.listActive = index
	},
  },
}
</script>

<style lang="scss">

	.sticky-box {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		position: -webkit-sticky;
		/* #endif */
		position: sticky;
		top: var(--window-top);
		z-index: 99;
		flex-direction: row;
		margin: 0px;
		border-top: 1px #f9f9f9 solid;
		border-bottom: 1px #f9f9f9 solid;
		background: #fff;
	}

	.tab {
		position: relative;
		display: flex;
		font-size: 28rpx;
		white-space: nowrap;
		&__item {
			flex: 1;
			padding: 0 20rpx;
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			color: #666;
			&.active {
				color: #f98621;
			}
		}
	}
	.scroll-view_H {
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: calc(100vw - 80rpx);
		border-right: 1rpx solid #e6e6e6;
	}
	.icon-jia1 {
		color: #8e8e8e;
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>