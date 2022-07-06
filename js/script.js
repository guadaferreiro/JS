let preguntas = prompt ("Hola ¿En qué te puedo ayudar? (Escriba uno de los siguientes temas a continuación) \n\nTURNO ONLINE \n \nDIRECCIÓN \n \nTELEFONO \n \nHORARIOS \n \nHABLAR CON UN OPERADOR");


while (preguntas) {
    switch (preguntas.toUpperCase ()) {
        case "TURNO ONLINE":
            const turnoOnline = prompt ("Turnos disponibles (Escribir turno) \n\nJueves 24 \n\nViernes 25");

            if (turnoOnline === "Jueves 24") {
                alert ("Horario disponible 17hs");
                alert ("Turno reservado")
                turnoOnline = ""
            } else if (turnoOnline === "Viernes 25"){
                alert ("Horario disponible 16hs");
                alert ("Turno reservado")
            }else {
                alert ("No hay turnos disponibles")
            }
            break;
        
        case "DIRECCION":
            alert ("Alberdi 138, Laboulaye, Córdoba");
            break;

        case "TELEFONO":
            alert ("\n \n03385-466029 \n \nWhatsApp: 03385-466028");
            break;
        
        case "HORARIOS":
            alert ("De 8hs a 20:30hs");
            break;

        case "HABLAR CON UN OPERADOR":
            alert ("Redirigiendote con un operador");
            alert ("Aguarda esto puede tardar más de lo normal");
            alert ("¡Gracias por la espera!");
            break;

        default:
            alert("Dato invalido")
            preguntas = prompt ("Hola. ¿En qué te puedo ayudar? (Escriba uno de los siguientes temas a continuación) \n\nTURNO ONLINE \n \nDIRECCIÓN \n \nTELEFONO Y HORARIOS \n \nOBRAS SOCIALES \n \nHABLAR CON UN OPERADOR");
    }
}






