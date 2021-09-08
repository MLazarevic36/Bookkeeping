package com.pi.bookkeeping.dto.account;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.model.account.Account;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountItemDTO implements Serializable {

    private Long id;
    private Long conto;
    private Long partner;
    private String description;
    private Long owesAmount;
    private Long requiresAmount;
    private Long documentNumber;
    private Date documentDate;
    private Date currencyDate;
    private Long account;
    private Long saldo;
}
