const url = 'https://www.fastmock.site/mock/5be1a5131b5cf07cd613ef5c49c0d5e9/blog'

const Get = (name,data) => {
	let promise = new Promise((resolve,reject) => {
		uni.request({
			url: url + name,
			data: data,
			method: 'GET',
			header: {
				'content-type': 'application/json',
			},
			success: (res) => {
				if(res.statusCode == 200) {
					resolve(res.data)
				}else {
					reject(res.errMsg)
				}
			},
			fail: (err) => {
				reject(err)
			}
			
		})
	})
	
	return promise;
}

const Post = (name,data) => {
	let promise = new Promise((resolve,reject) => {
		uni.request({
			url: url + name,
			data: data,
			method: 'POST',
			header: {
				'content-type': 'application/json',
			},
			success: (res) => {
				if(res.statusCode == 200) {
					resolve(res.data)
				}else {
					reject(res.errMsg)
				}
			},
			fail: (err) => {
				reject(err)
			}
			
		})
	})
	
	return promise;
}

//输出
module.exports = {
	Post,
	Get
}