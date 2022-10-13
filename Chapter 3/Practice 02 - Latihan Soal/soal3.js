/*
Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()
*/

function solution(ipInet) {
    return ipInet.replace(/\./g,'()');
}

console.log(solution("192.168.0.5"));