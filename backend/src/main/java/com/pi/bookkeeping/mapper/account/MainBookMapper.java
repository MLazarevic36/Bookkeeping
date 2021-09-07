package com.pi.bookkeeping.mapper.account;

import com.pi.bookkeeping.dto.account.MainBookDTO;
import com.pi.bookkeeping.mapper.conto.ContoMapper;
import com.pi.bookkeeping.model.account.MainBook;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class MainBookMapper {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private AnalyticCardMapper analyticCardMapper;

    public MainBookDTO convertToDto(MainBook mainBook) {
        MainBookDTO mainBookDTO = new MainBookDTO();
        mainBookDTO.setId(mainBook.getId());
        mainBookDTO.setCompany(mainBook.getCompany().getId());
        mainBookDTO.setAnalyticCards(analyticCardMapper.convertToDtosList(mainBook.getAnalyticCards()));
        return mainBookDTO;
    }

    public List<MainBookDTO> convertToDtos(Page<MainBook> mainBookPage) {
        return mainBookPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public MainBook convertToEntity(MainBookDTO mainBookDTO) {
        return modelMapper.map(mainBookDTO, MainBook.class);
    }

    public List<MainBook> convertToEntities(Collection<MainBookDTO> mainBookDTOS) {
        return mainBookDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }
}

