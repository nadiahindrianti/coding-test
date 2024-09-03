function angka3(arr, angka) {
    for (let i=0; i < arr.lenght; i++) {
        if (arr[i] === angka) {
            return arr[i]
        }
    }

    return null
}

const array = [8, 3, 9, 2, 5]
const hasilingin = 3;
const hasil = angka3(array, hasilingin);

console.log(hasil)
