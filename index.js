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

const setFieldIdCounter = (counter) => {
  let counterString = JSON.stringify(counter);
  localStorage.setItem("fieldId", counterString);
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

if (localStorage.getItem("fieldId") === null) {
  setFieldIdCounter(0);
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

const getFieldIdCounter = () => {
  let storedCounterString = localStorage.getItem("fieldId");
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

function generateFieldId() {
  let counter = getFieldIdCounter();
  counter++;
  setFieldIdCounter(counter);
  return counter;
}

// const validateInput = (input, inputType, inputName) => {};

const showPreview = () => {};

const addEducationInput = () => {
  event.preventDefault();
  let newNode = document.createElement("div");
  newNode.setAttribute("class", "form-controls");

  let selectedFieldId = generateFieldId();

  let newInputHTML = `
            <div id='${selectedFieldId}'>
              <div class="form-control">
                <label for="university">University:</label>
                <input type="text" id="university" name="university"  />
                <input type='button' class='remove-btn' value='-' onclick='removeFieldHandler(${selectedFieldId})' />
              </div>

              <div class="form-control">
                <label for="degree">Degree:</label>
                <input type="text" id="degree" name="degree"  />
              </div>

              <div class="form-control">
                <label for="gradYear">Graduation Year:</label>
                <input type="text" id="gradYear" name="gradYear"  />
              </div>

              <div class="form-control">
                <label for="cgpa">Percentage/C.G.P.A:</label>
                <input type="text" id="cgpa" name="cgpa"  />
              </div>
              </div>
              `;
  newNode.innerHTML = newInputHTML;
  let educationSection = document.getElementById("educationSection");
  educationSection.appendChild(newNode);
  // console.log(educationSection);
};

const addExperienceInput = () => {
  event.preventDefault();
    let newNode = document.createElement("div");
  newNode.setAttribute("class", "form-controls");
  let selectedFieldId = generateFieldId();

  let newInputHTML = `
  <div id='${selectedFieldId}'>
    <div class="form-control">
    <label for="company">Company:</label>
    <input type="text" id="company" name="company"  />
    <input type='button' class='remove-btn' value='-' onclick='removeFieldHandler(${selectedFieldId})' />
  </div>

  <div class="form-control">
    <label for="position">Position:</label>
    <input type="text" id="position" name="position"  />
  </div>

  <div class="form-control">
    <label for="duration">Duration:</label>
    <input type="text" id="duration" name="duration"  />
  </div>
  </div>
    `;

  newNode.innerHTML = newInputHTML;
  let experienceSection = document.getElementById("experienceSection");
  experienceSection.appendChild(newNode);
  // console.log(educationSection);
};

const addProjectInput = () => {
  event.preventDefault();
  let newNode = document.createElement("div");
  newNode.setAttribute("class", "form-controls");
  let selectedFieldId = generateFieldId();

  let newInputHTML = `
  <div id='${selectedFieldId}'>
              <div class="form-control">
                <label for="projectName">Project Name:</label>
                <input type="text" id="projectName" name="projectName" />
                <input type='button' class='remove-btn' value='-' onclick='removeFieldHandler(${selectedFieldId})' />
              </div>

              <div class="form-control">
                <label for="projectLink">Link:</label>
                <input type="text" id="projectLink" name="projectLink" />
              </div>

              <div class="form-control">
                <label for="projectDescription">Description:</label>
                <input
                  type="text"
                  id="projectDescription"
                  name="projectDescription"
                />
              </div>
  </div>
    `;

  newNode.innerHTML = newInputHTML;
  let projectSection = document.getElementById("projectSection");
  projectSection.appendChild(newNode);
};

const addSkillInput = () => {
  event.preventDefault();
  let newNode = document.createElement("div");
  newNode.setAttribute("class", "form-controls");
  let selectedFieldId = generateFieldId();

  let newInputHTML = `
            <div id='${selectedFieldId}'>
              <div class="form-control">
                <label for="languages">Programmming Language:</label>
                <input type="text" id="languages" name="languages" />
                <input type='button' class='remove-btn' value='-' onclick='removeFieldHandler(${selectedFieldId})' />
              </div>

              <div class="form-control">
                <label for="tools">Tool:</label>
                <input type="text" id="tools" name="tools" />
              </div>
            </div>
    `;

  newNode.innerHTML = newInputHTML;
  let skillSection = document.getElementById("skillSection");
  skillSection.appendChild(newNode);
};

const formSubmitHandler = () => {
  event.preventDefault();

  let form = document.forms.cvForm;
  let userName = form.name.value,
    email = form.email.value,
    address = form.address.value,
    phoneNumber = form.phone.value;

  let educationArray = [];

  if (form.university.length > 1) {
    for (let i = 0; i < form.university.length; i++) {
      let obj = {
        universisty: form.university[i].value,
        degree: form.degree[i].value,
        gradYear: form.gradYear[i].value,
        cgpa: form.cgpa[i].value,
      };
      educationArray.push(obj);
    }
  } else {
    let obj = {
      universisty: form.university.value,
      degree: form.degree.value,
      gradYear: form.gradYear.value,
      cgpa: form.cgpa.value,
    };
    educationArray.push(obj);
  }
  //   console.log(educationArray);

  let experienceArray = [];

  if (form.company.length > 1) {
    for (let j = 0; j < form.company.length; j++) {
      let obj = {
        company: form.company[j].value,
        position: form.position[j].value,
        duration: form.duration[j].value,
      };
      // console.log("dfasdfasdasdasfas", form.comapany[j].value);
      experienceArray.push(obj);
    }
  }else{
    let obj = {
        company: form.company.value,
        position: form.position.value,
        duration: form.duration.value,
    };
    experienceArray.push(obj);
  }
  //   console.log(experienceArray);

  let projectArray = [];


  if(form.projectName.length > 1){
  for (let i = 0; i < form.projectName.length; i++) {
    let obj = {
      projectName: form.projectName[i].value,
      projectLink: form.projectLink[i].value,
      projectDescription: form.projectDescription[i].value,
      //   cgpa: form.cgpa[i].value,
    };
    projectArray.push(obj);
  }
}else{
    let obj = {
        projectName: form.projectName.value,
        projectLink: form.projectLink.value,
        projectDescription: form.projectDescription.value,
        //   cgpa: form.cgpa[i].value,
      };
    projectArray.push(obj);
}

  let skillArray = [];

  if(form.languages.length > 1){
  for (let i = 0; i < form.languages.length; i++) {
    let obj = {
      languages: form.languages[i].value,
      tools: form.tools[i].value,
    };
    skillArray.push(obj);
  }
}else{
    let obj = {
        languages: form.languages.value,
        tools: form.tools.value,
      };
      skillArray.push(obj);
}

  let id = generateUniqueId();
  let idArray = getIdArray();
  idArray.push(id);
  setIdArray(idArray);
  let finalObj = {
    userId: id,
    userName: userName,
    userEmail: email,
    userPhone: phoneNumber,
    userAdd: address,
    education: educationArray,
    experience: experienceArray,
    projects: projectArray,
    skills: skillArray,
  };


  let userArray = getLocalArray();
  userArray.push(finalObj);
  setLocalArray(userArray);

  window.location.href = '/resume_builder_public/resume.html?id='+id;
};

const removeFieldHandler = (fieldId) => {
    let fieldToBeRemoved = document.getElementById(`${fieldId}`);
    fieldToBeRemoved.remove();
};


const checkButton = () => {
    let button = document.getElementById('generateButton');
    // button.disabled = true;
    // if(allInputCheck()){
    // }
}

function allInputCheck(){
  
}
