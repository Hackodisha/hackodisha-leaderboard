import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    margin: "4%",
    boxShadow: "2vw 2vw 2vw 1vw rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
  },
  container: {
    maxHeight: 440,
    borderRadius: "10px",
    backgroundColor: "#121212",
    color: "#ffffff",
  },
  headrow: {
    backgroundColor: "#000",
    color: "#fff",
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
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <h1 style={{ color: "#ffffff", fontSize: "40px", fontWeight: 900 }}>
          Leader Board
        </h1>

        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.headrow}
                style={{
                  color: "#ffffff",
                  fontWeight: 1000,
                  fontSize: "1.1rem",
                }}>
                Rank
              </TableCell>
              <TableCell
                className={classes.headrow}
                style={{
                  color: "#ffffff",
                  fontWeight: 1000,
                  fontSize: "1.1rem",
                }}>
                Name
              </TableCell>
              <TableCell
                className={classes.headrow}
                style={{
                  color: "#ffffff",
                  fontWeight: 1000,
                  fontSize: "1.1rem",
                }}>
                Total Points
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, i) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    aria-checked="false"
                    key={i}>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        color: "#ffffff",
                        fontWeight: 1000,
                        fontSize: "1.1rem",
                      }}>
                      {item.Rank}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#ffffff",
                        fontWeight: 1000,
                        fontSize: "1.1rem",
                      }}>
                      {item.Name}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "#ffffff",
                        fontWeight: 1000,
                        fontSize: "1.1rem",
                      }}>
                      {item.Total}
                    </TableCell>
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
        style={{
          backgroundColor: '#121212',
          color: '#ffffff'
        }}
      />
    </Paper>
  );
}
