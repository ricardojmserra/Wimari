package com.wimari.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Getter
@ToString
public class EntityReserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime reservationTime;

    @ManyToOne
    @JoinColumn(name = "mesa_id")
    private MesaEntity mesa;

    @ManyToOne
    @JoinColumn(name = "timeslot_id")
    private EntityTimeSlot timeSlot;

    // Getters and Setters
}
