package com.pi.bookkeeping.dto.report;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnalyticCardResponse {

    private Long conto;
    private List<AnalyticCardItem> items;
    private Long totalOwes;
    private Long totalRequires;

}
