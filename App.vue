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
</style>
