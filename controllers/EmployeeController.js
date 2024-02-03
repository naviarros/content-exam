const Employee = require("../models/Employee")

class EmployeeController {

    async index(req, res){
        try {
            const employees = await Employee.find(); // Assuming you have a method to retrieve users from the database
            res.json({
                "success": true,
                "data": employees,
                "server_response": "ok"
            });

        } catch (error)
        {
            res.status(500).json({
                error: "An error occurred"
            })
        }
    }
    
    async show(req, res){
        try {
            const employees = await Employee.findOne(req.body._id); // Assuming you have a method to retrieve users from the database
            res.json({
                "success": true,
                "data": employees,
                "server_response": "ok"
            });

        } catch (error)
        {
            res.status(500).json({
                error: "An error occurred"
            })
        }
    }

    async store(req, res) {
        try {
          const employee_json = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            position: req.body.position,
          };
    
          const createdEmployee = await Employee.create(employee_json);
    
          global.io.emit("employeeInserted", createdEmployee);
    
          res.status(200).json({
            success: true,
            createdEmployee,
            server_response: "ok",
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            error: error,
            server_response: "error",
          });
        }
      }

    async update(req, res)
    {
        try {
            const employee_json = {
                "first_name": req.body.first_name,
                "last_name": req.body.last_name,
                "position": req.body.position
            }

            const updatedUser = await Employee.findByIdAndUpdate(
                req.body._id, employee_json,
                { new: true }
            );

            res.status(200).json({
                success: true,
                updatedUser,
                server_response: "ok",
              });
        } catch (error)
        {
            res.status(400).json({
                "success": false,
                "error": error,
                "server_response": "error"
            })
        }
    }

    async destroy (req, res) {
        try {
            const deleteEmployee = await Employee.findByIdAndDelete(req.body._id)

            if (!deleteEmployee) {
                // If the user is not found
                return res.status(404).json({
                  success: false,
                  error: "Employee not found",
                  server_response: "error"
                });
            }

            res.status(200).json({
                "success": true,
                "server_response": "ok"
            })
        } catch (error) {
            res.status(400).json({
                "success": false,
                "error": error,
                "server_response": "error"
            })
        }
    }
}

module.exports = new EmployeeController();