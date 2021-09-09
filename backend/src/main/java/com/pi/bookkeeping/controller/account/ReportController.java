package com.pi.bookkeeping.controller.account;

import com.pi.bookkeeping.dto.Message;
import com.pi.bookkeeping.dto.account.AnalyticCardDTO;
import com.pi.bookkeeping.dto.report.AnalyticCardResponse;
import com.pi.bookkeeping.dto.report.ReportDTO;
import com.pi.bookkeeping.mapper.account.AnalyticCardMapper;
import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.service.account.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private AnalyticCardMapper analyticCardMapper;

    @PostMapping("/analytic-card")
    public ResponseEntity<?> generateAnalyticCardReport(@RequestBody ReportDTO reportDTO) {
        try {
            AnalyticCardResponse analyticCardResponse = reportService.generateAnalyticCardResponse(reportDTO);

            return new ResponseEntity<>(analyticCardResponse, HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

//    @PostMapping("/account")
//    public ResponseEntity<?> generateAccountReport(@RequestBody ReportDTO reportDTO) {
////        try {
////            AnalyticCardResponse analyticCardResponse = reportService.generateAnalyticCardResponse(reportDTO);
////
////            return new ResponseEntity<>(analyticCardResponse, HttpStatus.OK);
////        }catch (Exception ex) {
////            ex.printStackTrace();
////            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
////        }
//    }

}
