package com.wimari.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Entity
@Getter
@ToString
public class EntityWeekDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // E.g., "Monday", "Tuesday", etc.

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    private EntityWeeklySchedule weeklySchedule;

    @OneToMany(mappedBy = "weekDay")
    private List<EntityTimeSlot> timeSlots;

    // Getters and Setters
}
