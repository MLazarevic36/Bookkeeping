package com.pi.bookkeeping.dto.conto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContoSubGroupDTO {

    private Long id;
    private String subGroupLabel;
    private String subGroupName;
    @JsonIgnore
    private ContoGroupDTO contoGroup;
}
