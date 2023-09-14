//arrow fintion to set array in the local storage
const setLocalArray = (array) => {
  let arraySrting = JSON.stringify(array);
  localStorage.setItem("resumeArray", arraySrting);
};

//arrow function to set the counter in the local storage
const setLocalCounter = (counter) => {
  let counterString = JSON.stringify(counter);
  localStorage.setItem("counter", counterString);
};

const setIdArray = (array) => {
  let arraySrting = JSON.stringify(array);
  localStorage.setItem("idArray", arraySrting);
};

//if statement to manage the the ned case when the local storage in not set as per our requirements
if (localStorage.getItem("resumeArray") === null) {
  setLocalArray([]);
}

if (localStorage.getItem("idArray") === null) {
  setIdArray([]);
}

//if statement to manage the the ned case when the local storage in not set as per our requirements
if (localStorage.getItem("counter") === null) {
  setLocalCounter(0);
}

//function to get the local array and use it
const getLocalArray = () => {
  let storedArrayString = localStorage.getItem("resumeArray");
  let storedArray = JSON.parse(storedArrayString);
  return storedArray;
};

const getIdArray = () => {
  let storedArrayString = localStorage.getItem("idArray");
  let storedArray = JSON.parse(storedArrayString);
  return storedArray;
};
//function to get the counter and use it to assign our comment ids.
const getLocalCounter = () => {
  let storedCounterString = localStorage.getItem("counter");
  let storedCounter = JSON.parse(storedCounterString);
  return storedCounter;
};

//function to generate new ids as per our counter in the local storage
function generateUniqueId() {
  let counter = getLocalCounter();
  counter++;
  setLocalCounter(counter);
  return counter;
}

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const idParam = urlParams.get('id');
// console.log(id);
let storredUserArray = getLocalArray();

let selectedUserIndex = storredUserArray.findIndex(elem => 
    elem.userId == idParam
)

if(selectedUserIndex == -1){
  // let previewTitle = document.createElement('h6');
  // previewTitle.innerHTML = 'Resume you are Searching for is not present hence this is a Preview resume';
  // console.log(previewTitle)
  // previewTitle.style.textAlign = 'center';
  document.body.insertAdjacentHTML('afterbegin','<strong>The Resume you are searching for is not present hence here is a preview resume</strong>')

}

let selectedUserObject = storredUserArray[selectedUserIndex];

document.getElementById('nameVal').innerText = selectedUserObject.userName;

document.getElementById('emailVal').innerText = selectedUserObject.userEmail;

document.getElementById('phoneVal').innerText = selectedUserObject.userPhone;

let eductionSection = document.getElementById('educationSection');
// console.log(educationSection.innerHTML)
educationSection.innerHTML = ``;
let newEducationHTML = ``;
let educationArray = selectedUserObject.education;
educationArray.forEach(element => {
    newEducationHTML += `
    <div class="section__list-item">
        <div class="left">
            <div class="name">${element.universisty}</div>
            <div class="addr">${element.degree}</div>
            <div class="duration">${element.gradYear}</div>
            <div class="addr">${element.cgpa}</div>
        </div>
    </div>
    `;
});
educationSection.innerHTML = newEducationHTML;

let experienceSection = document.getElementById('experienceSection');
experienceSection.innerHTML = ``;
let newExperienceHTML = '';
let experienceArray = selectedUserObject.experience;
experienceArray.forEach(element => {
    newExperienceHTML += `
    <div class="section__list-item">
        <div class="left">
        <div id="companyName" class="name">${element.company}</div>
        <div class="addr">${element.position}</div>
        <div class="duration">${element.duration}</div>
        </div>
    </div>
    `;
});
experienceSection.innerHTML = newExperienceHTML;

let projectSection = document.getElementById('projectSection');
projectSection.innerHTML = ``;
let newprojectHTML = '';
let projectArray = selectedUserObject.projects;
projectArray.forEach(element => {
    newprojectHTML += `
    <div class="section__list-item">
    <div class="name">${element.projectName}</div>
    <div class="text">
      ${element.projectDescription}
    </div>
    <div class="text">
      ${element.projectLink}
    </div>
  </div>
    `;
});
projectSection.innerHTML = newprojectHTML;

let skillSection = document.getElementById('skillSection');
skillSection.innerHTML = ``;
let newSkillHTML = '';
let skillArray = selectedUserObject.skills;
skillArray.forEach(element => {
    newSkillHTML += `
    <div class="left">
    <div class="name">${element.languages}</div>
  </div>
  <div class="right">
    <input id="ck1" type="checkbox" checked />
    <label for="ck1"></label>
    <input id="ck2" type="checkbox" checked />
    <label for="ck2"></label>
    <input id="ck3" type="checkbox" />
    <label for="ck3"></label>
    <input id="ck4" type="checkbox" />
    <label for="ck4"></label>
    <input id="ck5" type="checkbox" />
    <label for="ck5"></label>
  </div>
    `;
});
skillSection.innerHTML = newSkillHTML;


// function editHandler(){
//   let editResumeId = idParam
//   window.location.href = '/new%20resume/index.html?id='+editResumeId;
// }