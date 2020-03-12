const navbtn = document.getElementsByClassName('nav-button');
const navbar=document.getElementById('nav-bar')
const func=()=>{
    if(navbar.className=='nothing'){
           navbar.className='nav-bar'
    }
    else{
        navbar.className='nothing'
    }
}

