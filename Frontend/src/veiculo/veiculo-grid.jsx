import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RechTable from '../components/rech-table';
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

class VeiculoGrid extends Component {

    title = 'Veículos';
    headers = [
        { title: 'Código', name: 'id' },
        { title: 'Placa', name: 'placa' },
        { title: 'Marca', name: 'marca' },
        { title: 'Ano', name: 'ano' },
    ];
    state = {
        rows: []
    }

    constructor (props) {
        super(props);
        this.handleButtonQuery = this.handleButtonQuery.bind(this);
        this.handleButtonUpdate = this.handleButtonUpdate.bind(this);
        this.handleButtonDelete = this.handleButtonDelete.bind(this);
    }

    componentDidMount () {
        this.refreshGrid();
    }

    render () {
        return (
            <RechTable
                title={this.title}
                headers={this.headers}
                rows={this.state.rows}
                onQuery={this.handleButtonQuery}
                onUpdate={this.handleButtonUpdate}
                onCreate={this.handleButtonCreate}
                onDelete={this.handleButtonDelete}
            ></RechTable>
        );
    }

    handleButtonUpdate = (id) => {
        return alert('Alterando veículo ' + id);
    }
    handleButtonQuery = (id) => {
        return alert('Consultando veículo ' + id);
    }
    handleButtonDelete = (id) => {
        if (window.confirm('Tem certeza que deseja excluir o veículo ' + id + '?')) {
            return Http.delete('veiculo', id).then((response) => this.refreshGrid());
        }
        return false;
    }
    handleButtonCreate = () => {
        return Http.post('veiculo', {
            placa: 'BAC-3213',
            marca: 'Flintstone',
            ano: 1996
        }).then((response) => {
            this.refreshGrid();
        }).catch((error) => {
            console.error(error);
        })
    }

    refreshGrid = () => {
        return Http.get('veiculo').then((response) => {
            this.setState({ rows: response.data });
        })
    }

}

VeiculoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VeiculoGrid);