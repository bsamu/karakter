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
    <div id="formDiv">   
        <form id="form">
            ${title("Create your character")}
            ${inputElement("text", "cName", "How can we call you?")}
            ${selectElement("select", "gender", "Gender", ["Female", "Male", "Attack Helicopter"])}
            ${selectElement("select", "race", "Race", ["Dhampir", "Dragonborn", "Dwarf", "Elf"])}
            ${selectElement("select", "class", "Class", ["Fighter", "Programmer", "Strider", "Wizard"])}
            <button>Save</button>
        </form>
    </div> 
`;

const sheetElement = `
    <div id="sheet">
        <p>Hello 
            <span id="inputValueContent"></span>!
            <br>
            Your gender is:
            <span id="inputValueContentGender">Female</span>
            <img id="gImg" src="https://lexiq.hu/kepek/female.png" alt=" " width="60" height="60">
            <br>
            Your race:
            <span id="inputValueContentRace">Dhampir</span>
            <img id="rImg" src="https://images.squarespace-cdn.com/content/v1/5e3843beb37a0716cf512998/1618937697187-4SDCGSOWQK354XIYBO9P/dhampir.png" alt=" " width="60" height="60">
            <br>
            Your class:
            <span id="inputValueContentClass">Fighter</span>
            <img id="cImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjlR5nVllPfQUR3M_AFT0x0JC02jPSG0Bhg&usqp=CAU" alt=" " width="60" height="60">
        </p>
    </div>    
`;

const inputEvent = (event) => {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
}

const selectEvent = (event) => {
    // console.log(event.target.name);
    if (event.target.name === "gender") {
        document.getElementById("inputValueContentGender").innerHTML = event.target.value;
        if (event.target.value === "Female") {
            document.getElementById("race").disabled = false;
            document.getElementById("class").disabled = false;

            document.getElementById("inputValueContentRace").innerHTML = document.getElementById("race").value;
            document.getElementById("inputValueContentClass").innerHTML = document.getElementById("class").value;

            if (document.getElementById("race").value = "Dhampir") {
                document.getElementById("rImg").src = "https://images.squarespace-cdn.com/content/v1/5e3843beb37a0716cf512998/1618937697187-4SDCGSOWQK354XIYBO9P/dhampir.png"
            } else if (document.getElementById("race").value = "Dragonborn") {
                document.getElementById("rImg").src = "https://cdn.shopify.com/s/files/1/0097/7810/2350/products/db01_cbf11502-48e2-473d-ae50-c7b477f60650_300x.png?v=1615259206";
            } else if (document.getElementById("race").value = "Dwarf") {
                document.getElementById("rImg").src = "https://assets.3dtotal.com/gimli-final-maincam.5ddkbc.expanded.hpu.jpg";
            } else {
                document.getElementById("rImg").src = "https://image.shutterstock.com/image-vector/little-elf-vector-illustration-on-260nw-731890309.jpg";
            }

            if (document.getElementById("class").value = "Fighter") {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjlR5nVllPfQUR3M_AFT0x0JC02jPSG0Bhg&usqp=CAU"
            } else if (document.getElementById("race").value = "Programmer") {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVgANWFNZitlXr8ANBBXM0raIn0kV8KFl4g&usqp=CAU";
            } else if (document.getElementById("race").value = "Strider") {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPqicDpJFRvkYnEJCnRZzX976MIyUjeSROw&usqp=CAU";
            } else {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UTleJ2eXbzsGkUF2fgy-uLRu0CvDykW5PQ&usqp=CAU";
            }

            // console.log("I work");
            document.getElementById("gImg").src = "https://lexiq.hu/kepek/female.png";
        } else if (event.target.value === "Male") {
            document.getElementById("race").disabled = false;
            document.getElementById("class").disabled = false;

            document.getElementById("inputValueContentRace").innerHTML = document.getElementById("race").value;
            document.getElementById("inputValueContentClass").innerHTML = document.getElementById("class").value;

            if (document.getElementById("race").value = "Dhampir") {
                document.getElementById("rImg").src = "https://images.squarespace-cdn.com/content/v1/5e3843beb37a0716cf512998/1618937697187-4SDCGSOWQK354XIYBO9P/dhampir.png"
            } else if (document.getElementById("race").value = "Dragonborn") {
                document.getElementById("rImg").src = "https://cdn.shopify.com/s/files/1/0097/7810/2350/products/db01_cbf11502-48e2-473d-ae50-c7b477f60650_300x.png?v=1615259206";
            } else if (document.getElementById("race").value = "Dwarf") {
                document.getElementById("rImg").src = "https://assets.3dtotal.com/gimli-final-maincam.5ddkbc.expanded.hpu.jpg";
            } else {
                document.getElementById("rImg").src = "https://image.shutterstock.com/image-vector/little-elf-vector-illustration-on-260nw-731890309.jpg";
            }

            if (document.getElementById("class").value = "Fighter") {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjlR5nVllPfQUR3M_AFT0x0JC02jPSG0Bhg&usqp=CAU"
            } else if (document.getElementById("race").value = "Programmer") {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVgANWFNZitlXr8ANBBXM0raIn0kV8KFl4g&usqp=CAU";
            } else if (document.getElementById("race").value = "Strider") {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPqicDpJFRvkYnEJCnRZzX976MIyUjeSROw&usqp=CAU";
            } else {
                document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UTleJ2eXbzsGkUF2fgy-uLRu0CvDykW5PQ&usqp=CAU";
            }

            document.getElementById("gImg").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Male-s%C3%ADmbolo2.svg/1200px-Male-s%C3%ADmbolo2.svg.png";
        } else {
            document.getElementById("race").disabled = true;
            document.getElementById("class").disabled = true;

            document.getElementById("inputValueContentRace").innerHTML = event.target.value;
            document.getElementById("inputValueContentClass").innerHTML = event.target.value;

            document.getElementById("gImg").src = "https://as1.ftcdn.net/v2/jpg/01/20/24/42/1000_F_120244259_3NWvUluAsywkvzuLtYKCNkj0jb8DgKpa.jpg";
            document.getElementById("rImg").src = "https://as1.ftcdn.net/v2/jpg/01/20/24/42/1000_F_120244259_3NWvUluAsywkvzuLtYKCNkj0jb8DgKpa.jpg";
            document.getElementById("cImg").src = "https://as1.ftcdn.net/v2/jpg/01/20/24/42/1000_F_120244259_3NWvUluAsywkvzuLtYKCNkj0jb8DgKpa.jpg";
        }
    } else if (event.target.name === "race") {
        document.getElementById("inputValueContentRace").innerHTML = event.target.value;
        if (event.target.value === "Dhampir") {
            // console.log("I work");
            document.getElementById("rImg").src = "https://images.squarespace-cdn.com/content/v1/5e3843beb37a0716cf512998/1618937697187-4SDCGSOWQK354XIYBO9P/dhampir.png";
        } else if (event.target.value === "Dragonborn") {
            document.getElementById("rImg").src = "https://cdn.shopify.com/s/files/1/0097/7810/2350/products/db01_cbf11502-48e2-473d-ae50-c7b477f60650_300x.png?v=1615259206";
        } else if (event.target.value === "Dwarf") {
            document.getElementById("rImg").src = "https://assets.3dtotal.com/gimli-final-maincam.5ddkbc.expanded.hpu.jpg";
        } else {
            document.getElementById("rImg").src = "https://image.shutterstock.com/image-vector/little-elf-vector-illustration-on-260nw-731890309.jpg";
        }
    } else {
        document.getElementById("inputValueContentClass").innerHTML = event.target.value;
        if (event.target.value === "Fighter") {
            // console.log("I work");
            document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjlR5nVllPfQUR3M_AFT0x0JC02jPSG0Bhg&usqp=CAU";
        } else if (event.target.value === "Programmer") {
            document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVgANWFNZitlXr8ANBBXM0raIn0kV8KFl4g&usqp=CAU";
        } else if (event.target.value === "Strider") {
            document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPqicDpJFRvkYnEJCnRZzX976MIyUjeSROw&usqp=CAU";
        } else {
            document.getElementById("cImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UTleJ2eXbzsGkUF2fgy-uLRu0CvDykW5PQ&usqp=CAU";
        }
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