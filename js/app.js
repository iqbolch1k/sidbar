const myBars = document.getElementById('myClick')
const myHeader = document.getElementById('header');
const body = document.body
myBars.addEventListener('click', () => {
    // alert('Click');
    myHeader.style.display = 'none';
    body.style.gridTemplateColumns = '100%'
});

// // if (myHeader.style.display == 'none') {
//     myBars.addEventListener('dbclick', () => {
//         myHeader.style.display ='block';
//     });
// // }