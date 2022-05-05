const plusButton = document.querySelector('#plus');

const pauseButton = document.querySelector('#pause');
let intervalCall;

const minusButton = document.querySelector('#minus');

const likeButton = document.querySelector('#heart');

const submitButton = document.querySelector('#submit');


function timer () {
    function timerCount(){
    let counter = parseInt (document.querySelector('#counter').textContent);
    counter += 1;
    document.querySelector('#counter').textContent = counter;
    }
    intervalCall = setInterval(timerCount, 1000);
    return intervalCall;
}

function pause () {
    if (pauseButton.textContent === ' Pause ') {
        pauseButton.textContent = 'Resume'
        clearInterval(intervalCall)
        plusButton.disabled = true
        minusButton.disabled = true
        likeButton.disabled = true
    } else if (pauseButton.textContent === 'Resume') {
        pauseButton.textContent = ' Pause '
        timer()
        plusButton.disabled = false
        minusButton.disabled = false
        likeButton.disabled = false
    }

}

function minusASecond () {
    let counter = parseInt (document.querySelector('#counter').textContent);
    counter -= 1;
    document.querySelector('#counter').textContent = counter;
}

function plusASecond () {
    let counter = parseInt (document.querySelector('#counter').textContent);
    counter += 1;
    document.querySelector('#counter').textContent = counter;

}

function liker () {
    const appendli = document.createElement('li');
    appendli.textContent = `You have liked ${document.querySelector('#counter').textContent } ❤️.`;
    document.querySelector('.likes').append(appendli)

}

function postComment () {
    document.querySelector('#comment-form').addEventListener('submit', (e) => e.preventDefault(e))
    const AddCommentParagraph = document.createElement('p');
    AddCommentParagraph.textContent = document.querySelector('#comment-input').value
    document.querySelector("#list").append(AddCommentParagraph)
}

document.addEventListener('DOMContentLoaded', timer)

plusButton.addEventListener('click', plusASecond)

pauseButton.addEventListener('click', pause)

minusButton.addEventListener('click', minusASecond)

likeButton.addEventListener('click', liker)

submitButton.addEventListener('click', postComment)
