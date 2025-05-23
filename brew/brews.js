

function renderBrews(brewData) {
    console.log("%o", brewData);

    const targetDivEl = document.getElementById('brewTarget');

    brewData.brews.reverse().forEach(i => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          <h2>#${i.batch} ${i.name}</h2>
          <p>Style: ${i.style}</p>
          <p>Brew date: ${i.brewDate}</p>
          <p>Comments: ${i.comments}</p>
          <p>AbV: ${i.abv}%</p>
          <p>Color: ${i.ebc} EBC</p>
          <p>Bitterness: ${i.ibu} IBU</p>
          <p>Hops: ${i.hops ? i.hops.join(", ") : ""}</p>
          <p>Original gravity: ${i.og}</p>
          <p>Final gravity: ${i.fg}</p>
        `;
        targetDivEl.appendChild(itemDiv);

    })

}


function loadBrews() {
  fetch('brews.json')
   .then(response => response.json())
   .then(renderBrews)
   .catch(error => console.error('Error:', error));
}

window.addEventListener('load', loadBrews);
