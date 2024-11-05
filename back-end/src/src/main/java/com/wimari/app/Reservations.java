package com.wimari.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

import com.wimari.entities.EntityReservation;
import com.wimari.managers.ManagerEntityReservation;
@RestController
@RequestMapping("/Reservations")
public class Reservations {
	@Autowired
	private ManagerEntityReservation manager;
	
	
	@PostMapping("/NewReservation")
	public String NewReservation(@Valid @RequestBody EntityReservation dataObject, BindingResult result) {
		if (result.hasErrors()) {
			// Collecting all field errors
            List<String> errorMessages = result.getFieldErrors().stream()
                    .map(error -> "Field '" + error.getField() + "' " + error.getDefaultMessage() + "\n")
                    .collect(Collectors.toList());

            // Collecting global errors (if any)
            List<String> globalErrorMessages = result.getGlobalErrors().stream()
                    .map(ObjectError::getDefaultMessage)
                    .collect(Collectors.toList());

            // Combine all errors
            errorMessages.addAll(globalErrorMessages);

            // Return error messages as a single string (or JSON response)
            return "Validation failed: " + String.join(", ", errorMessages) + "\n" + dataObject.toString();
        }
		manager.save(dataObject);
		return "Received Data : " + dataObject.toString();
	}
	
	@GetMapping("/FindReservation")
	public String FindReservation() {
		List<EntityReservation> output = manager.findReservationByFullName("João", "Miguel");
		String Result = "";
		if(output.size() == 0)
			return "No Reservations Found";
		for(EntityReservation i : output)
			Result += i.toString() + "\n";
		return Result;
	}

}
