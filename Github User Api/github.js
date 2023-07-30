class Github{
    constructor (){
        this.client_id = '782a7fe48d27b2b693f8'
        this.client_outh= '055b5476285c6492f0bb068e516072b7e43e3500'
        this.repo_count = 5
        this.repo_sort = 'created : asc'
    }


    async getusers(user){
        const profiledata = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const repodata = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const data = await profiledata.json();
        const repo = await repodata.json();

        return{
            data    , 
            repo
        }     
        
    }    





}