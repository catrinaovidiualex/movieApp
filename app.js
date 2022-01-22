//const imgURL = 'https://image.tmdb.org/t/p/w1280';
//const apiKEY =  '04c35731a5ee918f014970082a0088b1';
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPATH="https://image.tmdb.org/t/p//w1280";
let searchAPI="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let main=document.getElementById("main");
let form=document.getElementById("form");
let search=document.getElementById("search");

getMovies(apiURL);




async function getMovies(url){
    const resp=await fetch(url);
    const respData=await resp.json();
    console.log(respData);

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
        

        if(poster_path===null){

            movieElement.innerHTML=`
            <img src="../img/notFoundPic.jpg" 
            alt="${title}"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            `;
    

        }else{
            movieElement.innerHTML=`
        <img src="${imgPATH+poster_path}" 
        alt="${title}"/>
        <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>
        `;

        }

        main.appendChild(movieElement);
    });

 
}



form.addEventListener('submit',(e) =>{
e.preventDefault();
let searchTerm=search.value;

if(searchTerm){

  getMovies(searchAPI + searchTerm);

    search.value="";

}

function pagination(arr,pag,nrMovie){
    let newMovies=[];
    for(let i=(pag-1)*nrMovie;i<pag*nrCard;i++){
        newMovies.push(arr[i]);
    }
    return newMovies;

}

function setMovies(arr,pageNumber){


    if(window.innerWidth<320){

             
        let x=pagination(arr,pageNumber,4);
        showMovies(x);

        /*generatePageButtons((arr.length+1)/4);*/



   }else if(window.innerWidth>=320 && window.innerWidth<720){

        let x=pagination(arr,pageNumber,8);
        showMovies(x);

        /*generatePageButtons((arr.length+1)/8);*/
   }

   else if(window.innerWidth>=720 && window.innerWidth<920){

       let x=pagination(arr,pageNumber,12);
       showMovies(x);
       /*generatePageButtons((arr.length+1)/12);*/
   }
   else if(window.innerWidth>=920){
       let x=pagination(arr,pageNumber,12);
       showMovies(x);
       /*generatePageButtons((arr.length+1)/12);*/
   }

}

function movieButtons(numar){
    
}



});
