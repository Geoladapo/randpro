import express from 'express';
import * as friendController from '../controllers/friends.controller.js';

const FriendsRouter = express.Router();

FriendsRouter.post('/', friendController.createfriend);
FriendsRouter.get('/', friendController.getFriends);
FriendsRouter.get('/:id', friendController.getFriend);

export default FriendsRouter;
