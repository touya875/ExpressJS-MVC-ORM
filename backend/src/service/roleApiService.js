import { where } from 'sequelize';
import db from '../models/index';

const createNewRoles = async (roles) => {
    try {
        let currentRoles = await db.Roles.findAll({
            attributes: ['url', 'description'],
            raw: true
        })
        const persist = roles.filter(({ url: url1 }) =>
            !currentRoles.some(({ url: url2 }) => url1 === url2)
        );
        if (persist.length === 0) {
            return {
                EM: 'Nothing to create',
                EC: 0,
                DT: []
            }
        }

        await db.Roles.bulkCreate(persist);
        return {
            EM: `Create roles succeeds: ${persist.length} roles...`,
            EC: 0,
            DT: []
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

const getAllRoles = async () => {
    try {
        let data = await db.Roles.findAll({
            order: [['id', 'DESC']]
        })
        return {
            EM: `Get all roles succeeds`,
            EC: 0,
            DT: data
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

const deleteRole = async (id) => {
    try {
        let role = await db.Roles.findOne({
            where: { id: id }
        })
        if (role) {
            await role.destroy();
        }
        return {
            EM: 'Delete roles succeeds',
            EC: 0,
            DT: []
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

const getRoleByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: `Not found any roles`,
                EC: 0,
                DT: []
            }
        }

        let roles = await db.Groups.findOne({
            where: { id: id },
            attributes: ["id", "name", "description"],
            include: {
                model: db.Roles,
                attributes: ["id", "url", "description"],
                through: { attributes: [] }
            }
        })

        return {
            EM: `Get role by group succeeds`,
            EC: 0,
            DT: roles
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

const assignRoleToGroup = async (data) => {
    try {
        await db.Group_Roles.destroy({
            where: { groupId: +data.groupId }
        })
        await db.Group_Roles.bulkCreate(data.groupRoles);
        return {
            EM: `Assign Role to Groups succeeds`,
            EC: 0,
            DT: []
        }
    } catch (error) {
        console.log(error)
        return {
            EM: 'Something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    createNewRoles, getAllRoles, deleteRole, getRoleByGroup, assignRoleToGroup
}