package com.pi.bookkeeping.dto;

import com.pi.bookkeeping.dto.conto.ContoPlanDTO;
import com.pi.bookkeeping.model.Employee;
import com.pi.bookkeeping.model.conto.ContoPlan;

import javax.persistence.*;
import java.util.List;

public class CompanyDTO {

    private Long id;
    private String name;
    private List<EmployeeDTO> employees;
    private ContoPlanDTO contoPlan;
}
