
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/discover/discover","pages/message/message","pages/videos/videos","pages/personal/personal","pages/login/login"],"window":{"backgroundColor":"#F8F8F8","titleNView":false},"tabBar":{"color":"#3f3f3f","selectedColor":"#3b3b3b","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/image/tabBar-index.png","selectedIconPath":"static/image/tabBar-index2.png","text":"首页"},{"pagePath":"pages/videos/videos","iconPath":"static/image/tabBar-videos.png","selectedIconPath":"static/image/tabBar-videos2.png","text":"视频"},{"pagePath":"pages/discover/discover","iconPath":"static/image/tabBar-discover.png","selectedIconPath":"static/image/tabBar-discover2.png","text":"发现"},{"pagePath":"pages/message/message","iconPath":"static/image/tabBar-message.png","selectedIconPath":"static/image/tabBar-message2.png","text":"消息"},{"pagePath":"pages/personal/personal","iconPath":"static/image/tabBar-personal.png","selectedIconPath":"static/image/tabBar-personal2.png","text":"我"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"fangweibo","compilerVersion":"2.6.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/discover/discover","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/videos/videos","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/personal/personal","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/login/login","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0,global:void 0}}}});