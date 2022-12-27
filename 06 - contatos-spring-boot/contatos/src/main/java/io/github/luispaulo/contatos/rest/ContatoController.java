package io.github.luispaulo.contatos.rest;

import ch.qos.logback.core.net.server.Client;
import io.github.luispaulo.contatos.model.entity.Contato;
import io.github.luispaulo.contatos.model.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Contato deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map( contato -> {
                    repository.delete(contato);
                return Void.TYPE;
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return null;
    }
}
