function renderPageHome() {

    let htmlTemplate = `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>"home.js"</title>
        </head>
        <body>
            <div>
                <input type="text" placeholder="imie" name="name"> 
                <input type="text" placeholder="nazwisko" name="lastname"> 
                <input type="number" placeholder="wiek" name="age"> 
                <select placeholder="plec" name="gender">
                    <option> Male </option>
                    <option> Female </option>
                    <option> other </option>
                </select> 
                <input type="number" placeholder="nr indeksu" name="code"> 
                <input type="text" placeholder="nr indeksu" name="studyField">
            </div>
        </body>
        </html>
    `;

    return htmlTemplate;
}