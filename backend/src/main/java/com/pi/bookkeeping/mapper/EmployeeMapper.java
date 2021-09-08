package com.pi.bookkeeping.mapper;

import com.pi.bookkeeping.dto.EmployeeDTO;
import com.pi.bookkeeping.model.Employee;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class EmployeeMapper {

    @Autowired
    private ModelMapper modelMapper;

    public EmployeeDTO convertToDto(Employee employee) {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setId(employee.getId());
        employeeDTO.setAddress(employee.getAddress());
        employeeDTO.setFirstName(employee.getFirstName());
        employeeDTO.setJmbg(employee.getJmbg());
        employeeDTO.setLastName(employee.getLastName());
        employeeDTO.setCompany(employee.getCompany().getId());
        employeeDTO.setUser(employee.getUser().getId());
        return employeeDTO;
    }

    public List<EmployeeDTO> convertToDtos(List<Employee> employeePage) {
        return employeePage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public Employee convertToEntity(EmployeeDTO employeeDTO) {
        return modelMapper.map(employeeDTO, Employee.class);
    }

    public List<Employee> convertToEntities(Collection<EmployeeDTO> employeeDTOS) {
        return employeeDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}
