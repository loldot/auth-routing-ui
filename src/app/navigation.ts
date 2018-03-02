import { Roles } from "./roles";

export class Navigation {
    public static routeMeta = {
            computers: {
                'my-computer': { text: 'My computer', role: Roles.None },
                'secret-computer': { text: 'Secret computer', role: Roles.ComputerAdmin },
            },
            users: {
                'me': { text: 'My profile', role: Roles.None },
                'all': { text: 'All users', role: Roles.UserAdmin },
            },
            misc: {
                'help': { text: 'My profile', role: Roles.None },
                'send-mail': { text: 'Send mail', role: Roles.Admin },
            }
        };

    public static getMenu(){
        let routeMeta = Navigation.routeMeta;
        var menu = Object.keys(routeMeta).map(topic => {
            return {
                topic: topic,
                links: Object.keys(routeMeta[topic]).map(menuItem => {
                    return { route: `/${topic}/${menuItem}`, text: routeMeta[topic][menuItem].text, role: routeMeta[topic][menuItem].role };
                })
            };
        });

        return menu;
    }
}