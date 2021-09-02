package com.pi.bookkeeping.dto.account;

import com.pi.bookkeeping.dto.company.CompanyDivisionDTO;
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
    private CompanyDivisionDTO companyDivision;
    private String accountType;
    private Date accountDate;
    private List<AccountItemDTO> accountItems;
    private Long owesAmountTotal;
    private Long requiresAmountTotal;
    private Long saldo;
}
