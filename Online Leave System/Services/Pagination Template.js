myAppModule.run(function ($templateCache) {
    $templateCache.put(
      "directives/pagination/dirPagination.tpl.html",
      "<ul class='pagination' ng-if='1 < pages.length'>"+
      "<li ng-if='boundaryLinks' ng-class='{ 'page-item':false,'disabled':false }'>"+
        "<a href='' class='page-link' ng-click='setCurrent(1)'>&laquo;</a>"+
       "</li>"+
      "<li ng-if='directionLinks' ng-class='{ page-item:true,disabled : pagination.current == 1 }'>"+
        "<a href='' ng-click='setCurrent(pagination.current - 1)' class='ng-binding page-link'>‹</a>"+
      "</li>"+
      "<li ng-repeat='pageNumber in pages track by $index' ng-class='{'page-item':true, 'active' : pagination.current == pageNumber, 'disabled' : pageNumber == '...' }'>"+
        "<a href='' class='page-link' ng-click='setCurrent(pageNumber)'>{{ pageNumber }}</a>"+
      "</li>"+
      "<li ng-if='directionLinks' ng-class='{'page-item':true, 'disabled': pagination.current == pagination.last }'>"+
        "<a href='' ng-click='setCurrent(pagination.current + 1)' class='ng-binding page-link'>›</a>"+
      "</li>"+
      "<li ng-if='boundaryLinks' ng-class='{'page-item':true, 'disabled' : pagination.current == pagination.last }'>"+
        "<a href='' class='page-link' ng-click='setCurrent(pagination.last)'>&raquo;</a>"+
      "</li>"+
    "</ul>")
});

myAppModule.config(function (paginationTemplateProvider) {
    paginationTemplateProvider.setPath('directives/pagination/dirPagination.tpl.html');
});


'<md-button class="<md-icon-button md-raised md-warn" aria-label="First" ng-click="vm.gotoFirst()">{{ vm.first }}</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Previous" ng-click="vm.gotoPrev()" ng-show="vm.index - 1 >= 0">&#8230;</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.stepInfo"',
                ' ng-click="vm.goto(vm.index + i)" ng-show="vm.page[vm.index + i]" ',
                ' ng-class="{\'md-primary\': vm.page[vm.index + i] == clCurrentPage}">',
                ' {{ vm.page[vm.index + i] }}',
                '</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Next" ng-click="vm.gotoNext()" ng-show="vm.index + vm.clSteps < clPages">&#8230;</md-button>',
                '<md-button class="md-icon-button md-raised md-warn" aria-label="Last" ng-click="vm.gotoLast()">{{ vm.last }}</md-button>',