package com.pi.bookkeeping.controller.company;

import com.pi.bookkeeping.dto.company.CompanyDTO;
import com.pi.bookkeeping.mapper.company.CompanyMapper;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.service.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private CompanyMapper companyMapper;

    @GetMapping(value = "/{id}")
    public ResponseEntity<CompanyDTO> getCompany(@PathVariable("id") Long id) {
        try {
            Company company = companyService.findOne(id);
            return new ResponseEntity<>(companyMapper.convertToDto(company), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
