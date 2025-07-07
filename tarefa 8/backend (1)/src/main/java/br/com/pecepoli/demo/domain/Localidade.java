package br.com.pecepoli.demo.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;

import java.sql.Types;
import java.util.UUID;

@Entity
@Table(name = "LOCALIDADES")
public class Localidade {

    @Id
    @Column(name = "ID")
    @JdbcTypeCode(Types.VARCHAR)
    @UuidGenerator
    private UUID id;

    @Column(name = "DESCRICAO")
    private String descricao;

    public String getDescricao() { return descricao; }

    public void setDescricao(String descricao) {this.descricao = descricao; }

    @Override
    public String toString() {
        return "Localidade{" +
                "descricao='" + descricao + '\'' +
                '}';
    }
}
