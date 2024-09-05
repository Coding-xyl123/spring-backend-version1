package com.backend.spring.dao;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "university_name")
    private String universityName;

    @Column(name = "graduation_date")
    private LocalDate graduationDate;

    @Column(name = "opt_status")
    private String optStatus;

    @Column(name = "opt_start_date")
    private LocalDate optStartDate;

    @Column(name = "volunteering_expected_start_date")
    private LocalDate volunteeringExpectedStartDate;

    @ElementCollection
    @Column(name = "desired_role")
    private List<String> desiredRoles; // Changed to a List

    @Column(name = "resume")
    private String resume;

    // Additional field for storing the creation date
    @Column(name = "date")
    private LocalDate date;

    // Constructors
    public Employee() { }

    public Employee(int id, String firstName, String lastName, String email, String phoneNumber,
                    String universityName, LocalDate graduationDate, String optStatus,
                    LocalDate optStartDate, LocalDate volunteeringExpectedStartDate,
                    List<String> desiredRoles, String resume) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.universityName = universityName;
        this.graduationDate = graduationDate;
        this.optStatus = optStatus;
        this.optStartDate = optStartDate;
        this.volunteeringExpectedStartDate = volunteeringExpectedStartDate;
        this.desiredRoles = desiredRoles; // Updated to handle List
        this.resume = resume;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getUniversityName() {
        return universityName;
    }

    public void setUniversityName(String universityName) {
        this.universityName = universityName;
    }

    public LocalDate getGraduationDate() {
        return graduationDate;
    }

    public void setGraduationDate(LocalDate graduationDate) {
        this.graduationDate = graduationDate;
    }

    public String getOptStatus() {
        return optStatus;
    }

    public void setOptStatus(String optStatus) {
        this.optStatus = optStatus;
    }

    public LocalDate getOptStartDate() {
        return optStartDate;
    }

    public void setOptStartDate(LocalDate optStartDate) {
        this.optStartDate = optStartDate;
    }

    public LocalDate getVolunteeringExpectedStartDate() {
        return volunteeringExpectedStartDate;
    }

    public void setVolunteeringExpectedStartDate(LocalDate volunteeringExpectedStartDate) {
        this.volunteeringExpectedStartDate = volunteeringExpectedStartDate;
    }

    public List<String> getDesiredRoles() {
        return desiredRoles;
    }

    public void setDesiredRoles(List<String> desiredRoles) {
        this.desiredRoles = desiredRoles;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    // toString method
    @Override
    public String toString() {
        return "Employee [id=" + id +
                ", firstName=" + firstName +
                ", lastName=" + lastName +
                ", email=" + email +
                ", phoneNumber=" + phoneNumber +
                ", universityName=" + universityName +
                ", graduationDate=" + graduationDate +
                ", optStatus=" + optStatus +
                ", optStartDate=" + optStartDate +
                ", volunteeringExpectedStartDate=" + volunteeringExpectedStartDate +
                ", desiredRoles=" + desiredRoles + // Updated
                ", resume=" + resume + "]";
    }
}
