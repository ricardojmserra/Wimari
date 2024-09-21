package com.wimari.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;

@Entity
public class EntityReservation {
	private @Id @GeneratedValue Long id;
	@Pattern(regexp = "^[A-Za-z0-9 ]*$", message = "Observações tem que ser texto simples (letras e numeros).")
	private String obs;
	@Positive(message = "Número de pessoas não pode ser negativo nem zero")
	private int persons;
	@NotEmpty(message = "Nome não pode ser null")
	private String name;
	@NotEmpty(message = "Último Nome não pode ser null")
	private String lastName;
	@NotEmpty(message = "Contacto não pode ser null")
	//@Pattern(regexp = "^(\\\\+\\\\d{1,3}( )?)?((\\\\(\\\\d{1,3}\\\\))|\\\\d{1,3})[- .]?\\\\d{3,4}[- .]?\\\\d{4}$", message = "Estilo de contacto invalido")
	private String phone;
	@FutureOrPresent(message = "Datas de reserva não pode ser feita para datas passadas")
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
	 * Getters Excluded Fields :
	 */
	public Long getId() {
		return this.id;
	}

	public String getObs() {
		return this.obs;
	}

	public int getPersons() {
		return this.persons;
	}

	public String getName() {
		return this.name;
	}

	public String getLastName() {
		return this.lastName;
	}

	public String getPhone() {
		return this.phone;
	}

	public LocalDate getDate() {
		return this.date;
	}
	public LocalTime getTime() {
		return this.time;
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

	@Override
	public int hashCode() {
		return Objects.hash(this.id, this.date);
	}
	@Override
	public String toString() {
		return "EntityReservation{"
				+ "id=" + this.id
				+ ", name='" + this.name + "'"
				+ ", lastName='" + this.lastName + "'"
				+ ", persons=" + this.persons
				+ ", phone='" + this.phone + "'"
				+ ", date='" + this.date.toString() + "'"
				+ ", time='" + this.time.toString() + "'"
				+ ", obs='" + this.obs + "'"
				+ "}"
				;
	}
	@Override
	public boolean equals(Object o) {
		if(this == o)
			return true;
		else if (!(o instanceof EntityReservation))
			return false;
		EntityReservation other = (EntityReservation) o;
		return other.name.equals(this.name) && other.date.equals(this.date) && other.time.equals(this.time);
	}

}
