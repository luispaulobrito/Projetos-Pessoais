package io.github.luispaulo.contatos.model.repository;

import io.github.luispaulo.contatos.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
}
