function loadCars() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        console.log("Ошибка загрузки данных: " + xhr.status + ' ' + xhr.statusText);
    }
    else {
        alert("Данные загружены, чтобы проверить их откройте консоль!");
        console.log(xhr.responseText);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("loadButton");
    if (button) {
        button.addEventListener("click", loadCars);
    }
});
