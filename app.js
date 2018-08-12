// Grab button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // let number = document.getElementById('number').value;
    let number = document.querySelector('input[type="number"]').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function() {
        if (this.status === 200) {
            let response = this.responseText;
            console.log(response);

        }
    }




    xhr.send();

    e.preventDefault();

}