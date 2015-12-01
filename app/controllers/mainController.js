app.controller('mainController', function($scope, dialogService) {

  $scope.showDialog = function (){
    dialogService.showConfirm('Confirm', "Are you really want to delete this abc?", function (){
      console.log('confirmed');
      dialogService.hideDialog();

    }, function (){
      console.log("canceled");
      dialogService.hideDialog();

    });
  }
});
