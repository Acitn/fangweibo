<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
	global.isLogin = function(){
		//判断用户是否登录
		try{
			var id  = uni.getStorageSync('id');
			var name = uni.getStorageSync('name');
		}catch(e){
			//TODO handle the exception
		}
		if(id == '' || name == ''){
			return false;
		}else{
			return [id, name];
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/static/iconfont/iconfont.css";
		/* 代替*全选选择器 */
		:not(not) {  
		  box-sizing: border-box;
		
		}
		page {
			font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
			background-color: #eeeeee;
			color: $uni-text-color;
		}
</style>
