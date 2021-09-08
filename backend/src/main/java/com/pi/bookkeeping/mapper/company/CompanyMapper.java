package com.pi.bookkeeping.mapper.company;

import com.pi.bookkeeping.dto.company.CompanyDTO;
import com.pi.bookkeeping.mapper.EmployeeMapper;
import com.pi.bookkeeping.model.company.Company;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CompanyMapper {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EmployeeMapper employeeMapper;

    @Autowired
    private CompanyDivisionMapper companyDivisionMapper;

    public CompanyDTO convertToDto(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setId(company.getId());
        companyDTO.setName(company.getName());
        companyDTO.setEmployees(employeeMapper.convertToDtos(company.getEmployees()));
        companyDTO.setCompanyDivisions(companyDivisionMapper.convertToDtosList(company.getCompanyDivisions()));
        companyDTO.setContoPlan(company.getContoPlan().getId());
        return companyDTO;
    }

    public List<CompanyDTO> convertToDtos(Page<Company> companyPage) {
        return companyPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<CompanyDTO> convertToDtosList(List<Company> companyList) {
        return companyList.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public Company convertToEntity(CompanyDTO companyDTO) {
        return modelMapper.map(companyDTO, Company.class);
    }

    public List<Company> convertToEntities(Collection<CompanyDTO> companyDTOS) {
        return companyDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}


