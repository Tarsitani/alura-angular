angular.module('alurapic').controller('FotoController', function($scope, $http) {

        //se usamos ng-model="foto.titulo", o Angular criará automaticamente em $scope.foto a propriedade titulo, inclusive atribuindo o valor digitado pelo usuário.
        $scope.foto = {};
        $scope.submeter = function () {
            $http.post('/v1/fotos', $scope.foto)
            .success(function() {
                console.log('Foto adicionada com sucesso');
            })
            .error(function(erro) {
                console.log('Não foi possível cadastrar a foto');
            })
        };

    });