package com.pi.bookkeeping.dto.report;

import com.pi.bookkeeping.model.account.AccountType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnalyticCardItem {

    private Long id;
    private Date accountDate;
    private Date documentDate;
    private Long documentNumber;
    private AccountType accountType;
    private Long accountId;
    private Long owes;
    private Long requires;
    private Long saldo;
}
