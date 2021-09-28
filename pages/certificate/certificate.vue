<template>
	<view class="content">
		<view class="certificate-img">
			<image class="bg-set" src="../../static/certificate.png"></image>
			<view class="cer-title-sub">
			 	{{dataList.certName}}{{$t('index.certificate')}}
			</view>
			<view class="cer-content">
				
				<view class="cer-block">
					<view class="cer-title">
						{{$t('index.block')}}
					</view>
					<view class="cer-dynamic-text">
						{{dataList.blockHeight}}
					</view>
				</view>
				<view class="cer-block">
					<view class="cer-title">
						{{$t('index.chainOne')}}
					</view>
					<view class="cer-dynamic-text">
						{{dataList.txHash}}
					</view>
				</view>
				<view class="cer-block">
					<view class="cer-title">
						{{$t('index.blockTime')}}
					</view>
					<view class="cer-dynamic-text">
						{{dataList.blockTime}}
					</view>
				</view>
				<view class="cer-block">
					<view class="cer-title">
						{{$t('index.chain')}}
					</view>
					<view class="cer-dynamic-text">
						{{dataList.chainName}}
					</view>
				</view>
				<view class="cer-identity cer-top-identity">
					<view class="cer-title-left">
						{{$t('index.uploade')}}
					</view>
					<view class="cer-title-right">
						{{dataList.uploader}}
					</view>
				</view>
				<view class="cer-identity">
					<view class="cer-title-left">
						{{$t('index.subject')}}
					</view>
					<view class="cer-title-right">
						{{dataList.uploaderProve}}
					</view>
				</view>
				<view class="cer-idn-img">
					<image src="../../static/img2.png" mode=""></image>
					<image src="../../static/img1.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="uni-title-blan">
			<image src="../../static/icon-circular.png" mode=""></image>
			<uni-title class="title-text" :title="title"></uni-title>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in heightList" :key="index">
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">
							<view class="uni-medis-list-text-top-left">
								{{$t('index.blockHeight')}}{{item.blockHeight}}
							</view>
							<view class="uni-medis-list-text-top-right">
								{{$t('index.tran')}}{{item.txCount}}
							</view>
						</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">
							<view class="uni-medis-list-text-bottom-left">
								{{$t('index.blockHash')}}{{item.blockHash}}
							</view>
							<view class="uni-medis-list-text-bottom-right">
								{{item.blockTime}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: '',
				heightList: [],
				title: this.$t('index.latestBlock')
			}
		},
		onLoad(option) {
			let that = this;
			that.$api.certInfo({
				qrCode: option.hash
			}).then((res) => {
				if (res.data.code === 200) {
					that.$data.dataList = res.data.result;
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none',
						duration: 2000
					})
				}
			}).catch((err) => {});
		},
		onShow() {
			let that = this;
			that.$api.lastBlockInfo({}).then((res) => {
				if (res.data.code === 200) {
					that.$data.heightList = res.data.result;
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
			
		}
	}
</script>

<style>
	.content {
		background: #F8F8FB;
		padding: 40upx;
	}
	.certificate-img {
		width: 100%;
		height: 1133upx;
	}
	.cer-title-sub {
		font-size: 36upx;
		color: #1D7F53;
		text-align: center;
		line-height: 1.4em;
		margin: 0 auto;
		position: relative;
		top: 146upx;
		z-index: 99;
		word-wrap: break-word;
		width: 580upx;
	}
	
	.bg-set{
	    position: absolute;
	    width: 670upx;
	    height: 1089upx;
	    top: 23px;
	    left: 20px;
	    z-index: 1;
		box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
	}
	.cer-content {
		z-index: 99;
		position: relative;
		width: 532upx;
		margin: 0 auto;
		top: 234upx;
	}
	.cer-block {
		margin-bottom: 20upx;
	}
	.cer-block .cer-title {
		color: #8C8D8E;
		font-size: 22upx;
		font-weight: 600;
	}
	.cer-block .cer-dynamic-text {
		min-height: 40upx;
		border-radius: 4upx;
		background: #F3FAF7;
		text-align: center;
		line-height: 1.4em;
		word-break:break-all;
		padding: 15upx;
		font-weight: 600;
		margin-top: 8upx;
		font-size: 22upx;
	}
	.cer-top-identity {
		margin-top: 60upx;
	}
	.cer-identity {
		display: flex;
		margin-bottom: 10upx;
	}
	.cer-title-left {
		flex: 1;
		color: #8C8D8E;
		font-size: 23upx;
	}
	.cer-title-right {
		flex: 1;
		color: #8C8D8E;
		font-size: 24upx;
		text-align: right;
	}
	.cer-idn-img image:nth-of-type(1) {
		width: 200upx;
		height: 200upx;
		position: absolute;
		bottom: 4%;
		left: 23%;
	}
	.cer-idn-img image:nth-of-type(2) {
		width: 200upx;
		height: 200upx;
		position: absolute;
		bottom: 9%;
		left: 65%;
	}
	.uni-title-blan {
		display: flex;
		margin-bottom: 10upx;
	}
	.uni-title-blan image {
		width: 33upx;
		height: 33upx;
		position: relative;
		top: 26upx;
	}
	.uni-title-blan {
		display: flex;
		margin-bottom: 10upx;
	}
	.uni-title-blan image {
		width: 33upx;
		height: 33upx;
		position: relative;
		top: 26upx;
	}
	
	.uni-list {
		border-radius: 20upx;
		background: #F8F8FB !important;
	}
	.uni-list::before {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    top: 0;
	    left: 0;
	    height: 0px !important;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	.uni-media-list {
		border: none !important;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15);
	}
	.uni-list-cell {
		margin-bottom: 30upx;
	}
	.uni-list-cell::after {
	    position: absolute;
	    z-index: 3;
	    right: 0;
	    bottom: 0;
	    left: 15px;
	    height: 0px !important;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	.uni-list:after {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 0px !important;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	.uni-media-list-body {
		height: auto;
	}
	.uni-media-list-text-top {
		line-height: 1.6em;
		display: flex;
	}
	.uni-medis-list-text-top-left {
		flex: 1;
		text-align: left;
		color: #323232;
		font-size: 24upx;
		font-weight: 600;
		line-height: 2em;
	}
	.uni-medis-list-text-top-right {
		flex: 1;
		text-align: right;
		font-size: 24upx;
		font-weight: 600;
		color: #1D7F53;
		line-height: 2em;
	}
	.uni-media-list-text-bottom {
		display: flex;
	}
	.uni-medis-list-text-bottom-left {
		flex: 1;
		text-align: left;
		line-height: 2em;
		color: #9B9B9B;
		font-size: 22upx;
		font-weight: 500;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.uni-medis-list-text-bottom-right {
		flex: 1;
		text-align: right;
		line-height: 2em;
		font-size: 22upx;
		font-weight: 500;
	}
</style>
