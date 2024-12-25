// Managers can manage users(activate/deactivate users)
// They can also handle weekly work hour reports.

import {Employee} from "@/models/users/Employee";
import {User} from "@/models/users/User";

export interface Manager extends User{

    managedEmployees: Employee[];
}