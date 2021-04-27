const searchBarOnFocus =() =>{
        const x =document
        .getElementById('form1')

    x.addEventListener('focusin',(e)=>{
        x.setAttribute('placeholder','Discover superb games');
        document.getElementById('myInputautocomplete-list').style.display= 'inherit';
    })

    };

const searchBarOnFocusOut = () =>{
    const x = document
    .getElementById('form1')

    x.addEventListener('focusout',(e)=>{
        x.setAttribute('placeholder','Search');
        document.getElementById('myInputautocomplete-list').style.display= 'none';
    })

}

searchBarOnFocus();
searchBarOnFocusOut();