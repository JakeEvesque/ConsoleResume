function displayHeader(parameter, value){
    if (parameter == "Name"){
        console.log(parameter + ": " + value.toUpperCase());
    } else {
        console.log(parameter + ": " + value);
    }    
}

function displayBlankLine(){
    console.log("");
}

function displayList(title, items){
    console.log(title + ":");
    for(var item of items){
        if (item.special){
            console.log("* BAM: " + item.text + "\n");
        } else {
            console.log("* " + item.text + "\n");
        }
    }
    console.log("\n");
}

displayHeader("Name", "Jake Evesque");
displayHeader("Career", "Full Stack Engineer (wannabe) / Dreamer");
displayHeader("Description", "Night Clean-up Boy!");
displayBlankLine();
let interests = [];
interests.push({ text: "Coming in late", special: false});
interests.push({ text: "Leaving early", special: false});

displayList("My Interests", interests);
let experiences = [];
experiences.push({ text: "blah blah blah", special: false});
experiences.push({ text: "Something about a girl. ", special: false});


displayList("My Previous Experience", experiences);

let skills = [];
skills.push({ text: "I make a mean grilled cheese sandwhich", special: true});
skills.push({ text: "Javascript", special: false});
skills.push({ text: "MS SQL Server", special: true});
skills.push({ text: "C#", special: false});

displayList("My Skills", skills);
