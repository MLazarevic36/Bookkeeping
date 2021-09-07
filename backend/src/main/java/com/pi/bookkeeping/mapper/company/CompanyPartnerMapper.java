package com.pi.bookkeeping.mapper.company;

import com.pi.bookkeeping.dto.company.CompanyPartnerDTO;
import com.pi.bookkeeping.model.company.CompanyPartner;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CompanyPartnerMapper {

    @Autowired
    private ModelMapper modelMapper;

    public CompanyPartnerDTO convertToDto(CompanyPartner companyPartner) {
        CompanyPartnerDTO companyPartnerDTO = new CompanyPartnerDTO();
        companyPartnerDTO.setId(companyPartner.getId());
        companyPartnerDTO.setName(companyPartner.getName());
        companyPartnerDTO.setCompany(companyPartner.getCompany().getId());
        return companyPartnerDTO;
    }

    public List<CompanyPartnerDTO> convertToDtosList(List<CompanyPartner> companyPartnerList) {
        return companyPartnerList.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public CompanyPartner convertToEntity(CompanyPartnerDTO companyPartnerDTO) {
        return modelMapper.map(companyPartnerDTO, CompanyPartner.class);
    }

    public List<CompanyPartner> convertToEntities(Collection<CompanyPartnerDTO> companyPartnerDTOS) {
        return companyPartnerDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}