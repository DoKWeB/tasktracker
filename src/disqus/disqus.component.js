class controller {
	
    constructor($window, $location){
		const url = $location.absUrl();
		
		if (!$window.DISQUS) {
			var dsq = document.createElement('script');
			dsq.type = 'text/javascript';
			dsq.async = true;
			dsq.src = '//' + this.config.disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		} else {
			$window.DISQUS.reset({
				reload: true,
				config: function () {
					this.page.identifier = url + '/angular-esy-es';
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