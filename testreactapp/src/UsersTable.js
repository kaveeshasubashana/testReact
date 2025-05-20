import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const UsersTable = ({rows}) => {
   return (
    <TableContainer component={Paper} sx={{
        marginTop:'31px',
        marginLeft: '40px',
    }}  >
        <Table>

            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                  rows.length > 0 ?  rows.map( row => (
                        <TableRow key={row.id}  >
                                <TableCell component={'th'} scope="row" > {row.id} </TableCell>
                                <TableCell component={'th'} scope="row" > {row.name} </TableCell>
                                <TableCell  > 
                                  <button 
                                  
                                  sx={{ margin: '0px 10px'}}
                                  onClick={() => {}}
                                  >
                                        update
                                  </button>
                                  <button 
                                  
                                  sx={{ margin: '0px 10px'}}
                                  onClick={() => {}}
                                  >
                                        delete
                                  </button>

                                 </TableCell>
                        </TableRow>
                        
                    ) ): ( <TableRow >
                            <TableCell component={'th'} scope="row" > No data </TableCell>
                             </TableRow>)
                }
            </TableBody>

        </Table>
   </TableContainer>

   );
}

export default UsersTable;