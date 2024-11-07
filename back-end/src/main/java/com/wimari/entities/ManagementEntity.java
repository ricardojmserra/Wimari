package com.wimari.entit1ies;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.ToString;

@Entity
@Getter
@ToString
public class ManagementEntity {

    @Id 
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private boolean status;
    private boolean halfDay;

    ManagementEntity(LocalDate date, boolean status, boolean halfDay ){
        this.date = date;
        this.status = status;
        this.halfDay = halfDay;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public void setHalfDay(boolean halfDay) {
        this.halfDay = halfDay;
    }
    

    

    
  
}
