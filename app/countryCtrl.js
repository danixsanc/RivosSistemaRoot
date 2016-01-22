app.controller('countryCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) 
{
    //initially set those objects to null to avoid undefined error
    $scope.lista= {};
    $scope.datosCountry = {};

       $scope.listaS= {};
    $scope.datosState = {};

       $scope.listaT= {};
    $scope.datosTown = {};

    $scope.nameWindow={};


$scope.cargarTabs = function(){
        $(document).ready(function(){
        $('ul.tabs').tabs();
        });
    }
        $scope.cargarDatosCountry = function (customer) {
        Data.post('datosCountry').then(function (results) {
            if (results.status == "success") {
                $scope.lista = results.records;
            }
            else if(results.status  == "error"){
                Data.toast("No se puedieron cargar los datos.");
            }
        });
    };

    $scope.cargarDatosState = function (customer) {
        Data.post('datosState').then(function (results) {
            if (results.status == "success") {
                $scope.listaS = results.records;
            }
            else if(results.status  == "error"){
                Data.toast("No se puedieron cargar los datos.");
            }
        });
    };

    $scope.cargarDatosTown = function (customer) {
        Data.post('datosTown').then(function (results) {
            if (results.status == "success") {
                $scope.listaT = results.records;
            }
            else if(results.status  == "error"){
                Data.toast("No se puedieron cargar los datos.");
            }
        });
    };

$scope.cargarModalCountry = function (country_id, read, mod, add, type) {
        Data.post('detalleCountry', {
         country_id: country_id
        }).then(function (results) {
            if (results.status == "success") {
                $scope.datosCountry = results;
                $("#modalCountry").openModal({
                    dismissible: false
                });
                    if(read){
                        $scope.lectura = true;
                    }
                    else{
                        $scope.lectura = false;
                    }
                    if (mod) {
                        $scope.modificar = true;
                    }
                    else{
                        $scope.modificar = false;
                    }
                    if (add){
                        $scope.datosColony = {};
                        $scope.agregar = true;
                    }
                    else{
                        $scope.agregar = false;   
                    }

                    $scope.nameWindow = type;
                            
            }
            else if(results.status  == "error"){
                Data.toast("No se puede cargar información.");
            }
        });
    };
      

      $scope.cargarModalState = function (state_id, read, mod, add, type) {
        Data.post('detalleState', {
         state_id: state_id
        }).then(function (results) {
            if (results.status == "success") {
                $scope.datosState = results;
                $("#modalState").openModal({
                    dismissible: false
                });
                    if(read){
                        $scope.lectura = true;
                    }
                    else{
                        $scope.lectura = false;
                    }
                    if (mod) {
                        $scope.modificar = true;
                    }
                    else{
                        $scope.modificar = false;
                    }
                    if (add){
                        $scope.datosState = {};
                        $scope.agregar = true;
                    }
                    else{
                        $scope.agregar = false;   
                    }

                    $scope.nameWindow = type;
                            
            }
            else if(results.status  == "error"){
                Data.toast("No se puede cargar información.");
            }
        });
    };

     $scope.cargarModalTown = function (town_id, read, mod, add, type) {
        Data.post('detalleTown', {
         town_id: town_id
         
        }).then(function (results) {
            if (results.status == "success") {
                $scope.datosTown = results;
                $("#modalTown").openModal({
                    dismissible: false
                });
                    if(read){
                        $scope.lectura = true;
                    }
                    else{
                        $scope.lectura = false;
                    }
                    if (mod) {
                        $scope.modificar = true;
                    }
                    else{
                        $scope.modificar = false;
                    }
                    if (add){
                        $scope.datosTown = {};
                        $scope.agregar = true;
                    }
                    else{
                        $scope.agregar = false;   
                    }

                    $scope.nameWindow = type;
                            
            }
            else if(results.status  == "error"){
                Data.toast("No se puede cargar información.");
            }
        });
    };
 






});