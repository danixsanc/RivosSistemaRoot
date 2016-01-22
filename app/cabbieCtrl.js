app.controller('cabbieCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) 
{
    //initially set those objects to null to avoid undefined error
    $scope.lista= {};
    $scope.datosCabbie = {};
    $scope.nameWindow={};

    $scope.cargaDatosCabbie = function (customer) {
        Data.post('datosCabbie').then(function (results) {
            if (results.status == "success") {
                $scope.lista = results.records;
            }
            else if(results.status  == "error"){
                Data.toast("No se puedieron cargar los datos.");
            }
        });
    };

    $scope.cargarModalCabbie = function (cabbie_id, read, mod, add, type) {
        Data.post('detalleCabbie', {
            cabbie_id: cabbie_id
        }).then(function (results) {
            if (results.status == "success") {
                $scope.datosCabbie = results;
                $("#modalCabbie").openModal({
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
                        $scope.datosCabbie = {};
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

/*
    $scope.deleteModalRoot = function (uid) {
        $("#modalDeleteRoot").openModal();
        $scope.uidRoot  = uid;
        $scope.nameRoot = uid.name;
    };

    $scope.limpiarCamposRoot = function(){
        $scope.datosRoot = {};
    };

    $scope.datosRoot = {uid:'',name:'',email:'',phone:'',password:'',repeatpassword:''};
    $scope.updateRootData = function(rootUser){
        if($scope.validar2()){

            Data.post('updateRoot', {
                rootUser: rootUser
            }).then(function (results) {
                if (results.status == "success") {
                    $("#modalRoot").closeModal();
                   $scope.cargarDatosRoot();
                }
            });
        }
        else
        {
            Materialize.toast('Porfavor verifique todos sus campos escritos', 4000);
        }
    };

    $scope.addRootData = function(rootUser){

        if($scope.validar()){
            Data.post('addRoot', {
                rootUser: rootUser
            }).then(function (results) {
                Data.toast(results);
                if (results.status == "success") {
                   $("#modalRoot").closeModal();
                   $scope.cargarDatosRoot();

                }
            });
        }
        else
        {
            Materialize.toast('Porfavor verifique todos sus campos escritos', 4000);
        }
    };

    $scope.datosRoot = {uid:''};
    $scope.deleteRootData = function(rootUser){
        Data.post('deleteRoot', {
            rootUser: rootUser
        }).then(function (results) {
            if (results.status == "success") {
                $scope.cargarDatosRoot();
            }

        });
    };*/

});