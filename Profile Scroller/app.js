const profiledata = [

    {
        name: "john Doe",
        Age: 32,
        Location: "Boston MA",
        Lookingfor: "Female",
        image: 'https://randomuser.me/api/portraits/men/82.jpg',
        gender : "male"
    },
    {
        name: "Kylie",
        Age: 27,
        Location: "NYC MA",
        Lookingfor: "Male",
        image: 'https://randomuser.me/api/portraits/women/82.jpg',
        gender : "Female"
    },
    {
        name: "Mike Tyson",
        Age: 30,
        Location: "Florida",
        Lookingfor: "Female",
        image: 'https://randomuser.me/api/portraits/men/82.jpg',
        gender : "Male"
    },
    {
        name: "jake De",
        Age: 29,
        Location: "Cannibera MA",
        Lookingfor: "Female",
        image: 'https://randomuser.me/api/portraits/women/82.jpg',
        gender : "Female"
    }
]


const profile = Profileiterator(profiledata);


document.querySelector('#next').addEventListener('click' , displayprofile)

displayprofile();

function displayprofile(){

    let currentProfile = profile.next().value;
    if(currentProfile !== undefined){
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.Age}</li>
        <li class="list-group-item">Location: ${currentProfile.Location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile. Lookingfor}</li>
      </ul>
    `;

    document.querySelector('#imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`
    }
    else{
        window.location.reload();
    }

}




function Profileiterator(profiles) {
    let nextindex = 0;

    return {
        next : function (){
            return nextindex < profiles.length ?
            {
                value : profiles[nextindex++] , done : false 
            } :
            {
                done : true
            }
        }
    }
}