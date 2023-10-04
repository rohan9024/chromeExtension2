
// fetch("chrome-extension://fpoliollppgpflfienebpjngeolepbap/sample.json").then((res)=>res.json()).then((data)=>console.log(data))


// let disabled = false;
const user = window._sharedData["entry_data"].ProfilePage["0"]["graphql"]["user"]
const posts = user['edge_owner_to_timeline_media']['edges']
const followers = user['edge_followed_by']['count'];
const path_to_edges = user['edge_owner_to_timeline_media']['edges'];

async function myFetch() {
    return (await fetch('chrome-extension://jjefejmnblhjacgfopppccpkhcmhfjnd/sample.json')).json();
}

myFetch();


function calculate_user_engagement(user) {


    var total_likes = 0;
    var total_comments = 0;
    var avg_engagement = 0;
    var i;

    var total_engagement = 0;

    for (i = 0; i < path_to_edges.length; i++) {
        var comments = path_to_edges[i]['node']['edge_media_to_comment']['count'];
        var likes = path_to_edges[i]['node']['edge_liked_by']['count'];
        var engagement = ((likes + comments) / followers * 100)

        total_likes += likes;
        total_comments += comments;
        total_engagement += engagement;

    }
    var total = total_likes + total_comments;


    avg_engagement = total_engagement / path_to_edges.length;
    avg_engagement = avg_engagement.toFixed(2);

    return avg_engagement;
}
function post_per_engagement(post) {

    // Engagement for the post
    const followers = user['edge_followed_by']['count'];
    const path_to_edges = user['edge_owner_to_timeline_media']['edges'];


    var comments = post['edge_media_to_comment']['count'];
    var likes = post['edge_liked_by']['count'];
    var engagement = ((likes + comments) / followers * 100)
    engagement = engagement.toFixed(2);

    return engagement;

}
function avg_likes(user) {
    const path_to_edges = user['edge_owner_to_timeline_media']['edges'];

    var i;
    var total_likes = 0;

    for (i = 0; i < path_to_edges.length; i++) {
        var likes = path_to_edges[i]['node']['edge_liked_by']['count'];
        console.log(likes);
        total_likes += likes;
    }
    var avg = total_likes / path_to_edges.length;
    avg = Math.floor(avg);
    return avg;

}

// {
//     "executive":"xyz", 
//     "campaigns":["sharechat","MX Takatak","MCaffiene","Google"],
//     "contact_no":84342321,
//     "email":"user@example.com",
//     "language":"Hindi"
// }



async function fun() {
    // disabled = true;
    let details = [];

    details = await myFetch();

    // for (let i = 0; i < array.length; i++) {
    //     console.log(object)

    // }



    let executive = details.executive;
    let campaigns = details.campaigns;
    let contact_no = details.contact_no;
    let email = details.email;
    let language = details.language;

    // let page = document.querySelector('.v9tJq.AAaSh.VfzDr');
    let page = document.querySelector('.vtbgv ');
    page.style.zIndex = "1";
    let modal = document.createElement('div');
    function close() {

        // disabled = false;
        // modal.style.Display = 'none';
        console.log("I was clicked...");
    }
    modal.innerHTML =
        `
        <div class="view-details" style='background-color:black; color:white ;z-index:2; text-align:center;text-decoration:none; width: 300px ;height: 300px'>
        <h3>Executive: ` + executive + `</h3>
        <h3>campaigns: `+ campaigns + `</h3>
        <h3>Contact No: ` + contact_no + `</h3>
        <h3>Email: `+ email + `</h1>
        <h3>Language: ` + language + `</h3>
        <div onclick="close()" class= "x" style="color:white; cursor:pointer">
        Close
        </div>
    
        `;


    page.appendChild(modal);



    // alert(
    //     console.log(details.executive)
    // )
}

let parent = document.querySelector('.-vDIg');
let element = document.createElement('h3');
let elementLikes = document.createElement('h3');
let button = document.createElement('button');
let copyToClipboard = document.createElement('button');
const rate = calculate_user_engagement(user);
const likes = avg_likes(user);

element.innerHTML = "<h3>Engagement rate: " + rate + "%</h3>";
elementLikes.innerHTML = "<h3>Avg Likes: " + likes + "</h3>";
element.style.color = 'green';
elementLikes.style.color = 'green';
parent.insertBefore(elementLikes, parent.childNodes[0]);
parent.insertBefore(element, parent.childNodes[0]);
button.innerHTML = `<div class="5f5mN       jIbKX  _6VtSN     yZn4P" onclick='fun()' style='border:none;color:black;text-align:center;text-decoration:none'>View Details</div >`;
copyToClipboard.innerHTML = `<div class="5f5mN       jIbKX  _6VtSN     yZn4P" onclick='copy(followers)' style='border:none;color:black;text-align:center;text-decoration:none'>Copy to clipboard</div >`;
// let disabled = false;
// const viewDetails = document.querySelector('.view-details');
// viewDetails.style.Display = 'none';

// button.addEventListener('click', () => {
//     disabled = true;
// })

parent.insertBefore(button, parent.childNodes[0]);
parent.insertBefore(copyToClipboard, parent.childNodes[0]);

function copy(followers){
    console.log("Copy function called.....");
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(followers);
  
    /* Alert the copied text */
    alert("Copied the text: " + followers);

}

let parentPostList = document.querySelectorAll('._9AhH0');

for (let i = 0; i < parentPostList.length; i++) {
    const parent = parentPostList[i];
    const window_post = posts[i]['node']
    let engagement = post_per_engagement(window_post)
    // create a engagement element
    let elementPost = document.createElement('h3');
    elementPost.innerHTML = "<h3>Engagement rate: " + engagement + "%</h3>";
    elementPost.style.color = 'green';
    elementPost.style.textAlign = 'center';
    // append it to the parent (parent)
    parent.parentNode.appendChild(elementPost);
}




// '?__a=1'