<template>
	<scroll-view class="home fx_1 fx_col  box backColor flow_y scroll_h" :scroll-y="true" :show-scrollbar="false">
			<swiper id="swiper1" :indicator-dots="true" indicator-active-color="#ff5000" :autoplay="true"
				:interval="3000" :duration="1000">
				<swiper-item class="height_200 fx fcc" v-for="(item,index) in swiperList">
					<image class="fx_1 w100 h100" :src="item.url" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		<view class="menutabrBox fx_col bfff pl_10 pr_10 box flow_h">
			<scroll-view class="menutabr fx_1  fx fx_nw "  :scroll-x="true" @scroll="menutabrScroll"
				:show-scrollbar="false">
				<view class="menutabr_item if fx fx_w jca" v-for="(val,index) in menuList" :key="index+'swiper-item2'">
					<view class="menutabr_itemMin fx_col m_10  fcc" v-for="(item,index) in val.list"
						:key="index+'menuList_item'">
						<image class="width_122 height_96 h100" :src="item.url" mode="scaleToFill"></image>
						<text class="fz_22">{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
			<view class="scrollBar pt_20 pb_20 bfff fx fx_col jcc aic">
				<view class="scrollBarBox height_10 width_90  fx backColor br_5">
					<view class="scrollThumb width_30 activeColor br_5 pr" :style="{left: scrollThumbOpsition+'px',}">
					</view>
				</view>
			</view>
		</view>
		<view class="homeBody  fx_col ml_20 mr_20 mb_20 mt_30  br_20 flow_h">
			<view class="recommendList fx jcb  box backColor">
				<view class="homeBodyBack fx_1 fx backColor">
					<view class="recommendList_item fx_1 box bfff p_20 fx_col mr_4" v-for="(item,index) in homeBodyList"
						:key="index+'recommendList_item'">
						<view class="recommendRow fx jcb fx_col " v-for="(val,i) in item.rowsList"
							:key="i+'recommendRow'">
							<view class="recommendRowTitle fx aic" v-if="val.title">
								<text class="rowsListTitle fz_32 fb" v-if="val.title"> {{val.title}}</text>
								<view class="rowsListIcon fz_20 fff ml_10 br_5 height_30 lh_30 pl_10 pr_10"
									v-if="val.titleIcon"
									:style="{backgroundImage:'linear-gradient(to right,'+val.titleFromColor+','+val.titleToColor+')'}">
									{{val.titleIcon}}
								</view>
							</view>
							<view class="recommendRowBody fx jcb">
								<view class="recommendRow_min  fx_1 fx_col box jce" :hover-class="'backColor'" v-for="(v,i2) in val.rowMinList"
									:key="i2+'recommendRow_min'">
									<text class="rowsListTitle fx_1 box fz_32 fb" v-if="v.title"> {{v.title}}</text>
									<view class="rowsListImageBox fx_col fcc br_5 mt_20 mb_20 ml_10 mr_10 jce pb_10 box"
										:style="{backgroundColor:v.background?v.background:'fff',}">
										<text class="fz_28 wnw" v-if="v.minTitle"
											:style="{fontWeight:v.minBold?'bold':'500',color:v.minTitleColor,}">{{v.minTitle}}</text>
										<image class="width_110 height_110" :src="v.path" mode="scaleToFill"></image>
									</view>
								</view>
							</view>
						</view>
					</view>

				</view>
			</view>

		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				scrollThumbOpsition: 0,
				swiperList: [{
					url: "https://img.alicdn.com/imgextra/i2/109/O1CN014DSINX1Cfxpws5Hpr_!!109-0-luban.jpg",
				}, {
					url: "https://img.alicdn.com/imgextra/i3/121/O1CN01qsvHxU1ClSaYJAW4j_!!121-0-luban.jpg",
				}, {
					url: "https://img.alicdn.com/imgextra/i1/2206686532409/O1CN011TwcDv1TfMmjD6zTB_!!2206686532409-0-lubanimage.jpg",
				}, {
					url: "https://img.alicdn.com/imgextra/i2/2206686532409/O1CN01aVatSu1TfMmqsQi6v_!!2206686532409-0-lubanimage.jpg",
				}, {
					url: "https://img.alicdn.com/imgextra/i4/2206686532409/O1CN01NLlJUe1TfMn2PEpdN_!!2206686532409-0-lubanimage.jpg",
				}, {
					url: "https://img.alicdn.com/imgextra/i3/2206686532409/O1CN01mOp0y71TfMmqQUJOb_!!2206686532409-0-lubanimage.jpg",
				}, {
					url: "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
				}, {
					url: "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
				}, {
					url: "https://img.alicdn.com/imgextra/i2/2206686532409/O1CN01aVatSu1TfMmqsQi6v_!!2206686532409-0-lubanimage.jpg",
				}, ],
				menuList: [
					{
						list: [{
							name: '天猫新品',
							url: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
						}, {
							name: '今日爆款',
							url: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1',
						}, {
							name: '天猫国际',
							url: 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1',
						}, {
							name: '饿了么',
							url: 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1',
						}, {
							name: '天猫超市',
							url: 'https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1',
						}, {
							name: '充值中心',
							url: "https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
						}, {
							name: '机票酒店',
							url: 'https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1',
						}, {
							name: '金币庄园',
							url: 'https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1',
						}, {
							name: '阿里拍卖',
							url: 'https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1',
						}, {
							name: '淘宝吃货',
							url: 'https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1',
						}, ]
					},
					{
						list: [{
							name: '天猫新品',
							url: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
						}, {
							name: '今日爆款',
							url: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1',
						}, {
							name: '天猫国际',
							url: 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1',
						}, {
							name: '饿了么',
							url: 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1',
						}, {
							name: '天猫超市',
							url: 'https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1',
						}, {
							name: '充值中心',
							url: "https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
						}, {
							name: '机票酒店',
							url: 'https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1',
						}, {
							name: '金币庄园',
							url: 'https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1',
						}, {
							name: '阿里拍卖',
							url: 'https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1',
						}, {
							name: '淘宝吃货',
							url: 'https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1',
						}, 
						]
					}
				],
				homeBodyList: [{
					rowsList: [{
						title: "聚划算",
						titleFromColor: null,
						titleToColor: null,
						titleIcon: null,
						rowMinList: [{
							name: '聚划算1',
							title: null,
							minTitle: "品牌折扣",
							minTitleColor: "#fd516e",
							minBold: true,
							path: "/static/img/home/1.jpg",
							background: "#fbf5f0"
						}, {
							name: '聚划算1',
							title: null,
							minTitle: "划算好货",
							minTitleColor: "#fe7518",
							minBold: true,
							path: "/static/img/home/2.jpg",
							background: "#fbf5f0"
						}, ]
					}, {
						title: null,
						titleIcon: null,
						titleFromColor: null,
						titleToColor: null,
						rowMinList: [{
							name: '淘抢购',
							title: "淘抢购",
							minTitle: "限时半价",
							minTitleColor: "#fa2c5d",
							minBold: true,
							path: "/static/img/home/3.jpg",
							background: "#fbf5f0"
						}, {
							name: '天天特卖',
							title: "天天特卖",
							minTitle: "9.9包邮",
							minBold: true,
							minTitleColor: "#ff6922",
							path: "/static/img/home/4.jpg",
							background: "#fbf5f0"
						}, ]
					}, {
						title: "每日好店",
						titleIcon: "精选",
						titleFromColor: "#ffd351",
						titleToColor: "#fba600",
						rowMinList: [{
							name: '精选1',
							title: null,
							minTitle: "挖深藏的店",
							minTitleColor: "#f9a81f",
							minBold: false,
							path: "/static/img/home/5.jpg",
							background: null,
						}, {
							name: '精选2',
							title: null,
							minTitle: null,
							minBold: false,
							minTitleColor: null,
							path: "/static/img/home/6.jpg",
							background: null
						}, ]
					}, ]
				}, {
					rowsList: [{
						title: "淘宝直播",
						titleFromColor: "#ffa0c1",
						titleToColor: "#ff4a78",
						titleIcon: "live>",
						rowMinList: [{
							name: '直播1',
							title: null,
							minTitle: "好物传送门",
							minTitleColor: "#ff4a78",
							minBold: false,
							path: "/static/img/home/7.jpg",
							background: null
						}, {
							name: '直播2',
							title: null,
							minTitle: null,
							minTitleColor: null,
							minBold: false,
							path: "/static/img/home/8.jpg",
							background: null
						}, ]
					}, {
						title: "有好货",
						titleIcon: "品质好物",
						titleFromColor: "#65c6ff",
						titleToColor: "#23afff",
						rowMinList: [{
							name: '好货1',
							title: null,
							minTitle: "全民口碑推荐",
							minTitleColor: "#23afff",
							minBold: false,
							path: "/static/img/home/9.jpg",
							background: null
						}, {
							name: '好货2',
							title: null,
							minTitle: null,
							minBold: false,
							minTitleColor: null,
							path: "/static/img/home/10.jpg",
							background: null
						}, ]
					}, {
						title: "哇哦视频",
						titleIcon: "亲测",
						titleFromColor: "#ff7940",
						titleToColor: "#ff4601",
						rowMinList: [{
							name: '亲测1',
							title: null,
							minTitle: "粉丝都爱看",
							minTitleColor: "#ff4601",
							minBold: false,
							path: "/static/img/home/11.jpg",
							background: null,
						}, {
							name: '亲测2',
							title: null,
							minTitle: null,
							minBold: false,
							minTitleColor: null,
							path: "/static/img/home/12.jpg",
							background: null
						}, ]
					}, ]
				}, ]
			}
		},
		methods: {
			menutabrScroll(event) {
				let _this = this;
				console.log(event.detail)
				uni.createSelectorQuery().select(".scrollThumb").boundingClientRect(function(res) {
					uni.createSelectorQuery().select(".scrollBarBox").boundingClientRect(function(rect) {
						uni.createSelectorQuery().select(".menutabr_item").boundingClientRect(function(
							rec) {
							let flog = (event.detail.scrollLeft / rec.width).toFixed(4);
							let num = (rect.width * flog) - res.width;
							if (num > 0) {
								_this.scrollThumbOpsition = num;
							} else {
								_this.scrollThumbOpsition = 0;
							}
							console.log(flog, rect.width)
						}).exec()
					}).exec()
				}).exec()
			}
		}
	}
</script>

<style lang="less" scoped>
	.menutabr {
		white-space: nowrap;

		.menutabr_item {
			width: 730rpx;
		}
	}
	.homeBody{
		.recommendList_item{
			&:last-of-type{
				margin: 0;
			}
			// .recommendRow_minHover{
			// 	background-color: ;
			// }
		}
	}
</style>
