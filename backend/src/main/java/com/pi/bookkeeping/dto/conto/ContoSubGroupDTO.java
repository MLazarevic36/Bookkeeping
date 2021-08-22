package com.pi.bookkeeping.dto.conto;

import com.pi.bookkeeping.model.conto.ContoGroup;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContoSubGroupDTO {

    private Long id;
    private String subGroupLabel;
    private String subGroupName;
    private ContoGroupDTO contoGroup;
}
