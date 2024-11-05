package com.wimari.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

@Entity
@Getter
@ToString
public class EntityTimeSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String slotTime; // E.g., "09:00-10:00"

    @ManyToOne
    @JoinColumn(name = "day_id")
    private EntityWeekDay weekDay;

    // Getters and Setters
}
