document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);


function getText() {
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML = (`<p>${data}</p>`);
        })
        .catch(function (error) {
            console.log(error);
        })
}


function getJSON() {
    fetch('posts.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let output = '';
            data.forEach((post) => {
                output += `<p>${post.title}</p>`
            });
            document.getElementById('output').innerHTML = output
        })
}

function getExternal() {
    fetch('http://api.github.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            let output = '';
            data.forEach((user) => {
                output += `<p>${user.login}</p>`
            });
            document.getElementById('output').innerHTML = output
        })
}
