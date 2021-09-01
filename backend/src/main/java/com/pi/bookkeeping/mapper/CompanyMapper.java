package com.pi.bookkeeping.mapper;

import com.pi.bookkeeping.dto.CompanyDTO;
import com.pi.bookkeeping.dto.UserDTO;
import com.pi.bookkeeping.model.Company;
import com.pi.bookkeeping.model.Role;
import com.pi.bookkeeping.model.User;
import com.pi.bookkeeping.security.UserPrincipal;
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

    public CompanyDTO convertToDto(Company company) {
        return modelMapper.map(company, CompanyDTO.class);
    }

    public List<CompanyDTO> convertToDtos(Page<Company> companyPage) {
        return companyPage.stream().map(this::convertToDto).collect(Collectors.toList());
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


