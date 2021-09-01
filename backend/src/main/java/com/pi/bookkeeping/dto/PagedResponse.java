package com.pi.bookkeeping.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PagedResponse<T> {

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private List<T> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;

}
