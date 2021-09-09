package com.pi.bookkeeping.dto.account;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountDTO implements Serializable {

    private Long id;
    private Long company;
    private Long companyDivision;
    private String accountType;
    private String accountStatus;
    private Date accountDate;
    private List<AccountItemDTO> accountItems;
    private String owesAmountTotal;
    private String requiresAmountTotal;
    private Long saldo;

}
