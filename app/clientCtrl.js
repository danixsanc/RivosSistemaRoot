app.controller('clientCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) 
{
    //initially set those objects to null to avoid undefined error
    $scope.lista= {};
    $scope.datosClient = {};
    $scope.nameWindow={};

    $scope.cargaDatosClient = function (customer) {
        Data.post('datosClient').then(function (results) {
            if (results.status == "success") {
                $scope.lista = results.records;
            }
            else if(results.status  == "error"){
                Data.toast("No se puedieron cargar los datos.");
            }
        });
    };

    $scope.cargarModalClient = function (client_id, read, mod, add, type) {
        Data.post('detalleClient', {
            client_id: client_id
        }).then(function (results) {
            if (results.status == "success") {
                $scope.datosClient = results;
                $("#modalClient").openModal({
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
                        $scope.datosClient = {};
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