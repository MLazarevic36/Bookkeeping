package com.pi.bookkeeping.mapper.conto;

import com.pi.bookkeeping.dto.conto.ContoGroupDTO;
import com.pi.bookkeeping.model.conto.ContoGroup;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ContoGroupMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ContoGroupDTO convertToDto(ContoGroup contoGroup) {
        return modelMapper.map(contoGroup, ContoGroupDTO.class);
    }

    public List<ContoGroupDTO> convertToDtos(Page<ContoGroup> contoGroupPage) {
        return contoGroupPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public ContoGroup convertToEntity(ContoGroupDTO contoGroupDTO) {
        return modelMapper.map(contoGroupDTO, ContoGroup.class);
    }

    public List<ContoGroup> convertToEntities(Collection<ContoGroupDTO> contoGroupDTOS) {
        return contoGroupDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
