angular.module('minhasDiretivas', []).directive('meuPainel', function(){

    var ddo = {};

    ddo.restrict = 'AE';
    ddo.transclude = true; //Para ativarmos a transclusão basta adicionar no DDO a propriedade
                           //transclude com valor true e na marcação da diretiva adicionar a diretiva ng-transclude no elemento que deve preservar seus elementos filhos

    ddo.scope = {
        titulo: '@' //quando o nome do atributo na diretiva na marcação é igual ao nome da propriedade que guardará o seu valor, podemos deixar apenas @
    };

    ddo.templateUrl = 'js/directives/meu-painel.html'; //ficar concatenando HTML dentro da propriedade template não é algo gostoso de se fazer
                                                       //Para isso criamos um novo arquivo com a marcaçao que deveriamos concatenar em template e aplicamos a diretiva .templateUrl

    /*ddo.template =
                '<div class="panel panel-default">'
            +   '   <div class="panel-heading">'
            +   '        <h3 class="panel-title text-center">{{titulo}}</h3> '
            +   '   </div>'
            +   '   <div class="panel-body" ng-transclude>' //adicionado a diretiva ng-transclude no elemento que deve preservar seus elementos filhos
            +   '   </div>'
            +   '</div>'
    */


    return ddo;
});