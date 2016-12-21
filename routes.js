assessment.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'views/shop.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('blog', {
          url: '/blog',
          templateUrl: 'views/blog.html'
        })
        .state('details', {
          url: 'detail/:id',
          templateUrl: 'views/product-details.html',
          controller: 'mainCtrl'
        });
});
