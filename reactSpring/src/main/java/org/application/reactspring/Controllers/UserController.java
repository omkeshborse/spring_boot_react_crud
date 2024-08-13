package org.application.reactspring.Controllers;

import org.application.reactspring.Service.UserServices;
import org.application.reactspring.exceptions.UserNotFoundException;
import org.application.reactspring.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    UserServices userServices;

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userServices.registerUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {


        return  userServices.getAllUsers();
    }
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable String id) {
        return  userServices.getUserById(id) ;
    }


    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User updateuser, @PathVariable String id) {


        return userServices.UpdateUserByID(updateuser , id) ;
    }

    @DeleteMapping("/user/{id}" )
    public String deleteUser(@PathVariable String id) {
        if (userServices.getUserById(id) == null) {
            throw new UserNotFoundException(id);
        }else {
            userServices.deleteUserById(id);
        return "user with '"+id+"' deleted successfully ";
        }
    }

}
