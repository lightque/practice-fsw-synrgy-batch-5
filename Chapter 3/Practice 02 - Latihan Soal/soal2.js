/*
Nilai ujian mahasiswa dikategorikan sebagai berikut :
● A : 91 - 100
● B : 81 - 90
● C : 71 - 80
● D : 61 - 70
● E : <= 60
Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut
*/

function solution (nilaiUjian) {
    if (nilaiUjian >= 91) {
        return "Nilai Kamu A";
    } else if (nilaiUjian >= 81 && nilaiUjian <= 90) {
        return "Nilai Kamu B";
    } else if (nilaiUjian >= 71 && nilaiUjian <= 80) {
        return "Nilai Kamu C";
    } else if (nilaiUjian >= 61 && nilaiUjian <= 70) {
        return "Nilai Kamu D";
    } else if (nilaiUjian <= 60){
        return "Nilai Kamu E";
    } else {
        return "Tidak Masuk Kategori";
    } 
}

console.log(solution(70));