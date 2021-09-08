package com.pi.bookkeeping.dto.company;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.dto.EmployeeDTO;
import com.pi.bookkeeping.dto.conto.ContoPlanDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CompanyDTO implements Serializable {

    private Long id;
    private String name;
    private List<EmployeeDTO> employees;
    private Long contoPlan;
    private List<CompanyDivisionDTO> companyDivisions;
}
