package com.pi.bookkeeping.mapper.account;

import com.pi.bookkeeping.dto.account.AccountItemDTO;
import com.pi.bookkeeping.model.account.AccountItem;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class AccountItemMapper {

    @Autowired
    private ModelMapper modelMapper;

    public AccountItemDTO convertToDto(AccountItem accountItem) {
        return modelMapper.map(accountItem, AccountItemDTO.class);
    }

    public List<AccountItemDTO> convertToDtos(Page<AccountItem> accountItemPage) {
        return accountItemPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public AccountItem convertToEntity(AccountItemDTO accountItemDTO) {
        return modelMapper.map(accountItemDTO, AccountItem.class);
    }

    public List<AccountItem> convertToEntities(Collection<AccountItemDTO> accountItemDTOS) {
        return accountItemDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}
