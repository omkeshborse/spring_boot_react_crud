package org.application.reactspring.Service;

import org.application.reactspring.models.User;

import java.util.List;

public interface UserServices {

    public User registerUser(User user);

    public List<User> getAllUsers();

    public User getUserById(String id);

    public User UpdateUserByID(User newuser,String id);

    public void deleteUserById(String id);

}
