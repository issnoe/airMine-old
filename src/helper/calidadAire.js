export function getStatus(aqi) {
    
    var status = ''
    var color = ''
    var imagen = ''
    var implicacion = ""
    var advertencias = ""


    if (aqi <= 50) {
        status = 'Bueno'
        color = '#009966'
        implicacion = "La calidad del aire se considera satisfactoria y la contaminación atmosférica plantea poco o ningún riesgo"
        advertencias = "Ninguna"
        imagen = "buena.png"
    }
    if (aqi > 50 && aqi <= 100) {
        status = 'Moderado'
        color = '#ffde33'
        implicacion = "La calidad del aire es aceptable; Sin embargo, para algunos contaminantes puede haber un problema moderado de salud para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire"
        advertencias = "Los niños y adultos activos, y las personas con enfermedades respiratorias, como el asma, deben limitar el esfuerzo al aire libre prolongado."
        imagen = "moderada.png"
    }
    if (aqi > 100 && aqi <= 150) {
        status = 'Insalubres para grupos sensibles'
        color = '#ff9933'
        implicacion = "Los miembros de grupos sensibles pueden experimentar efectos sobre la salud. No es probable que el público en general se vea afectado."
        advertencias = "Los niños y adultos activos, y las personas con enfermedades respiratorias, como el asma, deben limitar el esfuerzo al aire libre prolongado."
        imagen = "igs.png"
    }
    if (aqi > 150 && aqi <= 200) {
        status = 'Insalubre'
        color = '#cc0033'
        implicacion = "odo el mundo puede comenzar a experimentar efectos sobre la salud; Los miembros de grupos sensibles pueden experimentar efectos más graves para la salud"
        advertencias = "Los niños y adultos activos y las personas con enfermedades respiratorias, como el asma, deben evitar el ejercicio prolongado al aire libre; Todos los demás, especialmente los niños, deben limitar el esfuerzo al aire libre prolongado"
        imagen = "insalubre.png"
    }
    if (aqi > 200 && aqi <= 300) {
        status = 'Muy poco saludable'
        color = '#660099'
        implicacion = "Advertencias sanitarias de condiciones de emergencia. Es más probable que toda la población se vea afectada."
        advertencias = "Los niños y adultos activos, y las personas con enfermedades respiratorias, como el asma, deben evitar todo esfuerzo al aire libre; Todos los demás, especialmente los niños, deben limitar el esfuerzo al aire libre."
        imagen = "pocosaludable.png"
    }
    if (aqi > 300) {
        status = 'Peligroso'
        color = '#7e0023'
        implicacion = "Alerta de salud: todos pueden experimentar efectos más graves para la salud"
        advertencias = "Todos deben evitar todo esfuerzo al aire libre"
        imagen = "peligroso.png"
    }
    return {
        status,
        color,
        imagen,
        implicacion,
        advertencias,
    }
}