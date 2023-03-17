const loadData = () =>{
    const url = `./milestone-7/milestone.json`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTitle(data.data))
}
const displayTitle = data =>{
    const container = document.getElementById('aside-info');
    data.outline.forEach(singleItem =>{
        container.innerHTML += `
        <li onclick="loadDetails('${singleItem.id}')"><a><i class="fa-solid fa-circle-arrow-right"></i>${singleItem.name}</a></li>
    `;
    });
}
const loadDetails = id =>{
    const url = `./milestone-7/topic-${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => detailsDisplay(data.data))
}
const detailsDisplay = details =>{
    // console.log(details)
    const container = document.getElementById("milestone-content");
    container.textContent = '';
    const {creator, date, name, describe, info} = details;
    container.innerHTML += `
    <div class="flex justify-between p-2">
    <p>${creator}</p>
    <p>${date}</p>
    </div>
    <hr>
    <div class="p-2">
    <h2 class="sidebar-title">${name}</h2>
    <p>${info}</p>
    </br>
    <p>${describe}</p>
    </div>
    `;
}
loadData()