var jmlAngkot = 10;
var angkotBeroperasi = 8;

for(var angkot = 1; angkot <= jmlAngkot; angkot++){
    if (angkot <=6){
        console.log('angkot no ' + angkot + ' berjalan baik');
    } else if (angkot === 8){
        console.log('angkot no ' + angkot + ' lembur');
    }else{
    console.log('Angkot No. ' + angkot + ' tidak beroperasi dengan baik');
}   }
