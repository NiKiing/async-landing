
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY)
})


$(document).on('scroll', function(){
    $('h3').css("left", Math.max(1000 - 0.85*window.scrollY, 100) + "px") 
})


// API's

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=9'
const API2 = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLa28R7QEiMbk_b2pJGzaqOK_yoLrDpeVV&part=snippet&maxResults=9'

const content = null || document.getElementById('content');
const content1 = null || document.getElementById('content-p');

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '313619bfcamsh6ba49eb5c638d87p1dc55cjsnabd441f85080',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
            <div class="video-item">
                <div class="img-container">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
                </div>
                <span>${video.snippet.title}</span>
            </div>
        </a>
        `).slice(0,9).join('')}  `;
        content.innerHTML = view;
    }catch (error){
        console.log(error);
    }
})();


(async () => {
    try{
        const videos = await fetchData(API2);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
            <div class="video-item">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
                <span>${video.snippet.title}</span>
            </div>
        </a>   
        `).slice(0,9).join('')}  `;
        content1.innerHTML = view;
    }catch (error){
        console.log(error);
    }
})();


