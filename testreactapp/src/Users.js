import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [ 
         {
            id:1,
            name:"kavee",
         },
         {
            id:2,
            name:"tharuu",
         }
];

const Users = () => {
      return(
            <div   
            sx={{
                width: 'cacl(100%-100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
            
            >
             <UserForm />
             <UsersTable  rows={users} />

            </div>

      );
}

export default Users;