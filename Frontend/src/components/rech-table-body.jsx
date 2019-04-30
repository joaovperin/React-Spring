import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import BuildIcon from '@material-ui/icons/Build';
import SearchIcon from '@material-ui/icons/Search';

const RechTableBody = (props) => {

    const { headers, rows, onQuery, onUpdate, onDelete } = props;

    return (
        <TableBody>
            {rows.map(row => (
                <TableRow key={row.id}>
                    <TableCell key={row.name} component="th" scope="row">
                        {row.name}
                    </TableCell>
                    {headers.map(header => (
                        <TableCell align="right" key={`${header.name}_${row.id}`} >{row[header.name]}</TableCell>
                    ))}
                    <TableCell key="actions" align="right">
                        <IconButton onClick={onQuery.bind(this, row.id)} color="primary" component="span">
                            <SearchIcon />
                        </IconButton>
                        <IconButton onClick={onUpdate.bind(this, row.id)} color="primary" component="span">
                            <BuildIcon />
                        </IconButton>
                        <IconButton onClick={onDelete.bind(this, row.id)} color="primary" component="span">
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

RechTableBody.propTypes = {
    headers: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
};


export default RechTableBody;