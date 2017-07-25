myAppModule.controller('myLeaveController', ['$scope', '$route', 'EmployeeDataServices', function ($scope, $route, EmployeeDataServices) {

    EmployeeDataServices.getLeaveDetails().then(function (response) {
        $scope.leaveDetails = response.data;
    }, function (error) {
        $scope.leaveDetails = [];
    })

    $scope.ViewPerPage = 25;

    $scope.currentYear = moment().format('YYYY');

    $scope.years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
    $scope.status = [{ text: 'All', value: null }, { text: 'Approve', value: true }, { text: 'Pending', value: false }];

}])