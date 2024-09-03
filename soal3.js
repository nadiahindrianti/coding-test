const array = [8, 3, 9, 2, 5];


const input = prompt("Masukkan angka yang ingin dicari:");


const angkaDicari = Number(input);


if (!isNaN(angkaDicari)) {
    
    var ditemukan = false;

    
    for (var i = 0; i < array.length; i++) {
        if (array[i] === angkaDicari) {
            ditemukan = true;
            break; 
        }
    }

   
    console.log(ditemukan ? 'true' : 'false'); 
} else {
    console.log('Input harus berupa angka.'); 
}