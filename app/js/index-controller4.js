/**
 * Created by Aluno on 06/11/2015.
 */
angular.module('validacao', ['ngMessages', 'ui.growl']);
angular.module('validacao').controller('IndexController4', IndexController4);
IndexController4.$inject = ['$scope', 'AlertService', '$filter'];

function IndexController4($scope, AlertService, $filter) {
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.entidade = {};
    $scope.listaDePessoas = [];

    function salvar(){
        if($scope.myForm.$invalid === true){
            AlertService.showAlert('Oberve','Verifique os campos inválidos');
            return;
        }

        //$filter('date')($scope.entidade.dtNascimento, format, timezone);
        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        AlertService.showOk('Ok','Salvo!!');
    }

    function limpar(){
        $scope.entidade = {};
    }
}