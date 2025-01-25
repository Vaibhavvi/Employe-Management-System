const employees = [
  {
    "id": "E001",
    "firstName": "Amit",
    "email": "Vaibhav@dubey.com",
    "password": "123",
    "task": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Develop new feature for the product",
        "taskDescription": "Develop a new feature to enhance the product's capabilities.",
        "taskDate": "2025-01-20",
        "category": "Development",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Fix bugs in existing features",
        "taskDescription": "Identify and fix bugs in the current version of the product.",
        "taskDate": "2025-01-21",
        "category": "Development",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskTitle": "Refactor codebase for performance improvement",
        "taskDescription": "Refactor sections of the codebase to improve performance and maintainability.",
        "taskDate": "2025-01-15",
        "category": "Development",
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "complete": 1,
          "failed": 0
        }
      }
    ]
  },
  {
    "id": "E002",
    "firstName": "Priya",
    "email": "emily.smith@example.com",
    "password": "123",
    "task": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Create marketing campaign for new product launch",
        "taskDescription": "Design and implement a marketing strategy for the new product.",
        "taskDate": "2025-01-18",
        "category": "Marketing",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Prepare social media posts",
        "taskDescription": "Prepare content for social media channels to promote the upcoming product launch.",
        "taskDate": "2025-01-19",
        "category": "Marketing",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskTitle": "Evaluate marketing campaign performance",
        "taskDescription": "Review the metrics and performance of past marketing campaigns.",
        "taskDate": "2025-01-12",
        "category": "Marketing",
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "complete": 1,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskTitle": "Create email marketing template",
        "taskDescription": "Design a template for email campaigns targeting potential customers.",
        "taskDate": "2025-01-10",
        "category": "Marketing",
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "complete": 1,
          "failed": 0
        }
      }
    ]
  },
  {
    "id": "E003",
    "firstName": "Ravi",
    "email": "james.lee@example.com",
    "password": "123",
    "task": [
      {
        "active": true,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskTitle": "Update employee records",
        "taskDescription": "Ensure employee records are up-to-date and accurate in the database.",
        "taskDate": "2025-01-15",
        "category": "HR",
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "complete": 1,
          "failed": 0
        }
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskTitle": "Process payroll for employees",
        "taskDescription": "Calculate and process employee salaries for the month.",
        "taskDate": "2025-01-10",
        "category": "HR",
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "complete": 1,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Conduct employee performance reviews",
        "taskDescription": "Schedule and conduct performance reviews for all employees in the department.",
        "taskDate": "2025-01-22",
        "category": "HR",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      }
    ]
  },
  {
    "id": "E004",
    "firstName": "Neha",
    "email": "olivia.brown@example.com",
    "password": "123",
    "task": [
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskTitle": "Prepare quarterly financial report",
        "taskDescription": "Gather financial data and prepare the quarterly financial report.",
        "taskDate": "2025-01-10",
        "category": "Finance",
        "taskNumber": {
          "active": 0,
          "newTask": 0,
          "complete": 1,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Review budget for next quarter",
        "taskDescription": "Analyze and review the budget for the upcoming quarter.",
        "taskDate": "2025-01-18",
        "category": "Finance",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "taskTitle": "Prepare tax documents for submission",
        "taskDescription": "Prepare necessary tax documents and reports for filing.",
        "taskDate": "2025-01-25",
        "category": "Finance",
        "taskNumber": {
          "active": 1,
          "newTask": 0,
          "complete": 0,
          "failed": 0
        }
      }
    ]
  },
  {
    "id": "E005",
    "firstName": "Arjun",
    "email": "michael.wilson@example.com",
    "password": "123",
    "task": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": true,
        "taskTitle": "Resolve customer support tickets",
        "taskDescription": "Address and resolve customer support tickets related to technical issues.",
        "taskDate": "2025-01-12",
        "category": "Customer Support",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 1
        }
      },
      {
        "active": true,
        "newTask": false,
        "complete": false,
        "failed": false,
        "taskTitle": "Respond to customer feedback",
        "taskDescription": "Review and respond to customer feedback from the product survey.",
        "taskDate": "2025-01-16",
        "category": "Customer Support",
        "taskNumber": {
          "active": 1,
          "newTask": 0,
          "complete": 0,
          "failed": 0
        }
      },
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskTitle": "Follow up with customers on unresolved issues",
        "taskDescription": "Contact customers with unresolved issues and follow up to ensure resolution.",
        "taskDate": "2025-01-22",
        "category": "Customer Support",
        "taskNumber": {
          "active": 1,
          "newTask": 1,
          "complete": 0,
          "failed": 0
        }
      }
    ]
  }
];

const admin = [
  {
    "id": "A001",
    "firstName": "Simran",
    "email": "sarah.miller@admin.com",
    "password": "123"
  }
];

// Function to set items in localStorage
export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

// Function to get items from localStorage
export const getLocalStorage = () => {
  const employeesData = localStorage.getItem('employees');
  const adminData = localStorage.getItem('admin');

  let employees = [];
  let admin = [];

  if (employeesData) {
    try {
      employees = JSON.parse(employeesData);
    } catch (e) {
      console.error('Error parsing employees data:', e);
    }
  }

  if (adminData) {
    try {
      admin = JSON.parse(adminData);
    } catch (e) {
      console.error('Error parsing admin data:', e);
    }
  }

  console.log('Employees data retrieved:', employees);
  console.log('Admin data retrieved:', admin);

  return { employees, admin };
};
