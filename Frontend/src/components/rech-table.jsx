import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RechTableHeader from '../components/rech-table-header'
import RechTableBody from '../components/rech-table-body'

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

const RechTable = (props) => {

    const { classes, title, headers, rows, onCreate, onQuery, onUpdate, onDelete } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <RechTableHeader title={title}
                    headers={headers} >
                </RechTableHeader>
                <RechTableBody headers={headers}
                    rows={rows}
                    onQuery={onQuery}
                    onUpdate={onUpdate}
                    onDelete={onDelete} >
                </RechTableBody>
            </Table>
            <Button onClick={onCreate}>New</Button>
        </Paper>
    );
};

RechTable.propTypes = {
    // classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RechTable);