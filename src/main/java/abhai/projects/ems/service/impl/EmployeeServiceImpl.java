package abhai.projects.ems.service.impl;

import abhai.projects.ems.dto.EmployeeDto;
import abhai.projects.ems.entity.Employee;
import abhai.projects.ems.mapper.EmployeeMapper;
import abhai.projects.ems.repository.EmployeeRepository;
import abhai.projects.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
