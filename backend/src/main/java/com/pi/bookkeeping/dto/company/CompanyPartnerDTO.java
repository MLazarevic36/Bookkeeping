package com.pi.bookkeeping.dto.company;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CompanyPartnerDTO implements Serializable {

    private Long id;
    private String name;
    private Long company;
//    private List<AccountDTO> accounts;

}
