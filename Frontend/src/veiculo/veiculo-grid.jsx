import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from "axios";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        float: 'left'
    },
});

class VeiculoGrid extends Component {

    state = {
        lista: [
            { id: 1, placa: "AVC-1234", marca: "Ford", ano: 1996 },
            { id: 2, placa: "XVC-1674", marca: "Outro", ano: 2003 }
        ]
    }

    componentDidMount() {
        axios.get('http://localhost:8080/veiculo').then((response) => {
            this.setState({ lista: response.data });
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Veículos</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Placa</TableCell>
                            <TableCell align="right">Marca</TableCell>
                            <TableCell align="right">Ano</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.lista.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.placa}</TableCell>
                                <TableCell align="right">{row.marca}</TableCell>
                                <TableCell align="right">{row.ano}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

VeiculoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VeiculoGrid);