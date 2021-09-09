package com.pi.bookkeeping.dto.report;

import com.pi.bookkeeping.model.account.ReportType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReportDTO {

    private ReportType reportType;
    private Long contoId;
    private Long accountId;

}
