//Twój kod
const fs = require('fs');

//Zapisz plik...
fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {//Odczyt: ...kiedy skończysz uruchom naszą funkcję callback
    if (err === null) { //Odczyt: Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wyświetlamy zawartość pliku
        console.log('Poprawnie zapisano i odczytano plik.', data);
        let ret = JSON.parse(data)
        let count = 0
        for (i = 0; i < ret.length; i++) {
            count += ret[i]
        }
        console.log(count)

        fs.writeFile('./data/zadanie01/sum.txt', count, err => {
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