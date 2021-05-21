<!-- 骨架屏展示组件 -->
<template>
	<view class="skeleton" v-if="show" >
		<!-- :style="{width:windowInfo.width+'px',height:windowInfo.height+'px',}" -->
		<!-- 矩形 -->
		<view class="skeleton_item rect" v-for="(item,index) in rectList" :key="index+'skeleton_rect'"
			:style="{width:item.width+'px',height:item.height+'px',top:item.top+'px',left:item.left+'px',backgroundColor:backgColor,}">
		</view>	
		<!-- 圆 -->
		<view class="skeleton_item circle" v-for="(item,index) in circleList" :key="index+'skeleton_rect'"
			:style="{width:item.width+'px',height:item.height+'px',top:item.top+'px',left:item.left+'px',backgroundColor:backgColor,}">
		</view>
		<!-- 圆角矩形 -->
		<view class="skeleton_item rectRadius" v-for="(item,index) in rectRadiusList" :key="index+'skeleton_rect'"
			:style="{width:item.width+'px',height:item.height+'px',top:item.top+'px',left:item.left+'px',backgroundColor:backgColor,}">
		</view>
	</view>
</template>

<script>
	export default {
		name: "skeleton",
		props: {
			show: {
				type: Boolean,
				default: false,
			},
			backgColor: {
				type: String,
				default:"#eee"
			}
		},
		data() {
			return {
				circleList: [],
				rectList: [],
				rectRadiusList: [],
				windowInfo: {
					width: 0,
					height: 0,
				}
			}
		},
		watch: {
			show(newVal) {
				if (newVal) {
					this.draw();
				}
			}
		},
		methods: {
			draw() {
			this.drawCircle();
			this.drawReact();
			this.drawRectRadius();
			},
			/* 获取window尺寸 */
			getWindowInfo() {
				uni.getSystemInfo({
					success(res) {
						this.windowInfo.width = res.window.width;
						this.windowInfo.height = res.window.height;
					}
				})
			},
			/* 绘制圆 */
			drawCircle(){
				let _this=this;
				let query=uni.createSelectorQuery().selectAll(".skeleton_circle");
				query.boundingClientRect(res=>{
					_this.circleList=res;
				}).exec()
			},
			/* 绘制矩形 */
			drawReact(){
				let _this=this;
				let query=uni.createSelectorQuery().selectAll(".skeleton_react");
				query.boundingClientRect(res=>{
					_this.rectList=res;
				}).exec()
			},
			/* 绘制圆角矩形 */
			drawRectRadius(){
				let _this=this;
				let query=uni.createSelectorQuery().selectAll(".skeleton_rectRadius");
				query.boundingClientRect(res=>{
					_this.rectRadiusList=res;
				}).exec()
			},
		}
	}
</script>

<style lang="less" scoped>
	.skeleton{
		background: #fff;
		height: 100%;
		height: 100%;
		.skeleton_item{
			position: fixed;
		}
		.circle{
			border-radius: 50%;
		}
		.rectRadius{
			border-radius: 10rpx;
		}
	}
</style>
