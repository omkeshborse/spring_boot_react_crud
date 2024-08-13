package org.application.reactspring.Dao;

import org.application.reactspring.Service.UserServices;
import org.application.reactspring.exceptions.UserNotFoundException;
import org.application.reactspring.models.User;
import org.application.reactspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDao implements UserServices {
    @Autowired
    private  UserRepository userRepository;


    @Override
    public User registerUser(User user) {
    return  userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public User UpdateUserByID(User newuser,String id) {


        return  userRepository.findById(id).map(user -> {
            user.setName(newuser.getName());
            user.setEmail(newuser.getEmail());
            user.setUsername(newuser.getUsername());
            return  userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    public void deleteUserById(String id){
        userRepository.deleteById(id);
    };

}
