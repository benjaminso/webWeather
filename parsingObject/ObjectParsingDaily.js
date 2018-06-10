function DailyData(time,summary,icon,sunriseTime,sunsetTime,moonPhase,precipIntensity,precipIntensityMax,precipIntensityMaxTime,precipProbability,precipType,temperatureHigh,temperatureHighTime,temperatureLow,temperatureLowTime,apparentTemperatureHigh,apparentTemperatureHighTime,apparentTemperatureLow,apparentTemperatureLowTime,dewPoint,humidity,pressure,windSpeed,windGust,windGustTime,windBearing,cloudCover,uvIndex,uvIndexTime,visibility,ozone,temperatureMin,temperatureMinTime,temperatureMax,temperatureMaxTime,apparentTemperatureMin,apparentTemperatureMinTime,apparentTemperatureMax,apparentTemperatureMaxTime){
    this.time=time;
    this.summary=summary;
    this.icon=icon;
    this.sunriseTime=sunriseTime;
    this.sunsetTime=sunsetTime;
    this.moonPhase=moonPhase;
    this.precipIntensity=precipIntensity;
    this.precipIntensityMax=precipIntensityMax;
    this.temperatureHigh=temperatureHigh;
    this.temperatureLow=temperatureLow;
    this.temperatureHighTime=temperatureHighTime;
    this.temperatureLowTime=temperatureLowTime;
    this.temperatureMin=temperatureMin;
}
DailyData.prototype.valueOf=function(){
    return this.temperatureHigh;
};
DailyData.prototype.valueOf=function(){
    return this.temperatureHighTime;
};
DailyData.prototype.valueOf=function(){
    return this.temperatureLow;
};
DailyData.prototype.valueOf=function(){
    return this.temperatureLowTime;
};
DailyData.prototype.valueOf=function(){
    return this.temperatureMin;
};
DailyData.prototype.valueOf=function(){
    return this.precipIntensity;
};
DailyData.prototype.valueOf=function(){
    return this.precipIntensityMax;
};
DailyData.prototype.valueOf=function(){
    return this.time;
};
DailyData.prototype.valueOf=function(){
    return this.summary;
};
DailyData.prototype.valueOf=function(){
    return this.icon;
};
DailyData.prototype.valueOf=function(){
    return this.sunsetTime;
};
DailyData.prototype.valueOf=function(){
    return this.sunriseTime;
};
DailyData.prototype.valueOf=function(){
    return this.moonPhase;
};