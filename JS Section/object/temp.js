var temperature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 30 },
    { district: "pkd", temprature: 31 },

]
var wheather = {

}
for (let data of temperature) {
 let district=data["district"]
 let temp=data["temprature"]

 if(!(district in wheather)){
     wheather[district]=temp;
 }
 else{
     let old_temp=wheather[district];
     if(old_temp<temp){
         wheather[district]=temp
     }
     else{
         weather[district]=old_temp
     }
 }
}
