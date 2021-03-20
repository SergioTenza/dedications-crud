import Role from '../models/Role'
import siteViews from '../models/visits';

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;
        const values = await Promise.all([
            new Role({name: 'user'}).save(),
            new Role({name: 'customer'}).save(),
            new Role({name: 'admin'}).save()
        ])
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

export const createCounter = async () => {
    try {
        const count = await siteViews.estimatedDocumentCount();
        if (count > 0) return;
        const values = await Promise.all([
            new siteViews({counterLogin: 0,counterViews: 0, counterMessages: 0}).save(),
            ])
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

