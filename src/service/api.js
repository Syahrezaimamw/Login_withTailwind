export const loginAuthentication=async(data,callback)=>{
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res=>{
        if(res.message=="Invalid credentials"){

            callback(false,res)
        }else{
            callback(true,res)

        }
        console.log(res)})
      .catch(res=>callback(false,res));
}