package com.pi.bookkeeping.mapper.account;

import com.pi.bookkeeping.dto.account.AccountDTO;
import com.pi.bookkeeping.dto.account.AccountDropdownDTO;
import com.pi.bookkeeping.dto.account.AccountItemDTO;
import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.model.account.AccountStatus;
import com.pi.bookkeeping.model.account.AccountType;
import com.pi.bookkeeping.model.company.Company;
import com.pi.bookkeeping.model.company.CompanyDivision;
import com.pi.bookkeeping.service.company.CompanyDivisionService;
import com.pi.bookkeeping.service.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class AccountMapper {

    @Autowired
    private AccountItemMapper accountItemMapper;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private CompanyDivisionService companyDivisionService;

    public AccountDTO convertToDto(Account account) {
        
        AccountDTO accountDTO = new AccountDTO();
        accountDTO.setId(account.getId());
        accountDTO.setAccountDate(account.getAccountDate());
        accountDTO.setAccountType(String.valueOf(account.getAccountType()));
        accountDTO.setCompany(account.getCompany().getId());
        accountDTO.setCompanyDivision(account.getCompanyDivision().getId());
        accountDTO.setOwesAmountTotal(account.getOwesAmountTotal().toString());
        accountDTO.setRequiresAmountTotal(account.getRequiresAmountTotal().toString());
        accountDTO.setSaldo(account.getSaldo());
        accountDTO.setAccountItems(accountItemMapper.convertToDtosList(account.getAccountItems()));
        accountDTO.setAccountStatus(String.valueOf(account.getAccountStatus()));

        return accountDTO;
    }
    public AccountDropdownDTO convertToDtoDropdown(Account account) {

        AccountDropdownDTO accountDTO = new AccountDropdownDTO();
        accountDTO.setId(account.getId());

        return accountDTO;
    }


    public List<AccountDTO> convertToDtos(Page<Account> accountPage) {
        return accountPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<AccountDTO> convertToDtosList(List<Account> accountPage) {
        return accountPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }
    public List<AccountDropdownDTO> convertToDtosDropdown(List<Account> accountList) {
        return accountList.stream().map(this::convertToDtoDropdown).collect(Collectors.toList());
    }


    public Account convertToEntityNaked(AccountDTO accountDTO) {
        Company company = companyService.findOne(accountDTO.getCompany());
        CompanyDivision companyDivision = companyDivisionService.findOne(accountDTO.getCompanyDivision());

        long sumOwes = 0;
        long sumRequires = 0;

        for (AccountItemDTO item : accountDTO.getAccountItems()) {
            Long owesAmount = item.getOwesAmount();
            Long requiresAmount = item.getRequiresAmount();
            sumOwes += owesAmount;
            sumRequires += requiresAmount;
        }

        Account account = new Account();
        account.setId(accountDTO.getId());
        account.setAccountDate(accountDTO.getAccountDate());
        account.setAccountType(AccountType.valueOf(accountDTO.getAccountType()));
        account.setOwesAmountTotal(sumOwes);
        account.setRequiresAmountTotal(sumRequires);
        account.setOwesAmountTotal(sumOwes);
        account.setRequiresAmountTotal(sumRequires);
        account.setSaldo(sumOwes - sumRequires);
        account.setCompany(company);
        account.setCompanyDivision(companyDivision);
        account.setAccountStatus(AccountStatus.valueOf(accountDTO.getAccountStatus()));

        return account;
    }
    public Account convertToEntity(AccountDTO accountDTO) {
        Company company = companyService.findOne(accountDTO.getCompany());
        CompanyDivision companyDivision = companyDivisionService.findOne(accountDTO.getCompanyDivision());

        long sumOwes = 0;
        long sumRequires = 0;

        for (AccountItemDTO item : accountDTO.getAccountItems()) {
            Long owesAmount = item.getOwesAmount();
            Long requiresAmount = item.getRequiresAmount();
            sumOwes += owesAmount;
            sumRequires += requiresAmount;
        }

        Account account = new Account();
        account.setId(accountDTO.getId());
        account.setAccountDate(accountDTO.getAccountDate());
        account.setAccountType(AccountType.valueOf(accountDTO.getAccountType()));
        account.setOwesAmountTotal(sumOwes);
        account.setRequiresAmountTotal(sumRequires);
        account.setOwesAmountTotal(sumOwes);
        account.setRequiresAmountTotal(sumRequires);
        account.setSaldo(sumOwes - sumRequires);
        account.setCompany(company);
        account.setCompanyDivision(companyDivision);
        account.setAccountItems(accountItemMapper.convertToEntities(accountDTO.getAccountItems()));
        account.setAccountStatus(AccountStatus.valueOf(accountDTO.getAccountStatus()));

        return account;
    }


    public List<Account> convertToEntities(Collection<AccountDTO> accountDTOS) {
        return accountDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}
