package com.wimari.managers;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import com.wimari.entities.EntityReservation;

@Service
public class ManagerEntityReservation {
	
	@PersistenceContext
    private EntityManager entityManager;
	
	
	@Transactional
    public EntityReservation save(EntityReservation reservation) {
        entityManager.persist(reservation);
        return reservation;
    }
	@Transactional
	public List<EntityReservation> findReservationByFullName(String name, String lastName) {
	    String jpql = "SELECT u FROM EntityReservation u WHERE u.name = :name AND u.lastName = :lastName";
	    TypedQuery<EntityReservation> query = entityManager.createQuery(jpql, EntityReservation.class);
	    query.setParameter("name", name);
	    query.setParameter("lastName", lastName);
	    return query.getResultList();
	}

}
