function darkSkyWeather(){
    var timezone;
    currently = new Currently();// single variable
    minutely = new Minutely();// single variables, and array
    hourly = new Hourly();//single variables and array
    daily = new Daily();//single variables and array
    
    Object.defineProperty(this,"timezone",{
        get: function(){
            return timezone;
        },
        set: function(val){
            timezone = val;
        }
    });

    Object.defineProperty(currently,"currently",{
        set: function(objectVal){
            currently = objectVal;
        },
        get: function(){
            return currently;
        }
    });

    Object.defineProperty(minutely,"minutely",{
        set: function(objectVal){
            minutely = objectVal;
        },
        get: function(){
            return minutely;
        }
    });
    Object.defineProperty(hourly,"hourly",{
        set: function(objectVal){
            hourly = objectVal;
        },
        get: function(){
            return hourly;
        }
    });
    Object.defineProperty(daily,"currently",{
        set: function(objectVal){
            daily = objectVal;
        },
        get: function(){
            return daily;
        }
    });
}
function Currently(){
    var time,summary, icon, nearestStormDistance,
            nearestStormBearing, precipIntensity,
            precipProbability,temperature,apparentTemperature,
            dewPoint,humidity,pressure,windSpeed,windGust,
            windBearing,cloudCover,uvIndex,visibility,ozone;
/*     
    
    
    
            Object.defineProperty(this,"nearestStormBearing",{
        get: function(){
            return nearestStormBearing;
        },
        set: function(val){
            nearestStormBearing = val;
        }
    });       
    Object.defineProperty(this,"time",{
        get: function(){
            return time;
        },
        set: function(val){
            time = val;
        }
    });
    Object.defineProperty(this,"summary",{
        get: function(){
            return summary;
        },
        set: function(val){
            summary = val;
        }
    });

    Object.defineProperty(this,"icon",{
        get: function(){
            return icon;
        },
        set: function(val){
            icon = val;
        }
    });
    Object.defineProperty(this,"nearestStormDistance",{
        get: function(){
            return nearestStormDistance;
        },
        set: function(val){
            nearestStormDistance = val;
        }
    }); */
    

}
function Minutely(){
    var summary, icon;
    data = new DataMinutely();//an array
}
function DataMinutely(){
    var time, precipIntensity, precipProbability;
}
function Hourly(){
    var summary,icon;
    data = new DataHourly();//array
}
function DataHourly(){
    var time, summary, icon, precipIntensity, precipProbability, temperature, apparentTemperature, dewPoint, humidity, pressure, windSpeed, windGust,windBearing,cloudCover,uvIndex,visibility,ozone;
}
function Daily(){
    var summary, icon;
    data = new DataDaily();
}
function DataDaily(){
    var time,summary,icon,sunriseTime,sunsetTime,moonPhase,precipIntensity,precipIntensityMax,precipIntensityMaxTime,precipProbability,precipType,temperatureHigh,temperatureHighTime,temperatureLow,temperatureLowTime,apparentTemperatureHigh,apparentTemperatureHighTime,apparentTemperatureLow,apparentTemperatureLowTime,dewPointhumidity,pressure,windSpeed,windGust,windGustTime,windBearing,cloudCover,uvIndex,uvIndexTime,visibility,ozone,temperatureMin,temperatureMinTime,temperatureMax,temperatureMaxTime,apparentTemperatureMin,apparentTemperatureMinTime,apparentTemperatureMax,apparentTemperatureMaxTime;
}


