// default area declaration
const container = document.getElementById("milestone-content");
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
// here the display all title on the sidebar
const displayTitle = data =>{
    const container = document.getElementById('aside-info');
    data.outline.forEach(singleItem =>{
        container.innerHTML += `
        <li class="cursor-pointer my-1" onclick="loadDetails('${singleItem.id}')"><a><i class="fa-solid fa-circle-arrow-right"></i>${singleItem.name}</a></li>
    `;
    });
}
// load different topic by id
const loadDetails = id =>{
    const url = `./milestone-7/topic-${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => detailsDisplay(data.data))
}
const detailsDisplay = details =>{
    // console.log(details)
    
    container.textContent = '';
    const list = details.checkList;
    const checkList = list?.map(list => `<li class="py-2"><i class="fa-solid text-blue-700 fa-share"></i> ${list}</li>`).join(' ');
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
        <li class="cursor-pointer my-1" onclick="loadQuestionAns('${question.info}', '${question.name}')"><a><i class="fa-solid fa-circle-arrow-right"></i>${question.name}</a></li>
        `;
    });
    // assigment list container
    const assigment = questions[0].assigmentLink;
    const assigmentListContainer = document.getElementById("assigment-info");
    assigment.forEach(assigList =>{
    assigmentListContainer.innerHTML +=`
    <li class="cursor-pointer my-1" onclick="loadDetails("hello")"><a target="_blank" href="${assigList.url}"><i class="fa-solid fa-circle-arrow-right"></i>${assigList.name}</a></li>
    `;
    });
    // some project card show on 
    const projectCard = document.getElementById("project-card");
    assigment.forEach(card => {
        projectCard.innerHTML += `
        <div class="card m-4 shadow-xl">
        <figure><img class="h-60 w-full" src="${card.img_url}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">
          ${card.name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <div class="card-actions justify-center">
          <div class="btn">
          <a href="${card.url}">PreView</a>
          </div>
        </div>
        </div>
        </div>
        `;
    })

}
    // click to display interview queestion details
    const loadQuestionAns = (data, name) =>{
        container.innerHTML = `
        <div class="p-2">
        <h2 class="sidebar-title">${name}</h2>
        <p class="text-xl">${data}</p>
        </div>
        `;
        }
loadData()