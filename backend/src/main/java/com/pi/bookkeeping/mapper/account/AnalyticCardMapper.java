package com.pi.bookkeeping.mapper.account;

import com.pi.bookkeeping.dto.account.AnalyticCardDTO;
import com.pi.bookkeeping.model.account.AnalyticCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class AnalyticCardMapper {

    @Autowired
    private FinancialChangeMapper financialChangeMapper;

    public AnalyticCardDTO convertToDto(AnalyticCard analyticCard) {
        AnalyticCardDTO analyticCardDTO = new AnalyticCardDTO();
        analyticCardDTO.setId(analyticCard.getId());
        analyticCardDTO.setConto(analyticCard.getConto().getId());
        analyticCardDTO.setMainBook(analyticCard.getMainBook().getId());
        analyticCardDTO.setOwesAmountTotal(analyticCard.getOwesAmountTotal());
        analyticCardDTO.setRequiresAmountTotal(analyticCard.getRequiresAmountTotal());
        analyticCardDTO.setFinancialChanges(financialChangeMapper.convertToDtosList(analyticCard.getFinancialChanges()));

        return analyticCardDTO;
    }

    public List<AnalyticCardDTO> convertToDtos(Page<AnalyticCard> analyticCardPage) {
        return analyticCardPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<AnalyticCardDTO> convertToDtosList(List<AnalyticCard> analyticCardList) {
        return analyticCardList.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public AnalyticCard convertToEntity(AnalyticCardDTO analyticCardDTO) {

        AnalyticCard analyticCard = new AnalyticCard();

        return analyticCard;
    }

    public List<AnalyticCard> convertToEntities(Collection<AnalyticCardDTO> analyticCardDTOS) {
        return analyticCardDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}
