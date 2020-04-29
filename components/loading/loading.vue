<template name="loading">
	<view class="loading">
		<view class="sk-fading-circle">
		  <view class="sk-circle" v-for="(item, index) in 12" :key="index"></view>
		</view>
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ['text']
	}
</script>

<style lang="scss" scoped>
	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		// margin-bottom: 10rpx;
		// position: fixed;
		// bottom: 100rpx;
		// left: 0;
		// width: 100%;
		// height: 60rpx;
		.sk-fading-circle {
		  width: 60rpx;
		  height: 60rpx;
		  position: relative;
		  margin-right: 20rpx;
		  .sk-circle {
		    width: 100%;
		    height: 100%;
		    position: absolute;
		    left: 0;
		    top: 0;
			&::before {
				content: '';
				display: block;
				margin: 0 auto;
				width: 15%;
				height: 15%;
				background-color: #333;
				border-radius: 100%;
				animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
			}
			&:nth-child(2){
				transform: rotate(30deg);
				&::before {animation-delay: -1.1s;}
			}
			&:nth-child(3){
				transform: rotate(60deg);
				&::before {animation-delay: -1s;}
			}
			&:nth-child(4){
				transform: rotate(90deg);
				&::before {animation-delay: -.9s;}
			}
			&:nth-child(5){
				transform: rotate(120deg);
				&::before {animation-delay: -.8s;}
			}
			&:nth-child(6){
				transform: rotate(150deg);
				&::before {animation-delay: -.7s;}
			}
			&:nth-child(7){
				transform: rotate(180deg);
				&::before {animation-delay: -.6s;}
			}
			&:nth-child(8){
				transform: rotate(210deg);
				&::before {animation-delay: -.5s;}
			}
			&:nth-child(9){
				transform: rotate(240deg);
				&::before {animation-delay: -.4s;}
			}
			&:nth-child(10){
				transform: rotate(270deg);
				&::before {animation-delay: -.3s;}
			}
			&:nth-child(11){
				transform: rotate(300deg);
				&::before {animation-delay: -.2s;}
			}
			&:nth-child(12){
				transform: rotate(330deg);
				&::before {animation-delay: -.1s;}
			}
		  }
		}
	}
	
	
	@-webkit-keyframes sk-circleFadeDelay {
	  0%, 39%, 100% { opacity: 0; }
	  40% { opacity: 1; }
	}
	@keyframes sk-circleFadeDelay {
	  0%, 39%, 100% { opacity: 0; }
	  40% { opacity: 1; } 
	}
</style>
