

const selectElement = (type, id, label, selectOptions) => {
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `
            <option>${option}</option>
        `;
    }
    return `
        <div>
            <label>${label}</label>
            <${type} id="${id}" name="${id}">
                ${optionElements}
            </${type}>
        </div>
    `
}

const inputElement = (type, id, label) => {
    return `
        <div>
            <label for="${id}">${label}</label>
            <input type="${type}" id="${id}" name="${id}">
        </div>
    `
}

const title = (titleOfForm) => {
    return `
        <h2>
            ${titleOfForm}
        </h2>
    `
}

const formElement = `
    <form id="form">
        ${title("Create your character")}
        ${inputElement("text", "cName", "How can we call you?")}
        ${selectElement("select", "gender", "Gender", ["Female", "Male", "Attack Helicopter"])}
        ${selectElement("select", "race", "Race", ["Dhampir", "Dragonborn", "Dwarf", "Elf"])}
        ${selectElement("select", "class", "Class", ["Fighter", "Programmer", "Strider", "Wizard"])}
        <button>Save</button>
    </form>
`;

const sheetElement = `
    <p>Hello 
    <span id="inputValueContent"></span>
    <br>
    Your gender is:
    <span id="inputValueContentGender">Female</span>
    <img id="gImg" src="" alt=" " width="60" height="60"> 
    !</p>
`;

const inputEvent = (event) => {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
}

const selectEvent = (event) => {
    document.getElementById("inputValueContentGender").innerHTML = event.target.value;
    if (event.target.value === "Female") {
        // console.log("I work");
        document.getElementById("gImg").src = "https://lexiq.hu/kepek/female.png";
    } else if (event.target.value === "Male") {
        document.getElementById("gImg").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Male-s%C3%ADmbolo2.svg/1200px-Male-s%C3%ADmbolo2.svg.png";
    } else {
        document.getElementById("gImg").src = "https://as1.ftcdn.net/v2/jpg/01/20/24/42/1000_F_120244259_3NWvUluAsywkvzuLtYKCNkj0jb8DgKpa.jpg";
    }
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", sheetElement);

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent)
    }

    const selectList = form.querySelectorAll("select");
    for (const select of selectList) {
        select.addEventListener("input", selectEvent)
    }
}

window.addEventListener("load", loadEvent);