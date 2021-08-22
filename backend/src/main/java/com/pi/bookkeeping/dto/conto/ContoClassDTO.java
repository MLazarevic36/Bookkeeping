package com.pi.bookkeeping.dto.conto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContoClassDTO implements Serializable {

    private Long id;
    private String classLabel;
    private String className;
    private List<ContoGroupDTO> contoGroups;

}
