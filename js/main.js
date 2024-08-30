function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-cv-btn').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '/cv/Farlyhaydy H.Djalil-CV.pdf';
        link.download = 'Farly_CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    });
});
