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
        imagen = require('../img/nubesf.png')
    }
    if (aqi > 50 && aqi <= 100) {
        status = 'Moderado'
        color = '#ffde33'
        implicacion = "La calidad del aire es aceptable; Sin embargo, para algunos contaminantes puede haber un problema moderado de salud para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire"
        advertencias = "Los niños y adultos activos, y las personas con enfermedades respiratorias, como el asma, deben limitar el esfuerzo al aire libre prolongado."
        imagen = require('../img/logintres.png')
    }
    if (aqi > 100 && aqi <= 150) {
        status = 'Insalubres para grupos sensibles'
        color = '#ff9933'
        implicacion = "Los miembros de grupos sensibles pueden experimentar efectos sobre la salud. No es probable que el público en general se vea afectado."
        advertencias = "Los niños y adultos activos, y las personas con enfermedades respiratorias, como el asma, deben limitar el esfuerzo al aire libre prolongado."
        imagen = require('../img/logintres.png')
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
        imagen = require('../img/logintres.png')
    }
    if (aqi > 300) {
        status = 'Peligroso'
        color = '#7e0023'
        implicacion = "Alerta de salud: todos pueden experimentar efectos más graves para la salud"
        advertencias = "Todos deben evitar todo esfuerzo al aire libre"
        imagen = require('../img/logintres.png')
    }
    return {
        status,
        color,
        imagen,
        implicacion,
        advertencias,
    }
}

export function getStatusIAQI(level, sustancia) {
    var status = ''
    var color = ""
    var name = ""

    switch (sustancia) {
        case 'co':
            name = "Cobalto - Co"
            color = "#4db748"
            status = "Bueno"


            break;
        case 'h':
            name = "Hidrógeno - H"
             color = "#4db748"
                status = "Bueno"
            break;
        case 'no2':
            name = "Dióxido de nitrógeno - NO2"
             color = "#4db748"
                status = "Bueno"
            break;
        case 'o3':
            name = "Ozono- O3"
            if (level > 0 && level < 50) {
                color = "#4db748"
                status = "Bueno"
            }
            if (level > 50 && level < 100) {
                color = "#f9a61a"
                status = "Moderado"
            }
            if (level >100) {
                color = "#ed1b24"
                status = "Alto"
            }
            break;
        case 'p':
            name = "Fósforo - P"
            color = "#4db748"
            status = "Bueno"
            break;
        case 'pm10':
            name = "PM10"
             if (level > 0 && level < 40) {
                color = "#4db748"
                status = "Bueno"
            }
            if (level > 40 && level < 100) {
                color = "#f9a61a"
                status = "Moderado"
            }
            if (level >100) {
                color = "#ed1b24"
                status = "Alto"
            }
            break;
        case 'pm25':
            name = "PM25"
            if (level > 0 && level < 40) {
                color = "#4db748"
                status = "Bueno"
            }
            if (level > 40 && level < 100) {
                color = "#f9a61a"
                status = "Moderado"
            }
            if (level >100) {
                color = "#ed1b24"
                status = "Alto"
            }
            break;
        case 'so2':
            name = "Dióxido de azufre - SO2"
            color = "#4db748"
                status = "Bueno"
            break;

        case 't':
            name = "t"
            color = "#4db748"
            status = "Bueno"
            break;
        case 'w':
            name = "w"
            color = "#4db748"
            status = "Bueno"
            break;
        case 'wd':
            name = "wd"
            color = "#4db748"
            status = "Bueno"
            break;

        default:
            break;
    }
    return {
        name,
        status,
        color
    }

}