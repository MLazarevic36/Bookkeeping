package com.pi.bookkeeping.dto.conto;

import com.pi.bookkeeping.dto.CompanyDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContoPlanDTO {

    private Long id;
    private CompanyDTO company;
    private List<ContoDTO> contos;

}
