package com.mobilerecharge.recharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.mobilerecharge.recharge.model.PlansModel;
import com.mobilerecharge.recharge.service.PlansServices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class PlanController {
    @Autowired
    private PlansServices service;

    @GetMapping("/plans")
    public List<PlansModel> getPlans()
    {
        return service.getallPlans();
    }
    
    @PostMapping("/plans")
    public ResponseEntity<PlansModel> addPlan(@RequestBody PlansModel plan)
    {
        PlansModel newPlan = service.addPlan(plan);
        return ResponseEntity.ok(newPlan);
    }

    @PostMapping("/addPostmanPlan")
    public ResponseEntity<List<PlansModel>> addPostmanPlan(@RequestBody List<PlansModel> plan)
    {
        List<PlansModel> newPlan = service.addPostmanPlan(plan);
        return ResponseEntity.ok(newPlan);
    }

    @GetMapping("/plans/planCount")
    public long getPlanCount(){
        return service.getPlanCount();
    }
    
}
