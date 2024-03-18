
function renderPage(studentData){

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Profile</title>
    </head>
    <body>
        <h1>Student profile</h1>
        <p>Numer albumu: ${studentData.code}</p>
        <p>Imię: ${studentData.name}</p>
        <p>Nazwisko: ${studentData.lastname}</p>
        <p>Płeć: ${studentData.gender}</p>
        <p>Wiek: ${studentData.age}</p>
        <p>Kierunek: ${studentData.studyField}</p>
    </body>
    </html>
}
  
    