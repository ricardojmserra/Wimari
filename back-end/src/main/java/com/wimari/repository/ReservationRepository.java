package com.wimari.repository;

import com.wimari.app.Reservations;
import com.wimari.entities.EntityReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<EntityReservation, Long> {
}
