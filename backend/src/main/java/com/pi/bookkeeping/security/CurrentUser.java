package com.pi.bookkeeping.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.lang.annotation.Documented;

@Documented
@AuthenticationPrincipal
public @interface CurrentUser {
}
