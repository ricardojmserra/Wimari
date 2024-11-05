package com.wimari.dto;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Setter
@Getter
@AllArgsConstructor
public class CreateReservationDTO {

    @NotEmpty(message = "Nome não pode ser null")
    private String name;
    @NotEmpty(message = "Último Nome não pode ser null")
    private String lastName;
    @NotEmpty(message = "Contacto não pode ser null")
    //@Pattern(regexp = "^(\\\\+\\\\d{1,3}( )?)?((\\\\(\\\\d{1,3}\\\\))|\\\\d{1,3})[- .]?\\\\d{3,4}[- .]?\\\\d{4}$", message = "Estilo de contacto invalido")
    private String phone;
    @Pattern(regexp = "^[A-Za-z0-9 ]*$", message = "Observações tem que ser texto simples (letras e numeros).")
    private String obs;
    @Positive(message = "Número de pessoas não pode ser negativo nem zero")
    private int persons;
    @FutureOrPresent(message = "Datas de reserva não pode ser feita para datas passadas")
    private LocalDate date;
    // TODO: validar
    private LocalTime time;
}
