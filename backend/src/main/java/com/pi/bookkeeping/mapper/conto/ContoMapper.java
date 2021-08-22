package com.pi.bookkeeping.mapper.conto;

import com.pi.bookkeeping.dto.conto.ContoDTO;
import com.pi.bookkeeping.model.conto.Conto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ContoMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ContoDTO convertToDto(Conto conto) {
        return modelMapper.map(conto, ContoDTO.class);
    }

    public List<ContoDTO> convertToDtos(Page<Conto> contoPage) {
        return contoPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public Conto convertToEntity(ContoDTO contoDTO) {
        return modelMapper.map(contoDTO, Conto.class);
    }

    public List<Conto> convertToEntities(Collection<ContoDTO> contoDTOS) {
        return contoDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
