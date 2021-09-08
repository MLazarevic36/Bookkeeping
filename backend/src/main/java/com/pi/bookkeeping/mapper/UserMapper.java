package com.pi.bookkeeping.mapper;

import com.pi.bookkeeping.dto.UserDTO;
import com.pi.bookkeeping.model.Role;
import com.pi.bookkeeping.model.User;
import com.pi.bookkeeping.security.UserPrincipal;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EmployeeMapper employeeMapper;

    public UserDTO convertToDto(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public UserDTO convertPrincipalToDto(UserPrincipal userPrincipal) {
        return new UserDTO(
                userPrincipal.getId(),
                userPrincipal.getUsername(),
                userPrincipal.getPassword(),
                Role.valueOf(userPrincipal.getAuthority().toString()),
                employeeMapper.convertToDto(userPrincipal.getEmployee()));
    }

    public List<UserDTO> convertToDtos(Page<User> contoPage) {
        return contoPage.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public User convertToEntity(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }

    public List<User> convertToEntities(Collection<UserDTO> userDTOS) {
        return userDTOS
                .stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
    }


}
