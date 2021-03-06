package com.pi.bookkeeping.dto.conto;

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
    private Long company;
    private List<ContoDTO> contos;

}
