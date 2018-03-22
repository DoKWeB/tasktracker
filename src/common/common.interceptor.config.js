import {name as LoadingInterceptor} from "./loading.interceptor";
import {name as AuthRejector} from "../auth/auth.rejector.service";

function interceptor($httpProvider){
	$httpProvider.interceptors.push(AuthRejector);
	$httpProvider.interceptors.push(LoadingInterceptor);
}
interceptor.$inject = ['$httpProvider'];

export default interceptor;