

function renderBrews(brewData) {
    console.log("%o", brewData);

    const targetDivEl = document.getElementById('brewTarget');

    brewData.brews.reverse().forEach(i => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          <h2>#${i.batch} ${i.name}</h2>
          <p>Brew date: ${i["brew-date"]}</p>
          <p>Style: ${i.style}</p>
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