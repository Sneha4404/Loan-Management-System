package com.sneha.loan_management_system.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sneha.loan_management_system.entity.Loan;
import com.sneha.loan_management_system.service.LoanService;

@RestController
@RequestMapping("/loans")
public class LoanController {

    private final LoanService loanService;

    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    // 1. GET all loans
    @GetMapping
    public List<Loan> getAllLoans() {
        return loanService.getAllLoans();
    }

    // 2. GET loan by ID
    @GetMapping("/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long id) {
        return loanService.getLoanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. POST - create a new loan
    @PostMapping
    public Loan createLoan(@RequestBody Loan loan) {
        return loanService.saveLoan(loan);
    }

    // 4. PUT - update an existing loan
    @PutMapping("/{id}")
    public ResponseEntity<Loan> updateLoan(
            @PathVariable Long id,
            @RequestBody Loan loan) {

        return loanService.getLoanById(id)
                .map(existingLoan -> {
                    existingLoan.setName(loan.getName());
                    existingLoan.setEmail(loan.getEmail());
                    existingLoan.setPhone(loan.getPhone());
                    existingLoan.setAmount(loan.getAmount());
                    existingLoan.setDuration(loan.getDuration());
                    existingLoan.setLoanType(loan.getLoanType());
                    existingLoan.setAnnualIncome(loan.getAnnualIncome());
                    existingLoan.setPurpose(loan.getPurpose());
                    existingLoan.setStatus(loan.getStatus());

                    Loan updatedLoan = loanService.saveLoan(existingLoan);
                    return ResponseEntity.ok(updatedLoan);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // 5. DELETE - delete a loan
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoan(@PathVariable Long id) {

        if (loanService.getLoanById(id).isPresent()) {
            loanService.deleteLoan(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}