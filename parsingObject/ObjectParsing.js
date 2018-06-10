function MinuteData(time, precipIntensity,precipProbability){
    this.time=time;
    this.precipIntensity = precipIntensity;
    this.precipProbability=precipProbability;
}

MinuteData.prototype.valueOf = function(){
    return this.time;
};

MinuteData.prototype.valueOf = function(){
    return this.precipIntensity;
};
MinuteData.prototype.valueOf = function(){
        return this.precipProbability;
};