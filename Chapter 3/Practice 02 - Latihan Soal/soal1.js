/*
Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.

Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo  akun Yudi setelah melakukan transaksi!
*/

function solution(cashWithdraw, bankSavings) {
    if (cashWithdraw % 5 == 0 && bankSavings > cashWithdraw) {
        calculatedWithdraw = (bankSavings - cashWithdraw) - 0.5;
        return calculatedWithdraw;
    } else if (bankSavings < cashWithdraw){
        return "Saldo Tidak Mencukupi";
    } else {
        return "Penarikan Cash Gagal";
    }
}

console.log(solution(40, 200));