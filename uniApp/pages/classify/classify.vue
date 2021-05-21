<template>
	<view class="classify fx  h100 box">
		<view class="leftTabl scroll_h fxb_180 p_20 flow_h fx_col">
			<scroll-view :scroll-y="true" :scroll-with-animation="true"
				class="classList fx_col flow_y  fx_1 backColor scroll_h" :scroll-into-view="classActiveId">
				<view class="classList_item fxb_80 lh_80 bob_1" :ref="'class'+item.name" :id="'class'+index"
					v-for="(item,index) in leftClassList" @click="classList_itemClick(''+item.name+'')"
					:key="index+'leftClass_item'" :class="item.checked&&'active'">
					<text class="listItem_text fz_30" :user-select="false" :selectable="false">
						{{item.name}}
					</text>
				</view>
			</scroll-view>
		</view>
		<view id="padding20" class="right_list fx_1 fx_col p_20 fx_col bfff">
			<scroll-view class="typeList fx_1 fx_col flow_y scroll_h" :scroll-y="true" @touchstart="Typetouchstart"
				@scrolltoupper="scrolltolower" :scroll-with-animation="true" @scroll="typeListScroll"
				:scroll-into-view="typeActiveId">
				<view class="typeList_item fx_col" :id="'type'+index" v-for="(item,index) in rightClassList"
					:key="index+'typeList_item'" @moused>
					<view class="typeTitle pt_10 pb_10 fz_36 ml_10">
						<text class="fz_36 ">{{item.name}}</text>
					</view>
					<view class="detailsList fx fx_w">
						<view class="detailsList_item height_140 fc  fx_col fxb_152 flow_h  mr_10 mb_10"
							hover-class="backColor" v-for="(val,i) in item.list" :key="i+'detailsList_item'">
							<text class="detailsList_itemIcon  icon iconfont fz_70" :selectable="false"
								:user-select="false" :decode="true" :class="val.icon"></text>
							<text class="detailsList_itemName fz_26" :selectable="false"
								:user-select="false">{{val.name}}</text>
							<text class="hotIcon  icon iconfont br_2 fff" v-if="val.hot">&#xe78e;</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeActiveId: '',
				classActiveId: '',
				rightClassList: [{
					name: "箱包",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "男装",
					list: [{
						name: "上装",
						icon: "icon-beauty",
						hot: true,
					}, {
						name: "下装",
						icon: "icon-atm-away"
					}, {
						name: "卫衣",
						icon: "icon-assessed-badge",
						hot: true,
					}, {
						name: "夹克",
						icon: "icon-bags"
					}, {
						name: "内衣",
						icon: "icon-calendar",
						hot: true,
					}, {
						name: "腰带",
						icon: "icon-cart-full"
					}, {
						name: "皮鞋",
						icon: "icon-calculator",
						hot: true,
					}, {
						name: "袜子",
						icon: "icon-connections"
					}, ]
				}, {
					name: "女装",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "孕婴物品",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "儿童玩具",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "生活家具",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "电子品类",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "零食",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "创意礼品",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, {
					name: "书籍",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}]
				}, {
					name: "学习用品",
					list: [{
						name: "旅行箱",
						icon: "icon-column1",
						hot: true,
					}, {
						name: "简易箱包",
						icon: "icon-add"
					}, {
						name: "保鲜箱",
						icon: "icon-agriculture",
						hot: true,
					}, {
						name: "储存箱",
						icon: "icon-years"
					}, {
						name: "密码柜",
						icon: "icon-add-cart"
					}, {
						name: "背包",
						icon: "icon-attachent"
					}, {
						name: "文件包",
						icon: "icon-feeds",
						hot: true,
					}, {
						name: "书包",
						icon: "icon-history1"
					}, ]
				}, ],
				leftClassList: [{
					name: "箱包",
					checked: true,
					hot: false,
				}, {
					name: "男装",
					checked: false,
					hot: false,
				}, {
					name: "女装",
					checked: false,
					hot: false,
				}, {
					name: "孕婴物品",
					checked: false,
					hot: false,
				}, {
					name: "儿童玩具",
					checked: false,
					hot: false,
				}, {
					name: "生活家具",
					checked: false,
					hot: false,
				}, {
					name: "电子品类",
					checked: false,
					hot: false,
				}, {
					name: "零食",
					checked: false,
					hot: false,
				}, {
					name: "创意礼品",
					checked: false,
					hot: false,
				}, {
					name: "书籍",
					checked: false,
					hot: false,
				}, {
					name: "学习用品",
					checked: false,
					hot: false,
				}, ],
				clickActive: false,
			}
		},
		mounted() {
			// this.getPadding20();
		},
		methods: {
			/* 获取padding-20 */
			getPadding20() {
				const query = uni.createSelectorQuery().select("#padding20");
				query.fields({
					rect: true,
					context:true,
				}, (res) => {
					debugger
						console.log("结果：",res)
					if (res) {
						// this.padding20=res.

					}
				}).exec();

			},
			/* 左侧点击 */
			classList_itemClick(name) {
				this.clickActive = true;
				let indexActive = 0;
				/* 选中 */
				for (let val of this.leftClassList) {
					if (val.name == name) {
						val.checked = true;
						indexActive = this.leftClassList.indexOf(val);
					} else {
						val.checked = false;
					}
				}
				let id = "type" + indexActive;
				this.typeActiveId = id;
			},
			/* 右侧滚动 */
			typeListScroll(event) {
				let _this = this;
				if (!this.clickActive) {
					console.log(event.detail)
					const query = uni.createSelectorQuery();
					for (let i = 0; i < _this.leftClassList.length; i++) {
						let id = '#type' + i;
						query.select(id).boundingClientRect(data => {
							if (data) {

								if (((data.top) <= 0 && data.top > (data.height * -1)) || ((i === 0) && event
										.detail.scrollTop < 5)) {
									_this.leftClassList[i].checked = true;
									_this.classActiveId = "class" + i;
								} else {
									_this.leftClassList[i].checked = false;
								}
								if (_this.leftClassList[i].name == "男装") {
									console.log("得到布局位置信息" + JSON.stringify(data));

								}

							}

						}).exec();
					}
				}
			},
			Typetouchstart() {
				this.clickActive = false;
			}

		}
	}
</script>

<style lang="less" scoped>
	.classify {
		.leftTabl {

			.classList {
				.classList_item {
					color: @baseTextColor ;
					text-align: center;

					&.active {
						background-color: @baseColor;
						color: #fff;
					}
				}
			}
		}

		.right_list {
			.detailsList_item {
				position: relative;

				.hotIcon {
					position: absolute;
					right: 0;
					top: 0;
					background-color: @baseColor;
					border-radius: ;
				}
			}
		}
	}
</style>
