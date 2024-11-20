package com.wimari.app;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wimari.entities.EntityHoliday;
import com.wimari.managers.ManagerEntityHoliday;

@RestController
@RequestMapping("/management/holidays")
public class HolidayController {

    @Autowired
    private ManagerEntityHoliday managerEntityHoliday;

    @GetMapping("/{month}")
    public ResponseEntity<?> getHolidaysByMonth(@PathVariable int month) {
        if (month < 1 || month > 12) {
            return ResponseEntity.badRequest().body("Invalid month. Please provide a value between 1 and 12.");
        }
        List<EntityHoliday> holidays = managerEntityHoliday.findHolidaysByMonth(month);
        return ResponseEntity.ok(holidays);
    }
}
