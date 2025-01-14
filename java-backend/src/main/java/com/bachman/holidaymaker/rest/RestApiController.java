package com.bachman.holidaymaker.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bachman.holidaymaker.repository.UserRepository;

@RestController
@RequestMapping("api/public")
public class RestApiController {
    private UserRepository userRepository;

    public RestApiController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

        @GetMapping("test1")
        public String test1(){
        return "API Test 1";
        }

        @GetMapping("test2")
        public String test2(){
        return "API Test 2";
    }

}