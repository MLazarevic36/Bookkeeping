package com.pi.bookkeeping.dto;

import com.pi.bookkeeping.dto.company.CompanyDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EmployeeDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String jmbg;
    private String address;
    private UserDTO user;
    private CompanyDTO company;
}





