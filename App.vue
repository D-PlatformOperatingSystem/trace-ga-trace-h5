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
		}
	}
</script>

<style>
	@import './common/uni.css';
	.uni-card--shadow {
		box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.15) !important;
		border-radius: 30rpx !important;
		border: none !important;
		margin: 0 auto !important;
	}
	.uni-card {
		width: 670rpx;
		padding-bottom: 20rpx;
		margin-top: 30rpx !important;
	}
	.uni-card__header {
		background: #F8F8FB !important;
	}
	.uni-border-bottom:after {
		border-bottom: 0px solid #e5e5e5 !important;
	}
	.uni-card__header-title-text {
		font-size: 26rpx !important;
		color: #323232 !important;
		font-weight: 600 !important;
		letter-spacing: 1px !important;
	}
	.uni-card__header-extra-img {
	    height: 34rpx !important;
	    width: 34rpx !important;
	    margin-right: 5px !important;
	    top: 4px !important;
	}
	.uni-card__content--pd[data-v-3afcb0a4] {
	    padding: 12px;
	    text-align: center !important;
	}
	.uni-steps__column-circle[data-v-61dda2da] {
	    width: 5px !important;
	    height: 5px !important;
	    -webkit-border-radius: 50% !important;
	    border-radius: 50% !important;
	    background-color: #fff !important;
	    margin: 4px 0px 5px 0px;
		border: 3px solid rgba(29, 127, 83, .5) !important;
	}
	.uni-steps__column-line[data-v-61dda2da] {
	    width: 1px;
	    background-color: #fff !important;
		border-right: 1px dotted rgba(29, 127, 83, .5);
	}
	.uni-steps__column-container[data-v-61dda2da] {
	    display: -webkit-inline-box;
	    display: -webkit-inline-flex;
	    display: inline-flex;
	    width: 20px !important;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -webkit-flex-direction: column;
	    flex-direction: column;
	}
	.uni-steps__column-text[data-v-61dda2da] {
	    padding: 6px 0px;
	    border-bottom-style: solid;
	    border-bottom-width: 0px !important;
	    border-bottom-color: #e5e5e5;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -webkit-flex-direction: row !important;
	    flex-direction: row !important;
	}
	.uni-steps__column-title[data-v-61dda2da] {
	    font-size: 24rpx !important;
	    text-align: left;
	    line-height: 2em !important;
	    flex: 1 !important;
	    display: inline-block !important;
		color: #323232 !important;
		font-weight: 600;
		padding-left: 5px !important;
	}
	.uni-steps__column-desc[data-v-61dda2da] {
	    font-size: 24rpx !important;
	    text-align: right !important;
	    line-height: 2em !important;
	    flex: 1 !important;
	    display: inline-block !important;
		color: #9B9B9B !important;
		padding-right: 10rpx !important;
	}
	.uni-steps__column-line-item:nth-of-type(1) .uni-steps__column-line[data-v-61dda2da] {
		/* border: none !important; */
	}
	.uni-steps__column-line-item:nth-last-child(1) .uni-steps__column-line[data-v-61dda2da] {
		border: none !important;
	}
	.uni-steps__column-line--before[data-v-61dda2da] {
	    height: auto !important;
	    -webkit-transform: translate(0px, px) !important;
	    transform: translate(0px, 0px) !important;
	}
	.uni-title__base[data-v-366c56fc] {
	    font-size: 26rpx !important;
	    font-weight: 600 !important;
		padding-left: 10rpx !important;
		color: #323232 !important;
	}
	uni-modal .uni-modal__btn_primary {
	    color: #1D7F53 !important;
	}
	uni-modal .uni-modal {
	    position: fixed;
	    z-index: 999;
	    width: 80%;
	    max-width: 300px;
	    top: 50%;
	    left: 50%;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	    background-color: #fff;
	    text-align: center;
	    border-radius: 10px !important;
	    overflow: hidden;
	}
</style>
