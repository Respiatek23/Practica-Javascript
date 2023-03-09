// JavaScript source code
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const search =function(event) {
    
    fetch('https://api.thecatapi.com/v1/images/search',requestOptions)
        
        .then(response=>response.json())
        .then(data => {
            
            const imagen = document.createElement('img');
            imagen.setAttribute('src', data[0].url);
            imagen.setAttribute('style', 'width:100%;height:98%;');
            imagen.setAttribute('id', 'photo');

            const active = document.getElementsByClassName('carousel-item active');

            for (let i = 1; i < active[0].childElementCount; i++) {

                if (active[0].childNodes[i].nodeName === 'IMG')
                {
                    const Oldimg = active[0].childNodes[i];
                    active[0].replaceChild(imagen,Oldimg);
                    return;
                }
            }
        }

        )
        .catch(error => console.log('error', error));
}
