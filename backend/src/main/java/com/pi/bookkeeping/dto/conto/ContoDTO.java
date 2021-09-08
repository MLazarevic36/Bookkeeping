package com.pi.bookkeeping.dto.conto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContoDTO implements Serializable {

    private Long id;
    private String label;
    private String description;
    private String status;
    private String type;
    private Long contoPlan;

}
