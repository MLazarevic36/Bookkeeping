package com.pi.bookkeeping.dto.company;

import com.pi.bookkeeping.dto.EmployeeDTO;
import com.pi.bookkeeping.dto.conto.ContoPlanDTO;
import com.pi.bookkeeping.model.Employee;
import com.pi.bookkeeping.model.conto.ContoPlan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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
    private ContoPlanDTO contoPlan;
}
