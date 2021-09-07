package com.pi.bookkeeping.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.model.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDTO implements Serializable {

    private Long id;
    private String username;
    @JsonIgnore
    private String password;
    private Role role;
    private EmployeeDTO employee;

}
