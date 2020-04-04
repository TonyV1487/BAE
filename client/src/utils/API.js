import axios from "axios";
// const mongoose = require("mongoose");

// const server = axios.create({ baseURL: "http://localhost:3001/" });

export default {
  /* User Routes */
  // Gets all users
  getAllUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get(`/api/user/${id}`);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete(`/api/user/${id}`);
  },
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  /* Meetings Routes */
  // Gets all meetings
  getAllMeetings: function() {
    return axios.get("/api/meeting");
  },
  // Gets the meetings with the given id
  getMeeting: function(id) {
    // const objectId = new ObjectId(id);
    // console.log(objectId);
    return axios.get(`/api/meeting/${id}`);
  },
  // Deletes the meetings with the given id
  deleteMeeting: function(id) {
    return axios.delete(`/api/meeting/${id}`);
  },
  // Saves a meetings to the database
  createMeeting: function(meetingData) {
    return axios.post("/api/meeting", meetingData);
  },

  updateMeeting: function(id, meetingData) {
    return axios.put(`/api/meeting/${id}`, meetingData);
  },

  checkUser: function(user) {
    return axios.post("/api/user/login", user);
  }
};
