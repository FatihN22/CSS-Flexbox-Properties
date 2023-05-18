
// const cards = document.getElementById('cards');
// const selector = document.querySelectorAll('.slct')

// selector.forEach((select) =>{
//     select.addEventListener('change', () =>{
//         cards.style.flexDirection = select.value;
//         cards.style.justifyContent = select.value;
//         cards.style.alignItems = select.value;
//     })
// })

const cards = document.getElementById('cards');
const selectFlex = document.getElementById("flex-d");
const selectJustify = document.getElementById("justify");
const selectAlign = document.getElementById("align");

cards.style.transition = 'flex 350ms'
selectFlex.addEventListener('change', () => {
    cards.style.flexDirection = selectFlex.value;
    if(cards.style.flexDirection === 'column'){
        cards.style.height = '100%'
    } else if(cards.style.flexDirection === 'column-reverse'){
        cards.style.height = '100%'
    } else{
        cards.style.height = '60vh'
    }
});
selectJustify.addEventListener('change', () => {
    cards.style.justifyContent = selectJustify.value;
});
selectAlign.addEventListener('change', () => {
    cards.style.alignItems = selectAlign.value;
});


   



