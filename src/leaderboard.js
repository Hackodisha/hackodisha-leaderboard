import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    width: '90%',
    margin: '5%',
  },
  container: {
    maxHeight: 440,
  },
  headrow: {
    backgroundColor:"#000",
    color:"#fff",
  },
});

export default function LeaderBoard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [data, setData] = useState([]);
      
        useEffect(() => {
          Tabletop.init({
            key: "1WEvBC2HAwbFdnWq7s5GeFkDUC4OPIS87w4b4vlo6bLY",
            simpleSheet: true
          })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
        }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
            <TableCell className={classes.headrow}>S. No.</TableCell>
            <TableCell className={classes.headrow}>Name</TableCell>
            <TableCell className={classes.headrow}>Workshops</TableCell>
            <TableCell className={classes.headrow}>Mini Event 1</TableCell>
            <TableCell className={classes.headrow}>Mini Event 2</TableCell>
            <TableCell className={classes.headrow}>Total Points</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  
              <TableCell component="th" scope="row">
                {item.SNo}
              </TableCell>
              <TableCell>{item.Name}</TableCell>
              <TableCell>{item.Workshops}</TableCell>
              <TableCell>{item.MiniEvent1}</TableCell>
              <TableCell>{item.MiniEvent2}</TableCell>
              <TableCell>{item.Total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
