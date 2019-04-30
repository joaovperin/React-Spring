import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RechForm from '../components/rech-form';
import Http from '../core/http';


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

class VeiculoForm extends Component {

    title = 'Veículos';
    fields = [
        { label: 'Código', name: 'id', disabled: true },
        { label: 'Placa', name: 'placa', required: true },
        { label: 'Marca', name: 'marca', required: true },
        { label: 'Ano', name: 'ano', required: true },
    ];
    state = {
        model: {
            placa: '',
            marca: '',
            ano: 0
        }
    }

    constructor (props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount () {
    }

    render () {
        return (
            <RechForm
                title='Veículos'
                model={this.state.model}
                fields={this.fields}
                onChange={this.onChange}
                onConfirm={this.onConfirm}
                onCancel={this.onCancel}
            ></RechForm>
        );
    }

    onChange = event => {
        const { id, value } = event.target;
        let { model } = this.state;
        model[id] = value;
        this.setState({ model });
    };

    onCancel = () => {
        if (window.confirm('Tem certeza que deseja cancelar?')) {
            this.setState({ model: {} });
        }
    };

    onConfirm = () => {
        if (window.confirm('Confirma a inclusão do registro?')) {
            return Http.post('veiculo', this.state.model).then((response) => {
                document.dispatchEvent(new CustomEvent('onSubmitForm', {
                    action: 'incluir',
                    model: this.state.model
                }));
            });
        }
    };

}

VeiculoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VeiculoForm);