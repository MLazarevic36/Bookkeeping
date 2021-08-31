package com.pi.bookkeeping.controller;

import com.pi.bookkeeping.dto.conto.ContoClassDTO;
import com.pi.bookkeeping.dto.conto.ContoDTO;
import com.pi.bookkeeping.mapper.conto.ContoClassMapper;
import com.pi.bookkeeping.mapper.conto.ContoMapper;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoClass;
import com.pi.bookkeeping.service.conto.ContoClassService;
import com.pi.bookkeeping.service.conto.ContoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping
    public ResponseEntity<List<ContoDTO>> getContos(Pageable pageable) {
        try {
            Page<Conto> contos = contoService.findAll(pageable);
            System.out.println(pageable);
            return new ResponseEntity<>(contoMapper.convertToDtos(contos),
                    HttpStatus.OK);
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
}
