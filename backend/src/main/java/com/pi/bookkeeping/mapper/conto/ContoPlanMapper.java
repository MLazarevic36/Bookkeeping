package com.pi.bookkeeping.mapper.conto;

import com.pi.bookkeeping.dto.conto.ContoPlanDTO;
import com.pi.bookkeeping.model.conto.ContoPlan;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ContoPlanMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ContoPlanDTO convertToDto(ContoPlan contoPlan) {
        return modelMapper.map(contoPlan, ContoPlanDTO.class);
    }

    public List<ContoPlanDTO> convertToDtos(Page<ContoPlan> contoPlanPage) {
        return contoPlanPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public ContoPlan convertToEntity(ContoPlanDTO contoPlanDTO) {
        return modelMapper.map(contoPlanDTO, ContoPlan.class);
    }

    public List<ContoPlan> convertToEntities(Collection<ContoPlanDTO> contoPlanDTOS) {
        return contoPlanDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
