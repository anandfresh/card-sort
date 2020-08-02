function generate(action) {
    let cardValue = [6,3,7,5,8,4,2,9,1];
    if(action==='sort'){
      cardValue = cardValue.sort();
    }
    let cardItem = '';
     cardValue.forEach(element => {
       cardItem += '<div class="card bg-color'+element+'">'+element+'</div>';
      });
    document.getElementById('cards').innerHTML=cardItem;
  }