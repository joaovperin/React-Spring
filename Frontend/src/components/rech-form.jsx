import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from '@material-ui/core';

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

const RechForm = (props) => {

    const { classes, title, fields, model, onChange, onCancel, onConfirm } = props;

    return (
        <Paper className={classes.root}>
            <h2 style={{ margin: '20px auto' }}>{title}</h2>
            <FormControl>
                {fields.map(field => (
                    <TextField
                        required={field.required}
                        disabled={field.disabled}
                        id={field.name}
                        label={field.label}
                        value={model[field.name]}
                        margin="normal"
                        onChange={onChange}
                    >
                    </TextField>
                ))}
                <div style={{ width: '100%', margin: 'auto' }}>
                    <IconButton onClick={onCancel.bind(this)} color="primary" component="span">
                        <CancelIcon />
                    </IconButton>
                    <IconButton onClick={onConfirm.bind(this)} color="primary" component="span">
                        <CheckIcon />
                    </IconButton>
                </div>
            </FormControl>

        </Paper>
    );
}

RechForm.propTypes = {
    title: PropTypes.string.isRequired,
    model: PropTypes.object.isRequired
};

export default withStyles(styles)(RechForm);