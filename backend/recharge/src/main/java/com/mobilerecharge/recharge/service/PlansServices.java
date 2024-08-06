package com.mobilerecharge.recharge.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mobilerecharge.recharge.model.PlansModel;
import com.mobilerecharge.recharge.repository.PlansRepository;

@Service
public class PlansServices
{
    @Autowired
    private PlansRepository repository;

    public List<PlansModel> getallPlans()
    {
        return repository.findAll();
    }
    
    public PlansModel addPlan(PlansModel plan)
    {
        return repository.save(plan);
    }

    public long getPlanCount(){
        return repository.count();
    }

    public List<PlansModel> addPostmanPlan(List<PlansModel> plan)
    {
        repository.saveAll(plan);
        return repository.findAll();
    }
}
