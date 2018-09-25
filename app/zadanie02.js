//Twój kod
const fs = require('fs');

//Odczytaj listę plików i folderów...
fs.readdir('./data/zadanie02', (err, files) => {//...kiedy skończysz uruchom naszą funkcję callback
    if (err === null) { //Sprawdzamy czy obiekt błędu jest null-em - jeżeli tak - wszystko poszło ok
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
        });
    } else {//Jeżeli obiekt błędu nie był null-em, to pojawił się błąd - np. niepoprawna ścieżka
        console.log('Błąd podczas listowania katalogu!', err);
    }
});