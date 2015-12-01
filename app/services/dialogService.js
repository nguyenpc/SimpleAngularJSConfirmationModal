app.factory('dialogService', function($rootScope,$compile) {
  var service = {
    showConfirm: showConfirm,
    hideDialog: hideDialog
  };
  function showConfirm(onConfirm, onCancel){
    var scope = $rootScope.$new();
    scope.confirm = onConfirm;
    scope.cancel = onCancel;
    var html = $compile('<confirm-dialog></confirm-dialog>')(scope);
    angular.element(document.querySelector('body')).append(html);
  }
  function hideDialog(){
    angular.element(document.querySelector('confirm-dialog')).remove();
  }
  return service;
});
