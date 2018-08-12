// Grab button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // let number = document.getElementById('number').value;
    let number = document.querySelector('input[type="number"]').value;
    console.log(number);



    e.preventDefault();

}