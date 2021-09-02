package com.pi.bookkeeping.mapper.company;

import com.pi.bookkeeping.dto.company.CompanyDTO;
import com.pi.bookkeeping.dto.company.CompanyDivisionDTO;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyDivision;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CompanyDivisionMapper {

    @Autowired
    private ModelMapper modelMapper;

    public CompanyDivisionDTO convertToDto(CompanyDivision companyDivision) {
        return modelMapper.map(companyDivision, CompanyDivisionDTO.class);
    }

    public List<CompanyDivisionDTO> convertToDtos(Page<CompanyDivision> companyDivisionPage) {
        return companyDivisionPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public CompanyDivision convertToEntity(CompanyDivisionDTO companyDivisionDTO) {
        return modelMapper.map(companyDivisionDTO, CompanyDivision.class);
    }

    public List<CompanyDivision> convertToEntities(Collection<CompanyDivisionDTO> companyDivisionDTOS) {
        return companyDivisionDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}