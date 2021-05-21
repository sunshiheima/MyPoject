<template>
	<view class="container login">
		<uni-forms ref="form" :value="formData" :rules="rules">
			<uni-forms-item label="用户名:" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入" />
			</uni-forms-item>
			<uni-forms-item label="密码:" name="password">
				<uni-easyinput type="password" v-model="formData.password" placeholder="请输入" />
			</uni-forms-item>
			<view class="login_btns">
				<button @click="submit" type="primary">登 录</button>
				<button @click="restBtnClick" type="default">重 置</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					name: "",
					password: ""
				},
				rules: {
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名',
							},
							{
								minLength: 3,
								maxLength: 5,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码',
						}, ]
					},
				}
			}
		},
		created(){
				/* #ifdef MP-WEIXIN  */
				this.wxLogin();
				/* #endif */
		},
		methods: {
			/* 微信登陆 */	
			wxLogin(){
				
				
			},
			submit() {
				this.$refs.form.submit().then(res => {
					uni.login({
					  // provider: 'weixin',
					  success: function (loginRes) {
						  if (res.code) {
						    //发起网络请求
						    // wx.request({
						    //   url: 'https://example.com/onLogin',
						    //   data: {
						    //     code: res.code
						    //   }
						    // })
						    this.$showTaost("code获取成功！",()=>{
						    	uni.switchTab({
						    		url: "/pages/home/home"
						    	})
						    })
						  } else {
						  	 this.$showTaost("code获取失败！")
						  }
					  }
					});
					uni.switchTab({
						url: "/pages/home/home"
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			restBtnClick() {
				this.formData.name = "";
				this.formData.password = "";
			}
		}
	}
</script>

<style lang="less">
	.login {
		.uni-forms-item {
			padding-bottom: 10px;
			padding: 0 10px 10px 10px;

			/deep/ .uni-forms-item__label {
				width: 50px !important;
			}
		}

		.login_btns {
			display: flex;
			flex-direction: column;

			button {
				width: 100%;
				margin-bottom: 20px;

				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
