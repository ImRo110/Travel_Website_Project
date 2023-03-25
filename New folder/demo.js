

function myFunction() {
    const x= document.getElementById("Product");
    // console.log(x.value)
    const input = x.value;
    document.getElementById(input).scrollIntoView({behavior: 'smooth'});
}

// var x = document.getElementsByClassName("menuIcon");
// var y = document.getElementsByClassName("closeIcon");
var z = document.getElementById("myLinks");

function toggle() {
    const x = document.querySelector(".menuIcon");
    const y = document.querySelector(".closeIcon");
    // const z = document.getElementById("myLinks");
    const z = document.querySelector(".header-links");
    // var z = document.getElementById("myLinks");
    // console.log(x.style.display);
    if (x.style.display === 'block' || window.innerWidth>960){
    x.style.display = 'none';
    y.style.display = 'block';
    z.style.display = 'flex';
    z.style.transform = 'translateY(0%)';
    }
    else{
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';

    }
    // document.getElementById("myLinks").style.display = 'block';

}







// var mybutton = document.getElementById('TOP'); Should be declared inside function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById('TOP');
    if (document.documentElement.scrollTop > 100) 
    {
      mybutton.style.display = 'block';
    } 
    else 
    {
      mybutton.style.display = 'none';
    }
}
function topFunction() {
    document.getElementById("Discover").scrollIntoView({behavior: 'smooth'});
}

// function myFunction2() {
//     document.getElementById("Discover").scrollIntoView({behavior: 'smooth'});
// }
// setTimeout(myFunction2, 3000);
// myFunction2();
// catchVideo()
//         .then(response => {
//           console.log('Successfully fetched');
//         })
//         .catch(error => {
//           console.log('error!');
//           console.error(error);
//         });

 async function myFunction2(){     
        const response = await fetch('jio_logo_blue.png');
        const blob = await response.blob();
        document.getElementById('jio_logo').src = URL.createObjectURL(blob);
        document.getElementById('jio_logo').width = 71;
        document.getElementById('jio_logo').height = 70;
        setTimeout(myFunction3, 2000);
    }
setInterval(myFunction2, 4000);
    async function myFunction3(){     
        const response = await fetch('jio_red.svg');
        const blob = await response.blob();
        document.getElementById('jio_logo').src = URL.createObjectURL(blob);
    }


function getImage(){
        url = "https://dog.ceo/api/breeds/image/random";
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            document.getElementById("LastImage").src = data.message;
        })
    }

getImage();