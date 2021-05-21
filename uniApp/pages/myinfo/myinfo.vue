<template>
	<scroll-view class="myInfo fx_col backColor scroll_h" scroll-y="true" scroll-with-animation>
		<view class="myInfoAll p_20 box fx_col">
			<view class="info_top fx jcb height_200 aic">
				<view class="myPhoto height_98 fx">
					<view class="myIcon height_98 width_98 fcc">
						<image class="width_98 height_98 br_49" @click="myPhotoClick" :src="myPhotoImg" mode="scaleToFill"></image>
					</view>
					<view class="myName">
						<text class="fff fb fz_40 pl_20">我的名字</text>
					</view>
				</view>
				<view class="myInfiBtn fx ">
					<view class="myBtn1 icon iconfont icon-bussiness-man fz_60 fff">
					</view>
					<view class="systemBtn icon iconfont icon-assessed-badge fz_60 fff ml_10">
					</view>
				</view>
			</view>
			<view class="info_bottom fx jce fx_1">
				<view class="infoAllBar fx_1 fx_col aic" v-for="(item,index) in infoAllBarList" :key="index+'infoAllBar'">
					<text class="infoAllBar_num fff fz_32">{{item.num}}</text>
					<text class="fff pt_20 fz_28">{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="myOrder fx_col m_20 br_20 bfff flow_h">
			<view class="myOrderTitle height_76 fx jcb aic pl_20 pr_20 bob_1" >
				<text class="fb fz_30">我的订单</text>
				<text class="fz_24 c999">查看全部订单></text>
			</view>
			<view class="myOrderMain fx jce p_10  box">
				<view class="OrderMainbar fx_1 fx_col aic height_152 jcc " hover-class="backColor" v-for="(item,index) in myOrderMainList" :key="index+'OrderMainbar'">
					<image class="height_58 width_58" :src="item.url" mode="scaleToFill"></image>
					<text class="fz_24 pt_14 c777">{{item.name}}</text>
				</view>
			</view>
		</view>
		<view class="myTool fx_col m_20 br_20 bfff flow_h">
			<view class="myOrderTitle height_76 fx jcb aic pl_20 pr_20 bob_1">
				<text class="fb fz_30">必备工具</text>
				<text class="fz_24 c999">查看全部工具></text>
			</view>
			<view class="myOrderMain fx jca fx_w p_10  box">
				<view class="OrderMainbar fx_1 fx_col aic height_152 jcc fxb_171" hover-class="backColor" v-for="(item,index) in myToolList" :key="index+'OrderMainbar'">
					<image class="height_58 width_58" :src="item.url" mode="scaleToFill"></image>
					<text class="fz_24 pt_14 c777">{{item.name}}</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				myPhotoImg:'../../static/img/home/1.jpg',
				infoAllBarList:[
					{
						name:"收藏夹",
						num:23,
					},{
						name:"关注店铺",
						num:12,
					},{
						name:"足迹",
						num:3,
					},{
						name:"红包卡卷",
						num:90,
					},
				],
				myOrderMainList:[
					{
						name:"待付款",
						url:"https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp",
					},{
						name:"代发货",
						url:"https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp",
					},{
						name:"待收货",
						url:"https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp",
					},{
						name:"评价",
						url:"https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp",
					},{
						name:"退款/售后",
						url:"https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp",
					},
				],
				myToolList:[
					{
						name:"每日返现",
						url:"https://gw.alicdn.com/tfs/TB1Jcbkj4D1gK0jSZFsXXbldVXa-96-96.png_70x70q90_.webp",
					},{
						name:"领劵中心",
						url:"https://gw.alicdn.com/tfs/TB1zT0hkkT2gK0jSZPcXXcKkpXa-96-96.png_70x70q90_.webp",
					},{
						name:"闲置换钱",
						url:"https://gw.alicdn.com/tfs/TB14QMupYj1gK0jSZFuXXcrHpXa-96-96.png_70x70q90_.webp",
					},{
						name:"客服小蜜",
						url:"https://gw.alicdn.com/tfs/TB1csUri13tHKVjSZSgXXX4QFXa-96-96.png_70x70q90_.webp",
					},{
						name:"花呗",
						url:"https://gw.alicdn.com/tps/TB1rhCFPXXXXXa1XVXXXXXXXXXX-96-96.png_70x70q90_.webp",
					},{
						name:"我的快递",
						url:"https://gw.alicdn.com/tfs/TB1S6oYmQL0gK0jSZFxXXXWHVXa-96-96.png_70x70q90_.webp",
					},{
						name:"我的评价",
						url:"https://gw.alicdn.com/tps/TB1RN1QPXXXXXaqXFXXXXXXXXXX-96-96.png_70x70q90_.webp",
					},{
						name:"主题换肤",
						url:"https://gw.alicdn.com/tfs/TB1q0T8mpOWBuNjy0FiXXXFxVXa-96-96.png_70x70q90_.webp",
					},
				],
			}
		},
		methods: {
			myPhotoClick(){
				uni.chooseImage({
					count:5,
					success:res=>{
						this.myPhotoImg=res.tempFilePaths[0];
					},
					fail:error=>{
						uni.hideToast()
						uni.showToast({
							title:"图片选取失败请重试！"
						})
					}
				})
			},
		},
		onLoad() {
			this.$http.get("http://117.175.169.58:19223/patternSpot/0352ed2cb5bf48faab900976c197ed09",null,null,true).then(res => {

			})
		}
	}
</script>

<style lang="less" scoped>
.myInfo{
	.myInfoAll{
		height: 300rpx;
		background-image: linear-gradient(to right,#fd9026,#ff5000);
	}
}
</style>
