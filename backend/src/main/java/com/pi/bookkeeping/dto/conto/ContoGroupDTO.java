package com.pi.bookkeeping.dto.conto;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class ContoGroupDTO implements Serializable {

    private Long id;
    private String groupLabel;
    private String groupName;
    @JsonIgnore
    private ContoClassDTO contoClass;
    private List<ContoSubGroupDTO> contoSubGroups;

}