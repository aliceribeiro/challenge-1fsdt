function submit() {
    var name1 = document.getElementById("name1");
    var name2 = document.getElementById("name2");
    var name3 = document.getElementById("name3");
    var name4 = document.getElementById("name4");
    var name5 = document.getElementById("name5");
    var description = document.getElementById("description");

    let data = {
        names: [name1.value, name2.value, name3.value, name4.value, name5.value],
        message: description.value
    }

    var xhr = new XMLHttpRequest();

    xhr.open("POST", " https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            alert("Sucesso!");
            console.log(xhr);
        } else {
            alert("Ocorreu um erro, tente novamente");
        }
    };

    xhr.send(JSON.stringify(data));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
});
