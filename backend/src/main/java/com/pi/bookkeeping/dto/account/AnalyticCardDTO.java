package com.pi.bookkeeping.dto.account;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnalyticCardDTO {

    private Long id;
    private Long conto;
    private List<FinancialChangeDTO> financialChanges;
    private Long mainBook;
    private Long owesAmountTotal;
    private Long requiresAmountTotal;
    private Long saldo;
}
