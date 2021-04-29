function setupSearch(autoCompleteKeywords){
    const autoCompleteDiv = document.getElementById('myInputautocomplete-list');

    autoCompleteKeywords.forEach(keyword =>{
        autoCompleteDiv.insertAdjacentHTML('beforeend',` <div class="mx-1 my-2">${keyword}</div>`)
    });
}


function setupBanner(bannerImages){
    const bannerIndicator = document.getElementById('carousel-indicators');
    const bannerInner = document.getElementById('carousel-inner');

    bannerImages.forEach(({img},index) =>{
       if(index == 0){
            bannerIndicator.insertAdjacentHTML('afterbegin',`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" style="width: 10px; height: 10px; border-radius: 50%;" class="carousel-btn active" aria-current="true" aria-label="Slide ${index+1}"></button>`) 
            bannerInner.insertAdjacentHTML('beforeend',`<div class="carousel-item active">
            <img src="${img}" height="400px" width="1040px" class="d-block w-100">
          </div>`)
        }
        else{
            bannerIndicator.insertAdjacentHTML('afterbegin',`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" style="width: 10px; height: 10px; border-radius: 50%;" class="carousel-btn" aria-label="Slide ${index+1}"></button>`) 
            bannerInner.insertAdjacentHTML('beforeend',`<div class="carousel-item">
            <img src="${img}" height="400px" width="1040px" class="d-block w-100">
          </div>`)
        }
    });
}

function setupTags(tags){
    const tagDiv = document.getElementById('tags');

    tags.forEach(tag =>{
            tagDiv.insertAdjacentHTML('beforeend',`<a href="${tag.href}"><button class="btn tag me-4">${tag.text}</button></a>`)
    });
}

function setupGameCards(news){
    const dailyNewsDiv = document.getElementById('daily_news');

    news.forEach(item =>{
        dailyNewsDiv.insertAdjacentHTML('beforeend',`<div class="hover-img position-relative overflow-hidden">
        <a href="${item.href}">
        <img src="${item.logo}" class="thumbnail">
            <div class="hover-text text-center fw-bold py-1 game-card-text">${item.title}</div>
        </a>
        </div>`)
    }); 
}

function setupReviews(reviews){
    const reviewsDiv = document.getElementById('reviews');

    reviews.forEach(review =>{
        reviewsDiv.insertAdjacentHTML('beforeend',`
        <div class="review-card bg-white d-flex flex-nowrap flex-row position-relative">
        <div class="d-flex flex-column justify-content-center review-card-section-1 overflow-auto">
            <div class="review-card-title d-flex flex-row justify-content-start mb-2">
                <img class="review-profile-pic me-1" src="${review.avatar}">
                <span><span class="review-card-bold">${review.nickname}</span> <span class="review-card-muted">Reviews </span><span class="review-card-bold">${review.title}</span> </span>
            </div>
            <div class="review-star-rating d-flex justify-content-start mb-2">
                <img class="fa-star" src =${Math.round(review.rating) >=1 ? "images/icon/icon-star-selected.png" : "/images/icon/icon-star-normal.png"}></img>
                <img class="fa-star" src =${Math.round(review.rating) >=2 ? "images/icon/icon-star-selected.png" : "/images/icon/icon-star-normal.png"}></img>
                <img class="fa-star" src =${Math.round(review.rating) >=3 ? "images/icon/icon-star-selected.png" : "/images/icon/icon-star-normal.png"}></img>
                <img class="fa-star" src =${Math.round(review.rating) >=4 ? "images/icon/icon-star-selected.png" : "/images/icon/icon-star-normal.png"}></img>
                <img class="fa-star" src =${Math.round(review.rating) >=5 ? "images/icon/icon-star-selected.png" : "/images/icon/icon-star-normal.png"}></img>
            </div>
            <div class="review-card-description" style="width:206px; height:64px; text-overflow: ellipsis;">
                <p>${review.review}</p>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-end review-card-section-2 position-absolute" style="right: 0; bottom: 0;">
            <img class="review-thumbnail" src="${review.logo}">
        </div>
    </div>
        `)
    }); 
}

function setupVideos(videos){
    const videosDiv = document.getElementById('videos');

    videos.forEach(video =>{
        videosDiv.insertAdjacentHTML('beforeend',`
        <a href="${video.href}"><img class="rounded-2 video-img" src="${video.img}"></a>
        `)
    });
}

function setup(){
    setupSearch(preset["search_keyword"])
    setupBanner( preset["banner"])
    setupTags( preset["tag"])
    setupGameCards(preset["daily_news"]["list"])
    setupReviews(preset["review"]["list"])
    setupVideos(preset["video"]["list"])
}

setup()