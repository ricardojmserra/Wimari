package com.example.Wimari;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
// public class WimariApplication {

// 	public static void main(String[] args) {
// 		SpringApplication.run(WimariApplication.class, args);
// 	}
// 	@GetMapping("/hello")
//     public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
//       return String.format("Hello %s!", name);
//     }

// }
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public  class  Main{
	public static void main (String[], args){
		SpringApplication.run(Main.class, args);

	}
}
