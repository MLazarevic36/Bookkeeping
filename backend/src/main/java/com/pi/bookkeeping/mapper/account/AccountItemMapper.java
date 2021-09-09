package com.pi.bookkeeping.mapper.account;

import com.pi.bookkeeping.dto.account.AccountItemDTO;
import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.model.account.AccountItem;
import com.pi.bookkeeping.model.company.CompanyPartner;
import com.pi.bookkeeping.model.conto.Conto;
import com.pi.bookkeeping.service.account.AccountService;
import com.pi.bookkeeping.service.company.CompanyPartnerService;
import com.pi.bookkeeping.service.conto.ContoService;
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

    @Autowired
    private ContoService contoService;

    @Autowired
    private CompanyPartnerService companyPartnerService;

    @Autowired
    private AccountService accountService;

    public AccountItemDTO convertToDto(AccountItem accountItem) {
        AccountItemDTO accountItemDTO = new AccountItemDTO();
        accountItemDTO.setId(accountItem.getId());
        accountItemDTO.setAccount(accountItem.getAccount().getId());
        accountItemDTO.setConto(accountItem.getConto().getId());
        accountItemDTO.setDescription(accountItem.getDescription());
        accountItemDTO.setCurrencyDate(accountItem.getCurrencyDate());
        accountItemDTO.setDocumentDate(accountItem.getDocumentDate());
        accountItemDTO.setSaldo(accountItem.getSaldo());
        accountItemDTO.setDocumentNumber(accountItem.getDocumentNumber());
        accountItemDTO.setOwesAmount(accountItem.getOwesAmount());
        accountItemDTO.setRequiresAmount(accountItem.getRequiresAmount());
        accountItemDTO.setPartner(accountItem.getCompanyPartner().getId());

        return accountItemDTO;
    }

    public List<AccountItemDTO> convertToDtos(Page<AccountItem> accountItemPage) {
        return accountItemPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }


    public List<AccountItemDTO> convertToDtosList(List<AccountItem> accountItemList) {
        return accountItemList.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public AccountItem convertToEntity(AccountItemDTO accountItemDTO) {

        Conto conto = contoService.findOne(accountItemDTO.getConto());
        CompanyPartner companyPartner = companyPartnerService.findOne(accountItemDTO.getPartner());
        Account account = accountService.findOne(accountItemDTO.getAccount());

        AccountItem accountItem = new AccountItem();
        accountItem.setId(accountItemDTO.getId());
        accountItem.setConto(conto);
        accountItem.setCurrencyDate(accountItemDTO.getCurrencyDate());
        accountItem.setDocumentDate(accountItemDTO.getDocumentDate());
        accountItem.setDescription(accountItemDTO.getDescription());
        accountItem.setCompanyPartner(companyPartner);
        accountItem.setRequiresAmount(accountItemDTO.getRequiresAmount());
        accountItem.setOwesAmount(accountItemDTO.getOwesAmount());
        accountItem.setDocumentNumber(accountItemDTO.getDocumentNumber());
        accountItem.setAccount(account);
        accountItem.setSaldo(accountItemDTO.getOwesAmount() - accountItemDTO.getRequiresAmount());

        return accountItem;
    }

    public List<AccountItem> convertToEntities(Collection<AccountItemDTO> accountItemDTOS) {
        return accountItemDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}
