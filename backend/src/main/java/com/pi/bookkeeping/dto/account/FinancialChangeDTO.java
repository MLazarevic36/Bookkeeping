package com.pi.bookkeeping.dto.account;

import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.FinancialChangeDirection;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class FinancialChangeDTO {

    private Long id;
    private Long analyticCard;
    private Date date;
    private String financialChangeDirection;
    private Long amount;
    private String description;

}
