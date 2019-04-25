/*
 * PerinWS
 * CopyRight Rech Informática Ltda. Todos os direitos reservados.
 */
package br.com.jpe.main.veiculo;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Descrição da classe.
 */
@Controller
@CrossOrigin
@RequestMapping("/veiculo")
public class VeiculoController {

    @Autowired
    private VeiculoRepository veiculos;

    @GetMapping
    public ResponseEntity buscarVeiculos() {
        Iterable<Veiculo> findAll = veiculos.findAll();
        List<Veiculo> list = new ArrayList<>();
        findAll.forEach(v -> list.add(v));
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity buscarVeiculo(@PathVariable Long id) {
        Optional<Veiculo> busca = veiculos.findById(id);
        // Se existe um veículo com esse id
        if (busca.isPresent()) {
            return new ResponseEntity(busca.get(), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity gravarVeiculo(
            @RequestBody Veiculo veiculo
    ) {
        Veiculo novoVeiculo = veiculos.save(veiculo);
        return new ResponseEntity(novoVeiculo, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity alterarVeiculo(
            @PathVariable Long id,
            @RequestBody Veiculo veiculo
    ) {
        Optional<Veiculo> busca = veiculos.findById(id);
        // Se não existir um veículo com esse id, retorna 404
        if (!busca.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        // Seta o ID, grava e retorna
        veiculo.setId(id);
        Veiculo save = veiculos.save(veiculo);
        return new ResponseEntity(save, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletarVeiculo(@PathVariable Long id) {
        Optional<Veiculo> busca = veiculos.findById(id);
        // Se não existir, retorna not found
        if (!busca.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        // Deleta o veículo
        Veiculo deleted = busca.get();
        veiculos.delete(deleted);
        return new ResponseEntity(deleted, HttpStatus.OK);
    }

}
