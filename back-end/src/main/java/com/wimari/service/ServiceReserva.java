package com.wimari.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.wimari.repository.RepositoryReserva;
import com.wimari.entities.EntityReserva;

@Service
public class ServiceReserva {
    @Autowired
    private RepositoryReserva reservaRepository;

    public List<EntityReserva> getAllReservas() {
        return reservaRepository.findAll();
    }

    public EntityReserva saveReserva(EntityReserva reserva) {
        return reservaRepository.save(reserva);
    }

    // Additional methods as needed
}
