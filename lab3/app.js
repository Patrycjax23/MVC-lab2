const http=require('http');
const PORT=3000;
const { handleHome, handleStudent } = require('./routes');
function requestListener(req,res){
    process.exit();
}
function POST(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
}
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/' || url === '/home') {
        renderPage(res, 'home');
    } else if (url === '/student') {
        renderPage(res, 'student');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

function listeningListener()
{
    console.log(`Server is running on http://localhost:${PORT}`);
}
req.on('end', () => {
    const formData = qs.parse(body);
    console.log('Form data:', formData);
const pharsebody=Buffer.concat(body).toString();
    const filePath = path.join(__dirname, `42887.txt`);
    fs.writeFile(filePath, JSON.stringify(formData, null, 4), (err) => {
        if (err) {
            console.error('Error saving data to file:', err);
        } else {
            console.log('Data saved to file:', filePath);
            res.writeHead(302, { 'Location': '/student' });
            res.end(JSON.stringify(formData));
        }
    });    });
