package com.pi.bookkeeping.mapper.conto;

import com.pi.bookkeeping.dto.conto.ContoDTO;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.model.conto.ContoPlan;
import com.pi.bookkeeping.model.conto.ContoStatus;
import com.pi.bookkeeping.model.conto.ContoType;
import com.pi.bookkeeping.service.conto.ContoPlanService;
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

    @Autowired
    private ContoPlanService contoPlanService;

    public ContoDTO convertToDto(Conto conto) {
        ContoDTO contoDTO = new ContoDTO();
        contoDTO.setId(conto.getId());
        contoDTO.setLabel(conto.getLabel());
        contoDTO.setType(String.valueOf(conto.getType()));
        contoDTO.setStatus(String.valueOf(conto.getStatus()));
        contoDTO.setDescription(conto.getDescription());
        contoDTO.setContoPlan(conto.getContoPlan().getId());
        return contoDTO;
    }

    public List<ContoDTO> convertToDtos(Page<Conto> contoPage) {
        return contoPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<ContoDTO> convertToDtosList(List<Conto> contoList) {
        return contoList.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public Conto convertToEntity(ContoDTO contoDTO) {
        ContoPlan contoPlan = contoPlanService.findOne(contoDTO.getContoPlan());
        Conto conto = new Conto();
        conto.setId(contoDTO.getId());
        conto.setLabel(contoDTO.getLabel());
        conto.setDescription(contoDTO.getDescription());
        conto.setType(ContoType.valueOf(contoDTO.getType()));
        conto.setStatus(ContoStatus.valueOf(contoDTO.getStatus()));
        conto.setContoPlan(contoPlan);
        return conto;
    }

    public List<Conto> convertToEntities(Collection<ContoDTO> contoDTOS) {
        return contoDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}
