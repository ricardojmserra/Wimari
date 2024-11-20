package com.wimari.managers;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wimari.entities.EntityHoliday;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Service
public class ManagerEntityHoliday {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional(readOnly = true)
    public List<EntityHoliday> findHolidaysByMonth(int month) {
        String jpql = "SELECT h FROM EntityHoliday h WHERE FUNCTION('MONTH', h.holidayDate) = :month";
        TypedQuery<EntityHoliday> query = entityManager.createQuery(jpql, EntityHoliday.class);
        query.setParameter("month", month);
        return query.getResultList();
    }
}
