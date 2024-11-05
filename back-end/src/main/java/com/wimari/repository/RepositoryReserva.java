package com.wimari.repository;
import com.wimari.entities.EntityReserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryReserva extends JpaRepository<EntityReserva, Long>{

}
