const date = document.querySelector('.date');
const output = document.querySelector('.output');
const desc = document.querySelector('.desc');


fetch('https://api.nasa.gov/planetary/apod?api_key=0arOZdWhj2JAlFUN4Jj3pIjLifwfgBBGAJ4yH7tF')
.then(res => res.json())
.then(data => {
    console.log(data);

    date.textContent = data.date;
    output.innerHTML = `<img src="${data.url}" alt="">`
    desc.textContent = data.explanation
})