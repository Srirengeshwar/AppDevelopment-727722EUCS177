package com.mobilerecharge.recharge.model;

import com.mobilerecharge.recharge.enums.PlanEnum;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;

@Entity
public class PlansModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Double amount;
    private String validity;
    private int data;
    private PlanEnum type;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public PlanEnum getType() {
        return type;
    }
    public void setType(PlanEnum type) {
        this.type = type;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Double getAmount() {
        return amount;
    }
    public void setAmount(Double amount) {
        this.amount = amount;
    }
    public String getValidity() {
        return validity;
    }
    public void setValidity(String validity) {
        this.validity = validity;
    }
    public int getData() {
        return data;
    }
    public void setData(int data) {
        this.data = data;
    }
    public PlansModel(int id, String name, Double amount, String validity, int data, PlanEnum type) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.validity = validity;
        this.data = data;
        this.type = type;
    }
    public PlansModel() {
    }
}
