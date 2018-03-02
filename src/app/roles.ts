export class Roles {
    static None = 'none';
    static Admin = 'admin';
    static UserAdmin = 'admin.users';
    static ComputerAdmin = 'admin.computers';

    public static hasRole(requiredRole:string, userRole?: string) : boolean{
        if(!userRole)
            userRole = localStorage.getItem('current_user.role');
            
        return requiredRole == 'none' || requiredRole.startsWith(userRole);
    }
}