package io.github.luispaulo.contatos.rest;

import io.github.luispaulo.contatos.model.entity.Contato;
import io.github.luispaulo.contatos.model.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("{id}")
    public Contato acharPorId( @PathVariable Integer id){
        return repository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    public List<Contato> obterTodos(){
        return repository.findAll();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Contato deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map( contato -> {
                    repository.delete(contato);
                return Void.TYPE;                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return null;
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar( @PathVariable Integer id, @RequestBody Contato contatoAtualizado){
        repository
                .findById(id)
                .map( contato -> {
                    contato.setNome(contatoAtualizado.getNome());
                    contato.setTelefone(contatoAtualizado.getTelefone());
                    contato.setEndereco(contatoAtualizado.getEndereco());
                    contato.setContatoEmergencia(contatoAtualizado.getContatoEmergencia());
                    return repository.save(contato);
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
    }
}
