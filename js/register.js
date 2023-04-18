function registrar(){
        var correoElectrónico = document.querySelector("#InputEmail").value;
        var nombre = document.querySelector("#InputName").value;
        var fechaNacimiento =  document.querySelector('input[type="date"]').value;
        var hoy = new Date();
        var cumpleaños  = new Date(fechaNacimiento);
        var edad = hoy.getFullYear() - cumpleaños.getFullYear();
        var mes = hoy.getMonth() - cumpleaños.getMonth();
        var Output = "";
        if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleaños.getDate())) {
            edad--;
        }
        
        Output = "Si los datos están completos y correctos lo contactaremos lo mas pronto posible. Gracias por confiar en nuestro servicio.";

     alert(Output);
  }
  
  