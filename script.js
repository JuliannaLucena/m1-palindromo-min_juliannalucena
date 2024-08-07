function isPalindrome(str) {
    
    const textoOriginal = str.toLowerCase().replace(/[^a-z0-9]/g, '');    

  
    let textoReverso = "";

    for (let i = textoOriginal.length - 1; i >= 0; i--) {
        textoReverso += textoOriginal[i];
    }

   
    return textoOriginal === textoReverso;
}


function arrayMaxMin(arr) {
    let maiorNum = arr[0];
    let menorNum = arr[0];

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > maiorNum) {
            maiorNum = arr[i];
        }
        if (arr[i] < menorNum) {
            menorNum = arr[i];
        }
    }
    return [menorNum, maiorNum];
}

