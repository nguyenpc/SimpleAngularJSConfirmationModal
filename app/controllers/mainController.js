app.controller('mainController', function($scope, dialogService) {

  $scope.showDialog = function (){
    dialogService.showConfirm(function (){
      console.log('confirmed');
      dialogService.hideDialog();

    }, function (){
      console.log("canceled");
      dialogService.hideDialog();

    });
  }
});
