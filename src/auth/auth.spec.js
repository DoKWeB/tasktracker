describe("auth", function () {
	beforeEach(function () {
		module('auth');
	});

	describe("AuthService", function () {
		var $httpBackend;
		var AuthService;
		var $rootScope;
		var mockUser = {
			id: 5,
			email: "alex@mail.ru",
			name: "Alexander Ledyaev",
			date: "27.02.1995",
			img: "https://randomuser.me/api/portraits/men/9.jpg",
			password: "qwerty"
		};

		beforeEach(inject(function (_$httpBackend_, _AuthService_, $q, _$rootScope_) {
			$httpBackend = _$httpBackend_;
			AuthService = _AuthService_;
			$rootScope = _$rootScope_;

			$httpBackend.whenPOST("/api\.php").respond(mockUser);
			$httpBackend.whenPOST("/api\.php/task_users").respond(mockUser);
		}));

		it("Test signin", function (done) {
			AuthService.signin("alex@mail.ru", "qwerty").then(function (user) {
				expect(user).toEqual(mockUser);
				done();
			});
			
			$httpBackend.flush();
		});

		it("Test signup", function (done) {
			AuthService.signup("alex@mail.ru", "Alexander Ledyaev", "27.02.1994", "qwerty").then(function (user) {
				expect(user).toEqual(mockUser);
				done();
			});

			$httpBackend.flush();
		});

		it("Test getUser return user", function (done) {
			AuthService.getUser().then(function (user) {
				expect(user).toEqual(mockUser);
				done();
			});

			$httpBackend.flush();
		});

		it("Test getUser set $rootScope.user", function (done) {
			AuthService.getUser().then(function (user) {
				expect($rootScope.user).toBe(user);
				done();
			});

			$httpBackend.flush();
		});
	});
});