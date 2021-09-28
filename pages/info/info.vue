<template>
	<view class="content">
		<view class="image-content">
			<image class="banner-nav" :src="imageUrl + fenecList.img"></image>
		</view>
		<view class="language" @click="toLanguage">
			<image class="lan" src="../../static/icon.png" mode=""></image>
			<text>
				{{$t('index.language')}}
			</text>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-bar">
				<view class="uni-bar-title">
					<view class="uni-title-text-top">
						{{fenecList.name}}
					</view>
					<view class="uni-title-text-bottom">
						{{fenecList.memo}}
					</view>
				</view>
				<view class="uni-bg-green-gradient">
					<view class="uni-top-green">
						<view class="uni-top-tiltle">
							{{$t('index.chainOne')}}
							<image src="../../static/code.png" mode="" @click="copy(fenecList.txHash)"></image>
						</view>
						<view class="uni-top-subtitle" selectable="true">
							{{fenecList.txHash}}
						</view>
					</view>
					<view class="uni-flex uni-row">
						<view class="flex-item">
							<text class="text-title">
								{{$t('index.firstTime')}}
							</text>
							<text class="text-time">{{time(fenecList.firstQueryTime)}}</text>
						</view>
						<view class="flex-item">
							<text class="text-title">
								{{$t('index.lastTime')}}
							</text>
							<text class="text-time">{{time(fenecList.lastQueryTime)}}</text>
						</view>
						<view class="flex-item">
							<text class="text-title">
								{{$t('index.queryTimes')}}
							</text>
							<text class="text-time">{{fenecList.queryCount}}{{$t('index.scanCode')}}</text>
						</view>
					</view>
				</view>
				<view class="uni-body-info">
					<view class="uni-info-green-title">
						<text>
							{{$t('index.been')}}
						</text>
					</view>
					<view class="text-bg">
						<text>
							{{$t('index.adopts')}}
						</text>
						<text>
							{{$t('index.ensure')}}
						</text>
					</view>
					<view class="more-navgiter">
						<navigator url="/pages/web-view/web-view?url=https://domchain.io">
							{{$t('index.move')}} https://domchain.io
						</navigator>
					</view>
				</view>
			</view>
			<uni-card v-for="(item,index) in fenecList.level2Vos" :key="index" class="uni-card" :title="item.title"
				thumbnail="../../static/icon-circular.png" :is-shadow="true" :is-full="true">
				<view class="set-1">
					<view class="set-2" v-for="itemson in item.level3Vos" :key="itemson.id">
						<view class="set-title">
							{{itemson.key}}
						</view>
						<view class="set-subtitle-time" v-if="itemson.type == 'txt'">
							{{itemson.value}}
						</view>
						<view class="set-subtitle-time" v-if="itemson.type == 'img'">
							<image mode="scaleToFill" :src="imageUrlTwo + itemson.value"></image>
						</view>
					</view>
				</view>
				<view class="uni-button-blank">
					<button class="uni-scan" type="default" @tap="openinfo(item.txHash)">
						<image class="blan-icon" src="../../static/icon-blan.png" mode=""></image>
						<text>{{$t('index.coding')}} {{item.txHash}}</text>
						<image class="crow-icon" src="../../static/crow.png" mode=""></image>
					</button>
				</view>
			</uni-card>
		</view>
		<uni-popup ref="language" type="center">
			<view class="language-box">
				<view class="zh" @click="handove('zh-CN')">
					<image src="../../static/zh.png" class="" mode=""></image>
					<text>简体中文</text>
				</view>
				<view class="en" @click="handove('en')">
					<image src="../../static/en.png" class="" mode=""></image>
					<text>English</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import UniCard from '@/components/uni-card/uni-card.vue'
	export default {
		data() {
			return {
				url: '',
				hash: '',
				fenecList: [],
				imageUrl: '',
				imageUrlTwo: '',
				listLevel: [],
				listLevel2: [],
			}
		},
		onLoad(option, index) {
			let that = this;
			let routes = getCurrentPages();
			let curRoute = routes[routes.length - 1].route;
			let curParam = routes[routes.length - 1].options;
			let hashUrl = curParam.tx_hash;
			that.hash = hashUrl;
			that.$api.getQrCodeForPrint({
				qrCode: that.hash
			}).then((res) => {
				console.log(res)
				if (res.data.code === 200) {
					that.imageUrl = 'https://trace.domchain.io/admin-api/';
					that.imageUrlTwo = 'https://trace.domchain.io/web_files_server/upload/'
					that.$data.fenecList = res.data.result;
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none',
						duration: 2000
					})
				}
			}).catch((err) => {});
		},
		methods: {
			time(e) {
				var dataTime = e;
				if (dataTime != undefined) {
					var a = e.substring(0, 10);
					return a;
				}
			},
			openinfo(e) {
				let hash = e;
				uni.navigateTo({
					url: '../certificate/certificate?hash=' + hash
				});
			},
			toLanguage() {
				this.$refs.language.open();
			},
			handove(item) {
				this.$i18n.locale = item;
				localStorage.setItem('locale', item);
				this.$refs.language.close();
			},
			copy(value) {
				let that = this;
				that.copyValue(value);
			},
			copyValue(data) {
				let that = this;
			    let url = data;
			    let oInput = document.createElement('input');
			    oInput.value = url;
			    document.body.appendChild(oInput);
			    oInput.select();
			    document.execCommand("Copy"); 
				uni.showToast({
					title: that.$t('index.copySuc'),
					icon: 'none',
					duration: 2000
				});
			    oInput.remove()
			},
			toDomchain() {
				location.href = "https://domchain.io"
			}
		},
		components: {
			UniCard
		}
	}
</script>

<style>
	.content {
		background: #F8F8FB;
	}

	.banner-nav {
		width: 750upx;
		height: 548upx;
		display: inline-block;
		overflow: hidden;
		position: relative;
		border-bottom-left-radius: 120upx;
	}

	.uni-padding-wrap {
		width: 670upx;
	}

	.uni-common-mt {
		margin-top: 0;
		position: relative;
		top: -84upx;
		padding: 0px 40upx;
	}

	.uni-bar {
		background: #ffffff;
		box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
		border-radius: 30upx;
		min-height: 850upx;
		width: 670upx;
		margin: 0 auto;
		padding-bottom: 20upx;
	}

	.uni-bar-title {
		text-align: center;
		padding-top: 30upx;
	}

	.uni-title-text-top {
		font-size: 46upx;
		color: #323232;
		line-height: 2em;
		font-weight: 600;
		letter-spacing: 1.5px;
	}

	.uni-title-text-bottom {
		color: #9B9B9B;
		font-size: 22upx;
		font-weight: 400;
		line-height: 1.5em;
		padding: 0px 20upx;
	}

	.uni-bg-green-gradient {
		min-height: 310upx;
		background: linear-gradient(to top left, #3EB67E, #1D7F53);
		background: -ms-linear-gradient(to top left, #3EB67E, #1D7F53);
		background: -webkit-linear-gradient(to top left, #3EB67E, #1D7F53);
		background: -moz-linear-gradient(to top left, #3EB67E, #1D7F53);
		box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
		border-radius: 30upx;
		margin-top: 20upx;
		padding: 30upx;
	}

	.uni-top-green {
		width: 530upx;
		min-height: 140upx;
		background: rgba(14, 89, 54, .6);
		margin: 0 auto;
		border-radius: 20upx;
		padding: 20upx 40upx;
	}

	.uni-top-tiltle {
		text-align: center;
		color: rgba(255, 255, 255, .7);
		font-size: 28upx;
		line-height: 2em;
	}

	.uni-top-subtitle {
		font-size: 24upx;
		color: #ffffff;
		font-weight: 500;
		line-height: 1.5em;
		display: block;
		word-break: break-all;
		text-align: center;
	}

	.flex-item {
		text-align: center;
		flex: 1;
		margin-top: 40upx;
	}

	.text-title {
		font-size: 22upx;
		color: rgba(255, 255, 255, .7);
		line-height: 1.5em;
		display: block;
	}

	.text-time {
		color: #ffffff;
		font-size: 22upx;
		line-height: 2em;
		display: block;
		letter-spacing: 1px;
	}

	.uni-body-info {
		margin-top: 18upx;
		padding: 0px 40upx;
	}

	.uni-info-green-title {
		text-align: center;
	}

	.uni-info-green-title text {
		font-size: 28upx;
		color: #1D7F53;
		line-height: initial;
		font-weight: 600;
		letter-spacing: 1px;
	}

	.text-bg {
		min-height: 100upx;
		padding: 15upx 0upx;
		background: #F2F8F7;
		border-radius: 20upx;
		margin-top: 20upx;
		text-align: center;
	}

	.text-bg text {
		color: #323232;
		font-size: 26upx;
		line-height: 1.8em;
		display: block;
		font-weight: 600;
	}

	.more-navgiter {
		margin-top: 20upx;
		font-size: 22upx;
		color: #9B9B9B;
		text-align: center;
	}

	.uni-card .map-bar {
		width: 100%;
		height: 300upx;
	}

	.uni-card .header-bar {
		height: 160upx;
		width: 160upx;
		border-radius: 50%;
		margin-top: 20upx;
		display: inline-block;
		text-align: center;
		position: absolute;
		left: 260upx;
	}

	.set-2:last-child::after {
		display: none;
	}

	.set-1 {
		margin: 12upx 30upx;
		margin-right: 4upx;
	}

	.set-top {
		margin-top: 208upx;
	}

	.set-2 {
		position: relative;
		line-height: 3em;
		display: flex;
		min-height: 60upx;
		padding-bottom: 20upx;
	}

	.set-2::after {
		content: '';
		top: 18upx;
		border-left: #c6c6c6 1px dotted;
		left: -12upx;
		min-height: 100%;
		position: absolute;
	}

	.set-2::before {
		content: "";
		position: absolute;
		left: -20upx;
		height: 5px;
		width: 5px;
		border-radius: 50%;
		background: #fff;
		border: 2px solid rgba(29, 127, 83, .5);
		top: 10upx;
		z-index: 99;
	}

	.set-2 .set-title {
		flex: 1;
		padding-left: 20upx;
		font-size: 24upx;
		font-weight: 600;
		color: #323232;
		line-height: 1.6em;
		text-align: left;
	}

	.set-2 .set-subtitle-time {
		flex: 1.7;
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 1.6em;
		text-align: right;
	}

	.set-subtitle-time image {
		width: 330upx;
		height: 230upx;
	}

	.set-subtitle-time image.vendorInfor-img {
		height: 480upx;
	}

	.set-2 .set-subtitle-time .set-subtitle-time-if {
		font-size: 24upx;
		color: #9B9B9B;
		line-height: 1.6em;
		text-align: right;
		white-space: pre-wrap;
	}

	.uni-scan {
		height: 90rpx;
		border: none;
		border-radius: 55rpx;
		text-align: left;
		line-height: 2.5em;
		width: 590rpx;
		margin-bottom: 20rpx;
		background: linear-gradient(to right, #3EB67E, #1D7F53);
		background: -ms-linear-gradient(to right, #3EB67E, #1D7F53);
		background: -webkit-linear-gradient(to right, #3EB67E, #1D7F53);
		background: -moz-linear-gradient(to right, #3EB67E, #1D7F53);
		box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
		outline: none;
	}

	.uni-scan image.blan-icon {
		height: 28rpx;
		width: 28rpx;
		display: inline-block;
		position: absolute;
		top: 32rpx;
	}

	.uni-scan text {
		color: #fff;
		font-size: 24rpx;
		font-weight: 600;
		display: inline-block;
		padding-left: 40rpx;
		padding-right: 10rpx;
		width: 484rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: 90rpx;
	}

	.uni-scan image.crow-icon {
		display: inline-block;
		width: 13rpx;
		height: 22rpx;
		text-align: right;
		position: absolute;
		top: 35rpx;
		right: 28rpx;
	}
</style>
<style scoped>
	.language {
		height: 60upx;
		border-radius: 55upx;
		border: 1px solid #F2F2F2;
		background: rgba(255, 255, 255, 0.5);
		position: absolute;
		top: 18upx;
		right: 32upx;
		display: flex;
		padding: 0 20upx;
		line-height: 60upx;
		padding-right: 26upx;
	}

	.lan {
		width: 36upx;
		height: 36upx;
		margin-top: 14upx;
		margin-left: 10upx;
	}

	.language text {
		padding-left: 18upx;
		color: #1D7F53;
		font-size: 28upx;
	}

	.language-box {
		border-radius: 10upx;
		min-height: 50upx;
		width: 300upx;
		background: #fff;
	}

	.zh {
		height: 88upx;
		line-height: 88upx;
		border-bottom: 1px solid #f2f2f2;
		padding-left: 60upx;
	}

	.zh image {
		width: 40upx;
		height: 40upx;
		margin-top: 22upx;
	}

	.zh text {
		padding-left: 20upx;
		position: relative;
		top: -8upx;
	}

	.en {
		height: 88upx;
		line-height: 88upx;
		padding-left: 60upx;
	}

	.en text {
		padding-left: 10upx;
		position: relative;
		top: -8upx;
	}

	.en image {
		width: 40upx;
		height: 40upx;
		margin-top: 22upx;
	}

	.uni-top-tiltle image {
		width: 30upx;
		height: 30upx;
		position: relative;
		top: 4upx;
		left: 24upx;
	}
</style>
