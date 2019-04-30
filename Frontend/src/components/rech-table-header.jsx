import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';


const RechTableHeader = (props) => {

    const { title, headers } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell key="header_title">{title}</TableCell>
                {headers.map(header => (
                    <TableCell key={header.name} align="right">{header.title}</TableCell>
                ))}
                <TableCell key="header_actions" align="right">Ações</TableCell>
            </TableRow>
        </TableHead>
    );

}

RechTableHeader.propTypes = {
    title: PropTypes.string.isRequired,
    headers: PropTypes.array.isRequired,
};

export default RechTableHeader;