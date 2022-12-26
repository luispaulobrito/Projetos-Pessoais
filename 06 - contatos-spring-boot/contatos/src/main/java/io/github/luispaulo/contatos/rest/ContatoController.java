package io.github.luispaulo.contatos.rest;

import io.github.luispaulo.contatos.model.entity.Contato;
import io.github.luispaulo.contatos.model.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contatos")
public class ContatoController {

    private final ContatoRepository repository;

    @Autowired
    public ContatoController(ContatoRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contato salvar(@RequestBody Contato contato){
        return repository.save(contato);
    }
}
