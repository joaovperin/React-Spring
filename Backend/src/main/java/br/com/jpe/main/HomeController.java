/*
 * PerinWS
 * CopyRight Rech Informática Ltda. Todos os direitos reservados.
 */
package br.com.jpe.main;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Descrição da classe.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public ResponseEntity hello() {
        return new ResponseEntity("Hello!", HttpStatus.OK);
    }

}
