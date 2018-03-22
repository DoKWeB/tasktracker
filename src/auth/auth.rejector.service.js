import singupState from '../common/states/signup.state';
import singinState from '../common/states/signin.state';

class AuthRejector {

	constructor($injector, $q){
		this.responseError = function(responseError){
			var $state = $injector.get('$state');
			
			if(responseError.status === 401 && !$state.is(singupState)){
				$state.go(singinState);
			}

			return $q.reject(responseError);
		};
	}

}
AuthRejector.$inject = ['$injector', '$q'];

export const name = 'AuthRejector';
export default AuthRejector;