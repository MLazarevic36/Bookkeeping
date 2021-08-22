package com.pi.bookkeeping.mapper.conto;

import com.pi.bookkeeping.dto.conto.ContoSubGroupDTO;
import com.pi.bookkeeping.model.conto.ContoSubGroup;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ContoSubGroupMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ContoSubGroupDTO convertToDto(ContoSubGroup contoSubGroup) {
        return modelMapper.map(contoSubGroup, ContoSubGroupDTO.class);
    }

    public List<ContoSubGroupDTO> convertToDtos(Page<ContoSubGroup> contoSubGroupPage) {
        return contoSubGroupPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public ContoSubGroup convertToEntity(ContoSubGroupDTO contoSubGroupDTO) {
        return modelMapper.map(contoSubGroupDTO, ContoSubGroup.class);
    }

    public List<ContoSubGroup> convertToEntities(Collection<ContoSubGroupDTO> contoSubGroupDTOS) {
        return contoSubGroupDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
