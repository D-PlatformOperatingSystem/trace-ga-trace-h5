import http from './interface'
var rootUrl = 'https://trace.domchain.io/admin-api'
var baseUrl = `${rootUrl}`;
var imgUrl = `${baseUrl}/sys/common/upload`; 
export const getQrCodeForPrint = (data) => {
	http.interceptor.request = (config) => {
		config.method = "GET"
	}
	return http.request({
		url: '/cherry/cherryTraceQrCode/trace',
		dataType: 'json',
		data,
	})
}
export const certInfo = (data) => {
	http.interceptor.request = (config) => {
		config.method = "GET"
	}
	return http.request({
		url: '/cherry/cherryTraceQrCode/certInfo',
		dataType: 'json',
		data,
	})
}
export const lastBlockInfo = (data) => {
	http.interceptor.request = (config) => {
		config.method = "GET"
	}
	return http.request({
		url: '/cherry/chain/lastBlockInfo',
		dataType: 'json',
		data,
	})
}

export default {
	imgUrl,
	getQrCodeForPrint,
	certInfo,
	lastBlockInfo
}
