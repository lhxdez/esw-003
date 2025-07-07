package br.com.pecepoli.demo.domain;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UuidGenerator;

import java.sql.Types;
import java.util.UUID;

@Entity
@Table(name = "ITEMS_PACOTE")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class ItemPacote {

    @Id
    @Column(name = "ID")
    @JdbcTypeCode(Types.VARCHAR)
    @UuidGenerator
    private UUID id;

    @Column(name = "PRECO")
    private double preco;

    public void setPreco(double preco) { this.preco = preco; }

    public double getPreco() { return this.preco; }
}
