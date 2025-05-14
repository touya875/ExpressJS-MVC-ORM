import roleApiService from "../service/roleApiService";


const readFunc = async (req, res) => {
    try {
        let data = await roleApiService.getAllRoles();
        return res.status(200).json({
            EM: data.EM, //error message
            EC: data.EC, //error code
            DT: data.DT //data
        })
    } catch {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

const createFunc = async (req, res) => {
    try {
        //validate
        let data = await roleApiService.createNewRoles(req.body);
        return res.status(200).json({
            EM: data.EM, //error message
            EC: data.EC, //error code,
            DT: data.DT, //data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}


const deleteFunc = async (req, res) => {
    try {
        let data = await roleApiService.deleteRole(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

const getRoleByGroup = async (req, res) => {
    try {
        let id = req.params.groupId;
        let data = await roleApiService.getRoleByGroup(id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

const assignRoleToGroup = async (req, res) => {
    try {
        let data = await roleApiService.assignRoleToGroup(req.body.data);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }

}

module.exports = {
    createFunc, readFunc, deleteFunc, getRoleByGroup, assignRoleToGroup
}