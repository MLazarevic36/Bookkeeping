package com.pi.bookkeeping.dto.company;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.dto.account.AccountDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CompanyDivisionDTO implements Serializable {

    private Long id;
    private String name;
    private Long company;
//    private List<AccountDTO> accounts;

}
