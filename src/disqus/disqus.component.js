class controller {
	
    constructor($window, $location){
		this._$window = $window;
		this._$location = $location;
    }
    
    $onInit() {
	    const url = this._$location.absUrl();
	
	    if (!this._$window.DISQUS) {
		    var dsq = document.createElement('script');
		    dsq.type = 'text/javascript';
		    dsq.async = true;
		    dsq.src = '//' + this.config.disqus_shortname + '.disqus.com/embed.js';
		    dsq.setAttribute('data-timestamp', +new Date());
		    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	    } else {
		    this._$window.DISQUS.reset({
			    reload: true,
			    config: function () {
				    this.page.identifier = url + '/0e1fn0plhsul-000webhostapp-com';
				    this.page.url = url;
				    this.page.title = this.config.disqus_title;
			    }
		    });
	    }
    }
}
controller.$inject = ['$window', '$location'];

const template = '<div id="disqus_thread"></div><a href="http://disqus.com" class="dsq-brlink"></a>';
const bindings = {
	config: '='
};

export default {
  bindings,
  template,
  controller
};