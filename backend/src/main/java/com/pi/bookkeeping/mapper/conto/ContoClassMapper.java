package com.pi.bookkeeping.mapper.conto;

import com.pi.bookkeeping.dto.conto.ContoClassDTO;
import com.pi.bookkeeping.model.conto.ContoClass;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ContoClassMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ContoClassDTO convertToDto(ContoClass contoClass) {
        return modelMapper.map(contoClass, ContoClassDTO.class);
    }

    public List<ContoClassDTO> convertToDtos(Page<ContoClass> contoClassPage) {
        return contoClassPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public ContoClass convertToEntity(ContoClassDTO contoClassDTO) {
        return modelMapper.map(contoClassDTO, ContoClass.class);
    }

    public List<ContoClass> convertToEntities(Collection<ContoClassDTO> contoClassDTOS) {
        return contoClassDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
