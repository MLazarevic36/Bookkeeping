package com.pi.bookkeeping.controller.conto;

import com.pi.bookkeeping.dto.Message;
import com.pi.bookkeeping.dto.PagedResponse;
import com.pi.bookkeeping.dto.company.CompanyDivisionDTO;
import com.pi.bookkeeping.dto.conto.ContoClassDTO;
import com.pi.bookkeeping.dto.conto.ContoDTO;
import com.pi.bookkeeping.dto.conto.ContoPlanDTO;
import com.pi.bookkeeping.mapper.conto.ContoClassMapper;
import com.pi.bookkeeping.mapper.conto.ContoMapper;
import com.pi.bookkeeping.mapper.conto.ContoPlanMapper;
import com.pi.bookkeeping.model.company.CompanyDivision;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoClass;
import com.pi.bookkeeping.model.conto.ContoPlan;
import com.pi.bookkeeping.service.conto.ContoClassService;
import com.pi.bookkeeping.service.conto.ContoPlanService;
import com.pi.bookkeeping.service.conto.ContoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conto")
public class ContoController {

    @Autowired
    private ContoMapper contoMapper;

    @Autowired
    private ContoService contoService;

    @Autowired
    private ContoClassService contoClassService;

    @Autowired
    private ContoClassMapper contoClassMapper;

    @Autowired
    private ContoPlanService contoPlanService;


    @GetMapping(value = "/page/{companyId}")
    public PagedResponse<ContoDTO> getContosPage(Pageable pageable, @PathVariable("companyId") Long id) {

            Page<Conto> contos = contoService.findAllByCompanyPage(pageable, id);

            return new PagedResponse<>(
                    contoMapper.convertToDtos(contos),
                    pageable.getPageNumber(),
                    pageable.getPageSize(),
                    contos.getTotalElements(),
                    contos.getTotalPages());
    }

    @GetMapping(value = "/dropdown/{companyId}")
    public ResponseEntity<List<ContoDTO>> getContosList(@PathVariable("companyId") Long companyId) {
        try {
            List<Conto> contos = contoService.findAllByCompanyList(companyId);
            return new ResponseEntity<>(contoMapper.convertToDtosList(contos), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @GetMapping(value = "/classes")
    public ResponseEntity<List<ContoClassDTO>> getContoClasses(Pageable pageable) {
        try {
            Page<ContoClass> contoClasses = contoClassService.findAll(pageable);
            return new ResponseEntity<>(contoClassMapper.convertToDtos(contoClasses),
                    HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Message> addConto(@RequestBody ContoDTO contoDTO) {
        ContoPlan contoPlan = contoPlanService.findByCompany(contoDTO.getContoPlan());
        contoDTO.setContoPlan(contoPlan.getId());
        Conto conto = contoMapper.convertToEntity(contoDTO);
        try {
            conto = contoService.save(conto);
            return new ResponseEntity<>(new Message("Uspešno ste dodali konto u kontni plan.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity<Message> updateConto(@RequestBody ContoDTO contoDTO) {
        Conto conto = contoMapper.convertToEntity(contoDTO);
        try {
            conto = contoService.update(conto);
            return new ResponseEntity<>(new Message("Uspešno ste izmenili konto.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Message> deleteConto(@PathVariable("id") Long id) {
        try {
            contoService.delete(id);
            return new ResponseEntity<>(new Message("Uspešno ste obrisali konto.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }
}
