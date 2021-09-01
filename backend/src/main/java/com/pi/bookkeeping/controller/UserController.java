package com.pi.bookkeeping.controller;

import com.pi.bookkeeping.dto.UserDTO;
import com.pi.bookkeeping.mapper.UserMapper;
import com.pi.bookkeeping.security.CurrentUser;
import com.pi.bookkeeping.security.UserPrincipal;
import com.pi.bookkeeping.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/me")
    public UserDTO getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        currentUser = (UserPrincipal) auth.getPrincipal();

        return userMapper.convertPrincipalToDto(currentUser);
    }

}
