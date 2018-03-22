describe('users', function () {
	beforeEach(function () {
		module('users');
	});

	describe('UsersService', function () {
		let $httpBackend,
			UsersService,
			mockUser = {
				id: 5,
				email: "alex@mail.ru",
				name: "Alexander Ledyaev",
				date: "27.02.1995",
				img: "https://randomuser.me/api/portraits/men/9.jpg",
				password: "qwerty"
			};

		beforeEach(inject(function (_$httpBackend_, _UsersService_) {
			$httpBackend = _$httpBackend_;
			UsersService = _UsersService_;

			$httpBackend.whenGET("/api\.php/task_users/5").respond(mockUser);
		}));

		it("Test getUser", function (done) {
			UsersService.getUser(5).then(function (user) {
				expect(user).toEqual(mockUser);
				done();
			});

			$httpBackend.flush();
		});
	});
});