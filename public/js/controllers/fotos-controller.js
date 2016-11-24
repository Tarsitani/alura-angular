angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = []; //cria um array
    $scope.filtro = ''; //vai ser guardado aqui a string que for digitada no filtro

    $http.get('v1/fotos').success(function(foto){
        $scope.fotos = foto; //não precisa do .data quando usa-se success
    }).error(function(erro){
        console.log(erro);
    });

    /* $http.get('v1/fotos') //faz um requisito para o URL passado e tenta pegar os dados, "faz uma promessa"
    .then(funtion(retorno) { //dai(then) caso ele consiga ter acesso a esses dados
        $scope.fotos = retorno.data; //salva no array criado anteriormente os dados(data)
    }).catch(function(error){ //caso ele não consiga pegar os dados, solta uma mensagem de erro
        console.log(error);
    }); */
});