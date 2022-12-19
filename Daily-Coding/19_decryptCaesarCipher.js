//? [decryptCaesarCipher] Daily Coding_no.19
//TODO <문제 설명>
//TODO 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
//TODO 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키
//TODO secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다.
//TODO 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

//! <제한 사항>
//! 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
//! 공백은 그대로 두어야 합니다.

//* <입출력 예>
//* 'hello'를 secret 3으로 암호화한 경우: 'khoor'
//* 'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'

//::::

//? [if문 사용]

function decryptCaesarCipher1(str, secret) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return [...str].map((el) => {
        if (el === ' ') {
            return ' ';
        } else if (alphabet.indexOf(el) - secret >= 0) {
            return alphabet[alphabet.indexOf(el) - secret];
        } else {
            return alphabet[alphabet.indexOf(el) + 26 - secret];
        }
    }).join('')
}
console.log(decryptCaesarCipher1('khoor', 3)); // hello

//-------------------------------------------------------------------------------------------

//? [삼항연산자 사용]

function decryptCaesarCipher2(str, secret) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return [...str].map((el) => {
        if (el === ' ') {
            return ' ';
        } else {
            return (alphabet.indexOf(el) - secret >= 0)
                ? alphabet[alphabet.indexOf(el) - secret]
                : alphabet[alphabet.indexOf(el) + 26 - secret];
        }
    }).join('')
}
console.log(decryptCaesarCipher2('zruog', 3)); // world

//-------------------------------------------------------------------------------------------