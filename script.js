// TODO: add code here
window.addEventListener("load", () => {
    const container = document.getElementById("container");
    let htmlString = "";
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            // console.log(json); 
            // console.log("length: " + json.length);
            document.getElementById("astroCount").innerHTML = `(Total: ${json.length})`;
            json.sort(function(a, b){return b.hoursInSpace - a.hoursInSpace});
            for (i = 0; i < json.length; i++) {
                htmlString += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li${((json[i].active) ? ' class="active"': '')}>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>`;
            }
            container.innerHTML = htmlString;
            console.log("htmlString: " + htmlString);
        });
    });
});