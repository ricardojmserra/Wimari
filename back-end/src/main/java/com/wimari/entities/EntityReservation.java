package com.wimari.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Getter
@ToString
@EqualsAndHashCode(of = {"id", "date", "time"})
public class EntityReservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String obs;
    private int persons;
    private String name;
    private String lastName;
    private String phone;
    private LocalDate date;

    private LocalTime time;

    EntityReservation() {
    }

    EntityReservation(String obs, int persons, String name, String lastName, String phone, LocalDate date, LocalTime time) {
        this.obs = obs;
        this.persons = persons;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.date = date;
        this.time = time;
    }

    /*
     * Setters Excluded Fields : Id
     */
    public void setObs(String Obs) {
        this.obs = Obs;
    }

    public void setPersons(int Persons) {
        this.persons = Persons;
    }

    public void setName(String Name) {
        this.name = Name;
    }

    public void setLastName(String LastName) {
        this.lastName = LastName;
    }

    public void setPhone(String Phone) {
        this.phone = Phone;
    }

    public void setDate(LocalDate Date) {
        this.date = Date;
    }

    public void setTime(LocalTime Time) {
        this.time = Time;
    }

    // <>

//    @Override
//    public boolean equals(Object o) {
//        if (this == o)
//            return true;
//        else if (!(o instanceof EntityReservation))
//            return false;
//        EntityReservation other = (EntityReservation) o;
//        return other.name.equals(this.name) && other.date.equals(this.date) && other.time.equals(this.time);
//    }
}
