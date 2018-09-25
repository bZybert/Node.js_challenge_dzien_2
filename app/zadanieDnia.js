//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {//Odczyt: ...kiedy skończysz uruchom naszą funkcję callback
    if (err === null) { //Odczyt: Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wyświetlamy zawartość pliku
        console.log('Poprawnie zapisano i odczytano plik.', data);

        let trawnik = data.split('').map((el, ind) => {
            if (ind % 2 === 0) {
                return el.toUpperCase()
            } else {
                return el.toLowerCase()
            }
        }).join('')
        // console.log(trawnik)

        fs.writeFile('./data/zadanieDnia/test1.txt', trawnik, err => {
            if (err === null) {
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });

    } else { //Odczyt: Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. plik nie istniał
        console.log('Błąd podczas odczytu pliku!', err);
    }
});

/**
 * const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf-8', (err, data) => {
   if (err !== null) {
       console.log('There was an error reading the file.');
   } else {
       console.log('File read success');
       let modifiedText = data.split('').map((sign, index) => index % 2 === 0 ? sign.toUpperCase() : sign.toLowerCase()).join('');
       fs.writeFile(fileName, modifiedText, err => {
           if (err !== null) {
               console.log(`There was problem writing a file: ${fileName}`);
           } else {
               console.log('File modified');
           }
       });
   }
});
 */
