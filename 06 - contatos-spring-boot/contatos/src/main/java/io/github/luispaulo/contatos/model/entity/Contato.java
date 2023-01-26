package io.github.luispaulo.contatos.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Contato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 150)

    private String nome;
    @Column(nullable = false, length = 11)

    private String telefone;
    @Column

    private String endereco;
    @Column(name = "data_cadastro", updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;

    @PrePersist
    public void prePersist(){
        setDataCadastro(LocalDate.now());
    }
}
