package com.pi.bookkeeping.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pi.bookkeeping.model.Employee;
import com.pi.bookkeeping.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Objects;

public class UserPrincipal implements UserDetails {

    private Long id;

    private String username;

    @JsonIgnore
    private String password;

    private GrantedAuthority grantedAuthority;

    private Employee employee;

    public UserPrincipal() {

    }

    public UserPrincipal(Long id, String username, String password, GrantedAuthority grantedAuthority, Employee employee) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.grantedAuthority = grantedAuthority;
        this.employee = employee;
    }

    public static UserPrincipal create(User user) {
        String role = user.getRole().toString();
        SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(role);

        return new UserPrincipal(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                simpleGrantedAuthority,
                user.getEmployee()
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public GrantedAuthority getAuthority() {
        return grantedAuthority;
    }

    public Long getId(){
        return id;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public Employee getEmployee() { return employee; }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPrincipal that = (UserPrincipal) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
