package com.pi.bookkeeping.mapper.account;

import com.pi.bookkeeping.dto.account.FinancialChangeDTO;
import com.pi.bookkeeping.model.account.AnalyticCard;
import com.pi.bookkeeping.model.account.FinancialChange;
import com.pi.bookkeeping.model.account.FinancialChangeDirection;
import com.pi.bookkeeping.service.account.AnalyticCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class FinancialChangeMapper {

    @Autowired
    private AnalyticCardService analyticCardService;

    public FinancialChangeDTO convertToDto(FinancialChange financialChange) {
        FinancialChangeDTO financialChangeDTO = new FinancialChangeDTO();

        financialChangeDTO.setId(financialChange.getId());
        financialChangeDTO.setDescription(financialChange.getDescription());
        financialChangeDTO.setAmount(financialChange.getAmount());
        financialChangeDTO.setDate(financialChange.getDate());
        financialChangeDTO.setAnalyticCard(financialChange.getAnalyticCard().getId());
        financialChangeDTO.setFinancialChangeDirection(String.valueOf(financialChange.getFinancialChangeDirection()));

        return financialChangeDTO;
    }

    public List<FinancialChangeDTO> convertToDtos(Page<FinancialChange> financialChangePage) {
        return financialChangePage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<FinancialChangeDTO> convertToDtosList(List<FinancialChange> financialChangeList) {
        return financialChangeList.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public FinancialChange convertToEntity(FinancialChangeDTO financialChangeDTO) {

        AnalyticCard analyticCard = analyticCardService.findOne(financialChangeDTO.getAnalyticCard());

        FinancialChange financialChange = new FinancialChange();

        financialChange.setId(financialChangeDTO.getId());
        financialChange.setDescription(financialChangeDTO.getDescription());
        financialChange.setAmount(financialChangeDTO.getAmount());
        financialChange.setAnalyticCard(analyticCard);
        financialChange.setFinancialChangeDirection(FinancialChangeDirection.valueOf(financialChangeDTO.getFinancialChangeDirection()));
        financialChange.setDate(financialChangeDTO.getDate());


        return financialChange;
    }

    public List<FinancialChange> convertToEntities(Collection<FinancialChangeDTO> financialChangeDTOS) {
        return financialChangeDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}

