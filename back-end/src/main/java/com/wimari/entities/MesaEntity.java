package com.wimari.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Entity
@Getter
@ToString
public class MesaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mesaNumber;

    @OneToMany(mappedBy = "mesa")
    private List<EntityReserva> reservas;

    // Getters and Setters
}
