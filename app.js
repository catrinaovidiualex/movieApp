//const imgURL = 'https://image.tmdb.org/t/p/w1280';
//const apiKEY =  '04c35731a5ee918f014970082a0088b1';
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPATH="https://image.tmdb.org/t/p//w1280";
let searchAPI="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let main=document.getElementById("main");
let form=document.getElementById("form");
let search=document.getElementsByClassName("search");

getMovies(apiURL);




async function getMovies(url){
    const resp=await fetch(url);
    const respData=await resp.json();
    /*console.log(respData);*/

   /* respData.results.forEach((movie) => {

        let img =document.createElement("img");
        img.src=imgPATH + movie.poster_path;

        document.body.appendChild(img);
        
    });

    respData.results.forEach((movie) => {

        const {poster_path,title,vote_average}=movie;
        let movieElement=document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML=`
        <img src="${imgPATH+poster_path}" 
        alt="${title}"/>
        <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>
        `;

        main.appendChild(movieElement);
        
    });*/
    showMovies(respData.results);

   
} 


function showMovies(movies){
   
    // golim main-ul
    main.innerHTML='';
    movies.forEach((movie) => {

        const {poster_path,title,vote_average}=movie;
        let movieElement=document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML=`
        <img src="${imgPATH+poster_path}" 
        alt="${title}"/>
        <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>
        `;

        main.appendChild(movieElement);
    });

 
}



form.addEventListener('submit',(e) =>{
e.preventDefault();
let searchTerm=search.value;

if(searchTerm){

  getMovies(searchAPI+searchTerm);

    search.value='';

}




});
