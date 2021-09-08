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
public class MainBookDTO {

    private Long id;
    private Long company;
    private List<AnalyticCardDTO> analyticCards;

}
