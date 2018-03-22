function run($rootScope, AuthService){
	$rootScope.isLoading = false;

	if(!$rootScope.user){
		AuthService.getUser().catch(() => {});
	}
}
run.$inject = ['$rootScope', 'AuthService'];

export default run;