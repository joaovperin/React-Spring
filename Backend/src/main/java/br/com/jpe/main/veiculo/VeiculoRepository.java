/*
 * PerinWS
 * CopyRight Rech Informática Ltda. Todos os direitos reservados.
 */
package br.com.jpe.main.veiculo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Descrição da classe.
 */
@Repository
public interface VeiculoRepository extends CrudRepository<Veiculo, Long> {

}
