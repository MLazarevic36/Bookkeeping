package com.pi.bookkeeping.controller.conto;

import com.pi.bookkeeping.dto.PagedResponse;
import com.pi.bookkeeping.dto.conto.ContoClassDTO;
import com.pi.bookkeeping.dto.conto.ContoDTO;
import com.pi.bookkeeping.dto.conto.ContoPlanDTO;
import com.pi.bookkeeping.mapper.conto.ContoClassMapper;
import com.pi.bookkeeping.mapper.conto.ContoMapper;
import com.pi.bookkeeping.mapper.conto.ContoPlanMapper;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    private ContoPlanMapper contoPlanMapper;

    @Autowired
    private ContoPlanService contoPlanService;

    @GetMapping(value = "/plan/{contoPlanId}")
    public PagedResponse<ContoDTO> getContos(Pageable pageable, @PathVariable("contoPlanId") Long id) {

            Page<Conto> contos = contoService.findAllByPlanId(pageable, id);

            return new PagedResponse<ContoDTO>(
                    contoMapper.convertToDtos(contos),
                    contos.getPageable().getPageNumber(),
                    contos.getPageable().getPageSize(),
                    contos.getTotalElements(),
                    contos.getTotalPages());
    }

//    @GetMapping(value = "/plan/{id}")
//    public ResponseEntity<ContoPlanDTO> getContoPlanByCompany(@PathVariable("id") Long id) {
//        try {
//            ContoPlan contoPlan = contoPlanService.findByCompany(id);
//            return new ResponseEntity<>(contoPlanMapper.convertToDto(contoPlan),
//                    HttpStatus.OK);
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

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
}
