// Get the Input element
const github = new Github;

//Get UI class
const ui = new UI;

const searchuser = document.getElementById('searchUser');

// Add Evenet Listener

searchuser.addEventListener('keyup', (e)=>{

    const usertext = e.target.value;

    if(usertext !== ''){
        // console.log(usertext)
        github.getusers(`${usertext}`)
        .then(data =>{
            if(data.data.message === 'Not Found'){
                // Show Alert
                ui.showalert('User Not Found' , 'alert alert-danger')
            }else{
                //Show User
                ui.showprofile(data.data);
                //Show Repo
                ui.showrepo(data.repo);

            }
        })      

        


    }else{

        ui.clearprofile();

    }

})