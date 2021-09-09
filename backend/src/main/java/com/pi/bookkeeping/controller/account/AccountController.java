package com.pi.bookkeeping.controller.account;

import com.pi.bookkeeping.dto.Message;
import com.pi.bookkeeping.dto.PagedResponse;
import com.pi.bookkeeping.dto.account.AccountDTO;
import com.pi.bookkeeping.dto.account.AccountDropdownDTO;
import com.pi.bookkeeping.mapper.account.AccountItemMapper;
import com.pi.bookkeeping.mapper.account.AccountMapper;
import com.pi.bookkeeping.model.account.Account;
import com.pi.bookkeeping.service.account.AccountItemService;
import com.pi.bookkeeping.service.account.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountMapper accountMapper;

    @Autowired
    private AccountItemService accountItemService;

    @Autowired
    private AccountItemMapper accountItemMapper;

    @GetMapping(value = "/{id}")
    public ResponseEntity<AccountDTO> getCompany(@PathVariable("id") Long id){
        Account account = accountService.findOne(id);
        try {
            return new ResponseEntity<>(accountMapper.convertToDto(account), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(value = "/page/{companyId}")
    public PagedResponse<AccountDTO> getAccountsPage(Pageable pageable, @PathVariable("companyId") Long id) {

        Page<Account> accounts = accountService.findAllByCompanyPage(pageable, id);

        return new PagedResponse<>(
                accountMapper.convertToDtos(accounts),
                pageable.getPageNumber(),
                pageable.getPageSize(),
                accounts.getTotalElements(),
                accounts.getTotalPages());
    }

    @GetMapping(value = "/dropdown/{companyId}")
    public ResponseEntity<List<AccountDropdownDTO>> getAccountsDropdown(@PathVariable("companyId") Long id) {

        List<Account> accounts = accountService.findAllByCompanyAndNotCredited(id);

        return new ResponseEntity<>(accountMapper.convertToDtosDropdown(accounts), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Message> addAccount(@RequestBody AccountDTO accountDTO) {
        Account account = accountMapper.convertToEntityNaked(accountDTO);
        try {
            account = accountService.save(account);

            Account finalAccount = account;

            accountDTO.getAccountItems().forEach(item ->
                    item.setAccount((Long) finalAccount.getId())
            );

            accountDTO.getAccountItems().forEach(item ->
                    accountItemService.save(accountItemMapper.convertToEntity(item))
            );

            return new ResponseEntity<>(new Message("Uspešno ste dodali nalog.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "/credit/{id}")
    public ResponseEntity<Message> creditAccount(@PathVariable("id") Long id) {
        Account account = accountService.findOne(id);
        try {
            accountService.credit(account);
            return new ResponseEntity<>(new Message("Uspešno ste proknjizili nalog.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "/cancel/{id}")
    public ResponseEntity<Message> cancelAccount(@PathVariable("id") Long id) {
        Account account = accountService.findOne(id);
        try {
            accountService.cancel(account);
            return new ResponseEntity<>(new Message("Uspešno ste stornirali nalog.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity<Message> updateAccount(@RequestBody AccountDTO accountDTO) {
        Account account = accountMapper.convertToEntity(accountDTO);
        try {
            account = accountService.update(account);
            return new ResponseEntity<>(new Message("Uspešno ste izmenili nalog.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Message> deleteAccount(@PathVariable("id") Long id) {
        try {
            accountService.delete(id);
            return new ResponseEntity<>(new Message("Uspešno ste obrisali nalog.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "/items/{id}")
    public ResponseEntity<Message> deleteAccountItem(@PathVariable("id") Long id) {
        try {
            accountItemService.delete(id);
            return new ResponseEntity<>(new Message("Uspešno ste obrisali stavku.","success"), HttpStatus.OK);
        }catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(new Message("Doslo je do greske!","error"), HttpStatus.BAD_REQUEST);
        }
    }
}
