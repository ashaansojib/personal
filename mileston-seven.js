const loadData = () =>{
    const url = `./milestone-7/milestone.json`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTitle(data.data))
    // interview data fetching
    fetch('./interview.json')
    .then(res => res.json())
    .then(data => displayQuestion(data.interView))
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
    const list = details.checkList;
    const checkList = list?.map(list => `<li class="py-2"><i class="fa-solid fa-share"></i> ${list}</li>`).join(' ');
    const {creator, date, name, describe, info} = details;
    container.innerHTML += `
    <div class="flex justify-between p-2">
    <p>${creator}</p>
    <p>${date}</p>
    </div>
    <hr>
    <div class="p-2">
    <h2 class="sidebar-title">${name ? name : ''}</h2>
    <p>${info ? info : ''}</p>
    <ol>${checkList ?checkList : ''}</ol>
    </br>
    <p>${describe ? describe : ''}</p>
    </div>
    `;
}
// set interView question and answer on ui
const displayQuestion = (questions) =>{
    const titleContainer = document.getElementById("interview-info");
    questions.map(question =>{
        titleContainer.innerHTML +=`
        <li onclick="loadDetails("hello")"><a><i class="fa-solid fa-circle-arrow-right"></i>${question.name}</a></li>
        `;
    });
    // assigment list container
    const assigment = questions[0].assigmentLink;
    const assigmentListContainer = document.getElementById("assigment-info");
    assigment.forEach(assigList =>{
    assigmentListContainer.innerHTML +=`
    <li onclick="loadDetails("hello")"><a target="_blank" href="${assigList.url}"><i class="fa-solid fa-circle-arrow-right"></i>${assigList.name}</a></li>
    
    `;
    })
}
loadData()