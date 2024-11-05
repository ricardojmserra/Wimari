package com.wimari;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.Banner;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
    	//Disable auto-restart property
    	//System.setProperty("spring.devtools.restart.enabled", "false");
    	//Disable Live-Reload property
    	//System.setProperty("spring.devtools.livereload.enabled", "false");
    	SpringApplication app = new SpringApplication(Application.class);
        app.setBannerMode(Banner.Mode.OFF);
        app.run(args);
    }

}