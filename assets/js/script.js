const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

const getFilms = async () => {
    const data = await fetch(BASE_URL);
    const json = await data.json();
   
    for (let i = 0; i < json.length; i++){
        const carousel = document.getElementById('caroulselFilms');
        var div = document.createElement('div');
        carousel.appendChild(div);
        div.className = "carousel-tile";

        var imgFilm = document.createElement('img');
        div.appendChild(imgFilm);
        imgFilm.src = json[i].image;
        imgFilm.className = "imgFilmAPI";
        imgFilm.id = `film${i}`;

        // popup
        const popUp = document.getElementById('popUp');
        popUp.style.display = 'none';
        var idPopUp = document.getElementById(`film${i}`);
        const closeBtn = document.getElementById('closeBtn');

    
        idPopUp.addEventListener('click', function(e){
            popUp.style.display = 'flex';
            var image = document.createElement('img');
            image.src = json[i].image;
            image.className = "imagePopUp"
            popUp.appendChild(image);

            const information = document.createElement('div');
            popUp.appendChild(information);
            information.className = "informationPopUp"

            var titleAPI = json[i].title;
            const title = document.createElement('h3');
            title.className = "titleFilmA";
            information.appendChild(title);
            title.innerHTML = titleAPI;

            var descriptionAPI = json[i].description;
            const description = document.createElement('p');
            description.className = "descriptionFilm";
            information.appendChild(description);
            description.innerHTML = descriptionAPI;

            var buttonClose = document.createElement('button');
            information.appendChild(buttonClose);
            buttonClose.id = 'closeBtn';
            buttonClose.innerHTML = "X";
            
            buttonClose.addEventListener('click', function(e){
                popUp.style.display = 'none';
            })
            
        })
    }
}

getFilms()
 
const outset = document.getElementById("outset");
const news = document.getElementById("news");
const films = document.getElementById("films");
const others = document.getElementById("others");

outset.addEventListener('click', function(e){
    if(outset.classList.contains('presence')){

    }else{
        outset.classList.add('presence');
    }
    news.classList.remove('presence');
    films.classList.remove('presence');
    others.classList.remove('presence');
})

news.addEventListener('click', function (e){
    if(news.classList.contains('presence')){

    }else{
        news.classList.add('presence');
    }
    outset.classList.remove('presence');
    films.classList.remove('presence');
    others.classList.remove('presence');
})

films.addEventListener('click', function (e){
    if(films.classList.contains('presence')){

    }else{
        films.classList.add('presence');
    }
    outset.classList.remove('presence');
    news.classList.remove('presence');
    others.classList.remove('presence');
})

others.addEventListener('click', function (e){
    if(others.classList.contains('presence')){

    }else{
        others.classList.add('presence');
    }
    outset.classList.remove('presence');
    news.classList.remove('presence');
    films.classList.remove('presence');
})

