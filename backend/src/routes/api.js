import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
import { checkUserJWT, checkUserPermission } from "../middleware/JWTAction";
import roleController from "../controller/roleController";

const router = express.Router();
/**
 *
 * @param {*} app
 */


const initApiRoutes = (app) => {


    //API
    router.all('*', checkUserJWT, checkUserPermission);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);
    router.post("/logout", apiController.handleLogout);

    //user routes
    router.get("/account", userController.getUserAccount);
    router.post("/user/create", userController.createFunc);
    router.get("/user/read", userController.readFunc);
    router.put("/user/update", userController.updateFunc);
    router.delete("/user/delete", userController.deleteFunc);

    //role routes
    router.post("/role/create", roleController.createFunc);
    router.get("/role/read", roleController.readFunc);
    router.delete("/role/delete", roleController.deleteFunc);
    router.get("/role/by-group/:groupId", roleController.getRoleByGroup);
    router.post("/role/assign-to-group", roleController.assignRoleToGroup);

    //group routes
    router.get("/group/read", groupController.readFunc);

    return app.use("/api/v1/", router);
}

export default initApiRoutes;