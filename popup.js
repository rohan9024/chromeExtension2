console.log("inside popup");

document.getElementById("myButton").addEventListener("click", displayOnce);

async function display(link) {
    
    let suff = '?__a=1'
    let l = link.concat(suff);
    console.log("Inside display function.....")
    console.log(l);
    let details = [];
    details = await fetch_json(l);
    // console.log(details);
    const user = details["graphql"]["user"]

    const followers = user['edge_followed_by']['count'];

    const elem = document.createElement('p');

    elem.innerHTML = "<p>Followers: " + followers + "</p>";

    document.getElementById("followers").appendChild(elem);
}

async function fetch_json(link) {
    
    console.log("Inside fetch_json function.....")
    console.log(link);
    return (await fetch(link)).json();
}

function displayOnce() {

    let str = document.getElementById("input").value.toString();

    let links = str.split(' ');

    links.forEach(link => {
        display(link);
    });
}