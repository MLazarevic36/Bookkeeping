package com.pi.bookkeeping.controller.company;

import com.pi.bookkeeping.dto.company.CompanyDTO;
import com.pi.bookkeeping.dto.company.CompanyDivisionDTO;
import com.pi.bookkeeping.dto.company.CompanyPartnerDTO;
import com.pi.bookkeeping.mapper.EmployeeMapper;
import com.pi.bookkeeping.mapper.company.CompanyDivisionMapper;
import com.pi.bookkeeping.mapper.company.CompanyMapper;
import com.pi.bookkeeping.mapper.company.CompanyPartnerMapper;
import com.pi.bookkeeping.model.Employee;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyDivision;
import com.pi.bookkeeping.model.company.CompanyPartner;
import com.pi.bookkeeping.service.company.CompanyDivisionService;
import com.pi.bookkeeping.service.company.CompanyPartnerService;
import com.pi.bookkeeping.service.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private CompanyMapper companyMapper;

    @Autowired
    private CompanyDivisionService companyDivisionService;

    @Autowired
    private CompanyDivisionMapper companyDivisionMapper;

    @Autowired
    private CompanyPartnerService companyPartnerService;

    @Autowired
    private CompanyPartnerMapper companyPartnerMapper;


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

    @GetMapping
    public ResponseEntity<List<CompanyDTO>> getCompanies() {
        try {
            List<Company> companies = companyService.findAllList();
            return new ResponseEntity<>(companyMapper.convertToDtosList(companies), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/divisions/{companyId}")
    public ResponseEntity<List<CompanyDivisionDTO>> getCompanyDivisions(@PathVariable("companyId") Long companyId) {
        try {
            List<CompanyDivision> companyDivisions = companyDivisionService.getAllByCompany(companyId);
            return new ResponseEntity<>(companyDivisionMapper.convertToDtosList(companyDivisions), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/partners/{companyId}")
    public ResponseEntity<List<CompanyPartnerDTO>> getCompanyPartners(@PathVariable("companyId") Long companyId) {
        try {
            List<CompanyPartner> companyPartners = companyPartnerService.getAllByCompany(companyId);
            return new ResponseEntity<>(companyPartnerMapper.convertToDtosList(companyPartners), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
