
const service={
    getUsers:async ()=>{        
        return [
            {id:1,name:"John Doe"},
            {id:2,name:"Jane Doe"}
        ];
    },
    getUserById:async (id)=>{
        return {id:id,name:"John Doe"};
    },
    postUser:async(body)=>{
        const userSave={"id":3,"name":body["name"]};
        return userSave;
    },
    putUser:async (body,id)=>{
        const user={id:id,name:body["name"]};
        return user;
    },
    deleteUserById:async(id)=>{
        return 1;
    }
};

module.exports=service;