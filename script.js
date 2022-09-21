

function lerDados() {
    var nome = document.querySelector('#nome_livro').value;
    console.log(nome);

    var xhttp = new XMLHttpRequest();


    xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + nome, false);
    xhttp.send();
    var livros = JSON.parse(xhttp.responseText);
    console.log(livros);
    for (var i = 0; i <= livros.items.length; i++) {
        var item = livros.items[i];
        //if (item.volumeInfo.language == "pt-BR") {
        document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title + " " + item.volumeInfo.language + "<br>";

        //}

    }

}

