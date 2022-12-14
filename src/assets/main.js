const API='https://spotify23.p.rapidapi.com/playlist_tracks/?id=5kCr18BXMTjPLwZUOTBcO7%3Fsi%3De93ab2b4397149b1&offset=0&limit=100';
const content=null || document.getElementById('content');
//var artistNames='';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4998fd032fmshd9f20f007af601cp13e41ajsnfd925a2de40b',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    
    return data;
}

(async () => {
    try{
        const songs=await fetchData(API);
        
    let view =`${songs.tracks.items.map(song =>`         
    <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${song.track.album.images[1].url}" alt="album ${song.track.album.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-black-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${song.track.name} 
            </h3>
            <h5 class="text-sm text-gray-400">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${song.track.artists.map(k=>k.name +' ')}
            </h5>
        </div>
        </div>`).slice((Math.random() * (25 - 0) + 0),(Math.random() * (50 - 25) + 25)).join('')}`;
  content.innerHTML = view;
 
 }
 catch(error){
     console.log(error);
 }
})();

