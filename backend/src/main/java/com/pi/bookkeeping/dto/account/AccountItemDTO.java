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
    private String contoLabel;
    private String contoDescription;
    private AccountDTO account;
    private String partner;
    private Long owesAmount;
    private Long requiresAmount;
    private String document_number;
    private Date documentDate;
    private Date currencyDate;
}
