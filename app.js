//const imgURL = 'https://image.tmdb.org/t/p/w1280';
//const apiKEY =  '04c35731a5ee918f014970082a0088b1';
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPATH="https://image.tmdb.org/t/p//w1280";
async function getMovies(){
    const resp=await fetch(apiURL);
    const respData=await resp.json();
    console.log(respData);



    respData.results.forEach((movie) => {

        let img =document.createElement("img");
        img.src=imgPATH + movie.poster_path;

        document.body.appendChild(img);
        
    });
} 

getMovies();

