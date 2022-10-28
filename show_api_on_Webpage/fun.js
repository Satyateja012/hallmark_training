fetch('https://inshorts.deta.dev/news?category=science')
.then(result => result.json())
.then(res =>{ console.log(res.data)
res.data.map(item=> showArticle(item))
})



function showArticle(article){
    let htmlstr=`
    <div class="card">
            <div> <h2 class="title">${article.title}</h2>
            <p class="content">${article.content}</p></div>
         <div class='image'><img src = "${article.imageUrl}"alt='pic'/> </div>
    </div>
    
     `;
     document.getElementsByClassName('main')[0].innerHTML +=htmlstr
// document.write(htmlstr)
}

