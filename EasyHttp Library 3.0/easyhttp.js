/** EasyHttp Library
** Library For Making Http Request
**
** @version 3.0.0
** @author XonicLabs
** @license BBIT
**
**/

class EasyHttp{

    async get(url){
        const response = await fetch(url)
        const ResData = await response.json();
        return ResData;
    }

    async post(url ,data){  
        const response =await fetch(url ,{
            method : 'POST',
            headers : {
                'Content-type' :'application/json'
            },
            body : JSON.stringify(data)       
        });
        const ResData = await response.json();
        return ResData ;
    }

    async put(url , data){
        const response = await fetch(url ,{
            method : 'PUT',
            headers : {
                'Content-type' :'application/json'
            },
            body : JSON.stringify(data)       
        });
        const ResData = await response.json();
        return ResData ;
    }

    async delete(url){
        const response =await  fetch(url , {
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            }
        });
        const resData = await 'Resource Deleted!'
        return resData;
    }
}