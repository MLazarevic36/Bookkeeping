package com.pi.bookkeeping.controller.account;

import com.pi.bookkeeping.dto.PagedResponse;
import com.pi.bookkeeping.dto.account.AnalyticCardDTO;
import com.pi.bookkeeping.dto.account.MainBookDTO;
import com.pi.bookkeeping.mapper.account.AnalyticCardMapper;
import com.pi.bookkeeping.mapper.account.MainBookMapper;
import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.MainBook;
import com.pi.bookkeeping.service.account.AnalyticCardService;
import com.pi.bookkeeping.service.account.MainBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/main-book")
public class MainBookController {
    @Autowired
    private MainBookMapper mainBookMapper;

    @Autowired
    private MainBookService mainBookService;

    @Autowired
    private AnalyticCardService analyticCardService;

    @Autowired
    private AnalyticCardMapper analyticCardMapper;

    @GetMapping(value = "/page/{companyId}")
    public PagedResponse<AnalyticCardDTO> getMainBookPage(Pageable pageable, @PathVariable("companyId") Long id) {

        Page<AnalyticCard> analyticCards = analyticCardService.findAllByMainBook(pageable, id);

        return new PagedResponse<>(
                analyticCardMapper.convertToDtos(analyticCards),
                pageable.getPageNumber(),
                pageable.getPageSize(),
                analyticCards.getTotalElements(),
                analyticCards.getTotalPages());
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<MainBookDTO> getMainBookByCompany(@PathVariable("id") Long id) {
        try {
            MainBook contoPlan = mainBookService.findByCompany(id);
            return new ResponseEntity<>(mainBookMapper.convertToDto(contoPlan),
                    HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
