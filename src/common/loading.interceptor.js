function LoadingInterceptor($q, $rootScope) {
	let xhrCreations = 0,
		xhrResolutions = 0;
	
	function isLoading() {
		return xhrResolutions < xhrCreations;
	}
	
	function updateStatus() {
		$rootScope.isLoading = isLoading();
	}
	
	return {
		request: function (config) {
			xhrCreations++;
			updateStatus();
			return config;
		},
		requestError: function (rejection) {
			xhrResolutions++;
			updateStatus();
			return $q.reject(rejection);
		},
		response: function (response) {
			xhrResolutions++;
			updateStatus();
			return response;
		},
		responseError: function (rejection) {
			xhrResolutions++;
			updateStatus();
			return $q.reject(rejection);
		}
	};
}
LoadingInterceptor.$inject = ['$q', '$rootScope'];

export const name = 'LoadingInterceptor';
export default LoadingInterceptor;