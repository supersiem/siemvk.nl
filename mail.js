function sendMail() {
    var title = document.getElementById("title").value;
    var bericht = document.getElementById("bericht").value;
    window.location.href = `mailto:siem@siemvk.nl?subject=${title}&body=${bericht}`;
}