function handleHome(req, res) {
    renderPage(res, 'home');
}

function handleStudent(req, res) {
    renderPage(res, 'student');
}

module.exports = { handleHome, handleStudent };